
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
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-background)]">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr] lg:gap-16">
          <div>
            <Logo />

            <p className="mt-5 max-w-sm text-sm leading-7 text-[var(--color-text-secondary)]">
              Thoughtful design and modern development for businesses
              ready to make a stronger impression online.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-medium text-[var(--color-text-primary)]">
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
                  className="text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text-primary)]"
                >
                  {item.label}
                </Link>
              ))}

              <Link
                href="/#faq"
                className="text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text-primary)]"
              >
                FAQs
              </Link>
            </nav>
          </div>

          <div>
            <h2 className="text-sm font-medium text-[var(--color-text-primary)]">
              Have a project in mind?
            </h2>

            <p className="mt-5 max-w-xs text-sm leading-6 text-[var(--color-text-secondary)]">
              Let&apos;s talk about your business and what your website
              could achieve.
            </p>

            <a
              href={`mailto:${siteConfig.email}?subject=Website%20Project%20Enquiry`}
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[var(--color-text-primary)] transition-colors hover:text-[var(--color-text-primary)]"
            >
              Get in touch
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-[var(--color-border)] pt-6 text-xs text-[var(--color-text-muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>

          <Link
            href="/"
            className="w-fit transition-colors hover:text-[var(--color-text-primary)]"
          >
            Designed with purpose.
          </Link>
        </div>
      </div>
    </footer>
  );
}


