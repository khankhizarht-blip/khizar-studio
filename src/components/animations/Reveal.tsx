
"use client";

import { ReactNode, useRef } from "react";
import { gsap } from "@/lib/gsap";
import useGSAP from "@/hooks/useGSAP";
import { motionSettings } from "@/design-system";

interface RevealProps {
  children: ReactNode;
  className?: string;
}

export default function Reveal({ children, className }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!ref.current) return;

      const element = ref.current;

      gsap.fromTo(
        element,
        {
          y: motionSettings.distance.large,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: motionSettings.duration.reveal,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            once: true,
          },
        }
      );
    },
    ref
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
