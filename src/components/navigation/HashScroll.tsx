"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useEntrance } from "@/components/providers/EntranceProvider";

export default function HashScroll() {
  const pathname = usePathname();
  const { ready } = useEntrance();

  useEffect(() => {
    if (pathname !== "/" || !ready) return;

    let pending: number | undefined;
    let later: number | undefined;

    const scrollToHash = () => {
      const hash = window.location.hash;
      if (!hash || hash.length < 2) return;
      let id: string;
      try {
        id = decodeURIComponent(hash.substring(1));
      } catch {
        return;
      }
      const target = document.getElementById(id);
      if (!target) return;
      const top = target.getBoundingClientRect().top + window.scrollY - 104;
      window.scrollTo({ top: Math.max(0, top), behavior: "instant" });
    };

    const scheduleScroll = () => {
      if (pending !== undefined) window.clearTimeout(pending);
      if (later !== undefined) window.clearTimeout(later);
      pending = window.setTimeout(scrollToHash, 80);
      later = window.setTimeout(scrollToHash, 450);
    };

    scheduleScroll();
    window.addEventListener("hashchange", scheduleScroll);
    return () => {
      window.removeEventListener("hashchange", scheduleScroll);
      if (pending !== undefined) window.clearTimeout(pending);
      if (later !== undefined) window.clearTimeout(later);
    };
  }, [pathname, ready]);

  return null;
}
