"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 0.5,
          }}
          className="
            fixed
            inset-0
            z-[100]
            flex
            items-center
            justify-center
            bg-black
          "
        >

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="
              text-center
            "
          >

            <h1
              className="
                text-3xl
                font-semibold
                tracking-tight
                text-white
              "
            >
              Khizar Studio
            </h1>


            <p
              className="
                mt-3
                text-xs
                uppercase
                tracking-[0.4em]
                text-zinc-500
              "
            >
              Frontend Developer
            </p>

          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}