"use client";

import {
  motion,
} from "motion/react";

import {
  useReducedMotion,
} from "@/hooks/useReducedMotion";

import BrowserAddressBar from "./BrowserAddressBar";
import BrowserViewport from "./BrowserViewport";
import BrowserTabs from "./BrowserTabs";
import DemoWebsite from "./DemoWebsite";


export default function Browser() {
  const reducedMotion =
    useReducedMotion();


  return (
    <motion.div
      whileHover={
        reducedMotion
          ? undefined
          : {
              rotateX: 2,
              rotateY: -2,
            }
      }

      transition={{
        duration: 0.4,
      }}

      style={{
        transformStyle:
          "preserve-3d",
      }}

      aria-hidden="true"

      className="
        overflow-hidden
        rounded-2xl
        border
        border-white/10
        bg-[#0a0a0a]
        shadow-2xl
      "
    >
      {/* Browser Header */}

      <div
        className="
          border-b
          border-white/10
          bg-[#111111]
        "
      >
        <BrowserTabs />

        <BrowserAddressBar
          url="summitconstruction.com"
        />
      </div>


      {/* Website Preview */}

      <BrowserViewport>
        <DemoWebsite />
      </BrowserViewport>

    </motion.div>
  );
}