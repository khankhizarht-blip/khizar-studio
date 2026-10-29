"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { usePathname } from "next/navigation";

import { navigation } from "@/config/navigation";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({
  open,
  onClose,
}: MobileMenuProps) {
  const pathname = usePathname();

  const isHomePage = pathname === "/";

  const getNavigationHref = (
    href: string
  ) => {
    if (href === "/") {
      return "/";
    }

    if (isHomePage) {
      return href;
    }

    if (href.startsWith("#")) {
      return `/${href}`;
    }

    return href;
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          id="mobile-navigation"
          initial={{
            opacity: 0,
            y: -20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: -20,
          }}
          transition={{
            duration: 0.3,
          }}
          className="
            fixed
            inset-0
            z-40
            bg-[var(--color-background)]/80
            px-6
            pt-28
            backdrop-blur-xl
            md:hidden
          "
        >
          <div
            className="
              rounded-3xl
              border
              border-[var(--color-border)]
              bg-[var(--color-background-surface)]/60
              p-8
            "
          >
            <nav
              aria-label="Mobile navigation"
              className="
                flex
                flex-col
                gap-6
              "
            >
              {navigation.map(
                (item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{
                      opacity: 0,
                      x: -20,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: index * 0.05,
                    }}
                  >
                    <Link
                      href={getNavigationHref(
                        item.href
                      )}
                      onClick={onClose}
                      className="
                        block
                        text-2xl
                        font-medium
                        text-[var(--color-text-primary)]
                        outline-none
                        transition
                        hover:text-[var(--color-text-secondary)]
                        focus-visible:text-[var(--color-text-secondary)]
                      "
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                )
              )}
            </nav>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}