
"use client";

import { Suspense, useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

interface LaptopSceneProps {
  progress: React.RefObject<number>;
}

const MODEL_PATH = "/models/khizar-laptop-summit.glb";
const LAPTOP_Y = -1.18;

/*
 * WEBSITE SCREEN ALIGNMENT CONTROLS
 *
 * Change these values to fit the website
 * perfectly within the laptop's display.
 */
const SCREEN_FIT = {
  x: 0,
  y: -0.01,
  z: 0.04,
  width: 1.01,
  height: 1.03,
};

function clamp(value: number) {
  return Math.max(0, Math.min(1, value));
}

function phase(
  progress: number,
  start: number,
  end: number
) {
  const t = clamp((progress - start) / (end - start));
  return t * t * (3 - 2 * t);
}

function AnimatedLaptop({ progress }: LaptopSceneProps) {
  const rootRef = useRef<THREE.Group>(null);
  const mixerRef = useRef<THREE.AnimationMixer | null>(null);

  const { scene, animations } = useGLTF(MODEL_PATH);
  const model = useMemo(() => scene.clone(true), [scene]);

  const clip = useMemo(
    () =>
      THREE.AnimationClip.findByName(
        animations,
        "Cube.001Action"
      ) ?? animations[0],
    [animations]
  );

  // Store the screen mesh in a ref so Three.js
  // can update it without React immutability errors.
  const screenRef = useRef<THREE.Object3D | null>(null);

  useEffect(() => {
    const screen = model.getObjectByName("SummitScreenFront");

    screenRef.current = screen ?? null;

    if (!screen) {
      console.warn(
        "SummitScreenFront not found. Check the installed GLB."
      );
      return;
    }

    // Adjust position relative to the GLB's original placement.
    const originalPosition = screen.position.clone();
    const originalScale = screen.scale.clone();

    screen.position.set(
      originalPosition.x + SCREEN_FIT.x,
      originalPosition.y + SCREEN_FIT.y,
      originalPosition.z + SCREEN_FIT.z
    );

    screen.scale.set(
      originalScale.x * SCREEN_FIT.width,
      originalScale.y * SCREEN_FIT.height,
      originalScale.z
    );

    return () => {
      screen.position.copy(originalPosition);
      screen.scale.copy(originalScale);
      screenRef.current = null;
    };
  }, [model]);

  useEffect(() => {
    if (!clip) return;

    const mixer = new THREE.AnimationMixer(model);
    const action = mixer.clipAction(clip);

    action.setLoop(THREE.LoopOnce, 1);
    action.clampWhenFinished = true;
    action.play();

    mixerRef.current = mixer;

    return () => {
      mixerRef.current = null;
      mixer.stopAllAction();
      mixer.uncacheRoot(model);
    };
  }, [clip, model]);

  useFrame(() => {
    const root = rootRef.current;
    if (!root) return;

    const p = clamp(progress.current);
    const open = phase(p, 0.03, 0.35);
    const zoom = phase(p, 0.36, 0.55);
    const turn = phase(p, 0.63, 0.84);
    const exit = phase(p, 0.87, 1);

    const mixer = mixerRef.current;

    if (mixer && clip) {
      const closedTime = Math.max(0, clip.duration - 0.02);

      mixer.setTime(
        THREE.MathUtils.lerp(closedTime, 0.05, open)
      );
    }

    root.rotation.y =
      Math.PI - 0.16 + 0.16 * open + 0.28 * turn;

    root.rotation.x = -0.055 + 0.035 * turn;
    root.rotation.z = -0.012 + 0.03 * turn;

    root.scale.setScalar(
      3.1 + 0.08 * open + 0.37 * zoom - 0.43 * exit
    );

    root.position.y =
      LAPTOP_Y + 0.06 * open - 0.12 * exit;
  });

  return (
    <group
      ref={rootRef}
      position={[0, LAPTOP_Y, 0]}
      rotation={[-0.055, Math.PI - 0.16, -0.012]}
      scale={3.1}
    >
      <primitive object={model} />
    </group>
  );
}

export default function LaptopScene({
  progress,
}: LaptopSceneProps) {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{
        position: [0, 1.55, 8],
        fov: 36,
        near: 0.1,
        far: 80,
      }}
      gl={{
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      }}
      style={{
        width: "100%",
        height: "100%",
        background: "transparent",
      }}
    >
      <ambientLight intensity={2.2} />

      <hemisphereLight
        args={["#deebff", "#516075", 2.2]}
      />

      <directionalLight
        position={[-4, 6, 6]}
        intensity={4}
        color="#f0f5ff"
      />

      <directionalLight
        position={[4, 3, -4]}
        intensity={3}
        color="#d6b780"
      />

      <pointLight
        position={[0, 3, 5]}
        intensity={8}
        distance={15}
        color="#b2cbed"
      />

      <Suspense fallback={null}>
        <AnimatedLaptop progress={progress} />
      </Suspense>
    </Canvas>
  );
}

useGLTF.preload(MODEL_PATH);
