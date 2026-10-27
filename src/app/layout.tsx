
import type { Metadata } from "next";
import "./globals.css";

import SmoothScroll from "@/components/providers/SmoothScroll";
import { LoadingScreen } from "@/components/layout";

const siteUrl = "https://khizar-studio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Khizar Studio | Premium Web Experiences",
    template: "%s | Khizar Studio",
  },

  description:
    "Khizar Studio creates premium, high-performance websites for businesses, combining modern web development, thoughtful UI/UX design, and engaging digital experiences.",

  alternates: {
    canonical: "/",
  },

  keywords: [
    "Khizar Studio",
    "Premium Website Development",
    "Business Website Design",
    "Next.js Development",
    "React Development",
    "Frontend Development",
    "UI UX Design",
    "Modern Web Development",
  ],

  authors: [{ name: "Khizar Studio" }],
  creator: "Khizar Studio",
  publisher: "Khizar Studio",

  icons: {
    icon: "/icon.png",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Khizar Studio",
    title: "Khizar Studio | Premium Web Experiences",
    description:
      "Premium business websites built with modern technology, thoughtful design, and engaging user experiences.",
    locale: "en_US",
  },

  twitter: {
    card: "summary",
    title: "Khizar Studio | Premium Web Experiences",
    description:
      "Premium websites built with modern development, thoughtful UI design, and engaging interactions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <LoadingScreen />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
