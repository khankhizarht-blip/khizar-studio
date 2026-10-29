"use client";

import {
  useEffect,
  useState,
} from "react";

import { Menu, X } from "lucide-react";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";

import Logo from "./Logo";
import MobileMenu from "./MobileMenu";

import { navigation } from "@/config/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();

  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true }
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (
      event: KeyboardEvent
    ) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [open]);

  const getNavigationHref = (
    href: string
  ) => {
    // Home always goes to the homepage.
    if (href === "/") {
      return "/";
    }

    // Section links work normally on the homepage.
    if (isHomePage) {
      return href;
    }

    // On project pages, return to the homepage
    // and then scroll to the requested section.
    if (href.startsWith("#")) {
      return `/${href}`;
    }

    return href;
  };

  return (
    <>
      <motion.header
        initial={{
          y: -30,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.6,
        }}
        className="
          fixed
          left-0
          top-0
          z-50
          w-full
          px-4
          pt-5
        "
      >
        <nav
          aria-label="Main navigation"
          className={`
            mx-auto
            flex
            max-w-7xl
            items-center
            justify-between
            rounded-full
            border
            border-[var(--color-border)]
            px-6
            py-3
            transition-all
            duration-[var(--duration-normal)]
            lg:px-8

            ${
              scrolled
                ? "bg-[var(--color-background)]/80 backdrop-blur-xl shadow-2xl"
                : "bg-[var(--color-background)]/40 backdrop-blur-md"
            }
          `}
        >
          <Logo />

          {/* Desktop Navigation */}

          <div
            className="
              hidden
              items-center
              gap-8
              md:flex
            "
          >
            {navigation.map((item) => (
              <a
                key={item.label}
                href={getNavigationHref(item.href)}
                className="
                  rounded-full
                  px-2
                  py-1
                  text-sm
                  text-[var(--color-text-secondary)]
                  outline-none
                  transition-colors
                  hover:text-[var(--color-text-primary)]
                  focus-visible:text-[var(--color-text-primary)]
                  focus-visible:ring-2
                  focus-visible:ring-[var(--color-border-strong)]
                "
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Toggle */}

          <button
            type="button"
            aria-label={
              open
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() =>
              setOpen((current) => !current)
            }
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-[var(--color-border)]
              text-[var(--color-text-primary)]
              outline-none
              transition-colors
              hover:bg-[var(--color-background-hover)]
              focus-visible:ring-2
              focus-visible:ring-[var(--color-border-strong)]
              md:hidden
            "
          >
            {open ? (
              <X
                aria-hidden="true"
                className="h-5 w-5"
              />
            ) : (
              <Menu
                aria-hidden="true"
                className="h-5 w-5"
              />
            )}
          </button>
        </nav>
      </motion.header>

      <MobileMenu
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}