import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true, // حتى لا يتم تحسين الصور لأنه gh-pages لا يدعمه
  },
  basePath: "/Task7-adv-Tours",
  assetPrefix: "/Task7-adv-Tours/",
};

export default nextConfig;
