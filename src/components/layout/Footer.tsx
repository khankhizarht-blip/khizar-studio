import Logo from "./Logo";
import { siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">

        <Logo />

        <p className="text-sm text-zinc-500">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>

      </div>
    </footer>
  );
}