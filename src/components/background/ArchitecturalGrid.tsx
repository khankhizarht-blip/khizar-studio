import { useId } from "react";
import styles from "./CinematicEnvironment.module.css";

/** Architectural bays converge off-center; no repeated icon/cross artwork. */
export default function ArchitecturalGrid() {
  const id = useId();
  return (
    <svg className={styles.grid} viewBox="0 0 1600 1000" fill="none" preserveAspectRatio="xMidYMid slice" focusable="false">
      <defs>
        <linearGradient id={id} x1="800" y1="290" x2="800" y2="1000" gradientUnits="userSpaceOnUse">
          <stop stopColor="currentColor" stopOpacity="0" />
          <stop offset=".45" stopColor="currentColor" stopOpacity=".35" />
          <stop offset="1" stopColor="currentColor" stopOpacity=".65" />
        </linearGradient>
      </defs>
      <g stroke={`url(#${id})`} strokeWidth=".8">
        {[-1800, -900, -350, 80, 440, 800, 1160, 1520, 1950, 2500, 3400].map((x) => (
          <path key={x} d={`M 1030 290 L ${x} 1050`} />
        ))}
        {[345, 380, 425, 485, 565, 670, 810, 995].map((y) => (
          <path key={y} d={`M -400 ${y} H 2000`} />
        ))}
      </g>
      <path d="M 90 670 V 170 H 330 M 90 220 H 260 M 1510 810 V 115 H 1270 M 1510 165 H 1380" stroke="currentColor" strokeOpacity=".22" />
      <path d="M 90 670 H 270 M 1330 810 H 1510" stroke="currentColor" strokeOpacity=".5" />
    </svg>
  );
}
