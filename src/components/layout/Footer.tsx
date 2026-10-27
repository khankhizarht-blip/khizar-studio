
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import Logo from "./Logo";
import { siteConfig } from "@/config/site";
import { navigation } from "@/config/navigation";

export default function Footer() {
  const footerLinks = navigation.filter((item) =>
    ["Projects", "Services", "About"].includes(item.label)
  );

  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr] lg:gap-16">
          <div>
            <Logo />

            <p className="mt-5 max-w-sm text-sm leading-7 text-zinc-400">
              Thoughtful design and modern development for businesses
              ready to make a stronger impression online.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-medium text-white">
              Explore
            </h2>

            <nav
              aria-label="Footer navigation"
              className="mt-5 flex flex-col items-start gap-3"
            >
              {footerLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm text-zinc-500 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              ))}

              <Link
                href="/#faq"
                className="text-sm text-zinc-500 transition-colors hover:text-white"
              >
                FAQs
              </Link>
            </nav>
          </div>

          <div>
            <h2 className="text-sm font-medium text-white">
              Have a project in mind?
            </h2>

            <p className="mt-5 max-w-xs text-sm leading-6 text-zinc-400">
              Let&apos;s talk about your business and what your website
              could achieve.
            </p>

            <a
              href="mailto:khankhizar@gmail.com?subject=Website%20Project%20Enquiry"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-zinc-300"
            >
              Get in touch
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            Â© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>

          <Link
            href="/"
            className="w-fit transition-colors hover:text-white"
          >
            Designed with purpose.
          </Link>
        </div>
      </div>
    </footer>
  );
}

