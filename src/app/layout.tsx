import type { Metadata } from "next";
import "./globals.css";

import SmoothScroll from "@/components/providers/SmoothScroll";
import { LoadingScreen } from "@/components/layout";

export const metadata: Metadata = {
  metadataBase: new URL("https://khizarstudio.com"),

  title: {
    default: "Khizar Studio | Premium Web Experiences",
    template: "%s | Khizar Studio",
  },

  description:
    "Khizar Studio creates premium, high-performance websites for businesses using Next.js, TypeScript, modern UI design, and advanced interactions.",

  keywords: [
    "Khizar Studio",
    "Next.js Developer",
    "Frontend Developer",
    "React Developer",
    "Premium Website Development",
    "Business Website Design",
    "UI UX Development",
    "Modern Web Development",
  ],

  authors: [
    {
      name: "Khizar Studio",
    },
  ],

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
    siteName: "Khizar Studio",
    title: "Khizar Studio | Premium Web Experiences",
    description:
      "Premium business websites built with modern technology, exceptional design, and smooth user experiences.",
    locale: "en_US",
    images: [
      {
        url: "/icon.png",
        width: 512,
        height: 512,
        alt: "Khizar Studio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Khizar Studio | Premium Web Experiences",
    description:
      "Premium websites built with Next.js, modern UI systems, and high-performance animations.",
    creator: "@KhizarStudio",
    images: ["/icon.png"],
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