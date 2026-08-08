import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: [
      "image/avif",
      "image/webp",
    ],
  },

  poweredByHeader: false,

  reactStrictMode: true,

  compiler: {
    removeConsole:
      process.env.NODE_ENV === "production",
  },
};

export default nextConfig;