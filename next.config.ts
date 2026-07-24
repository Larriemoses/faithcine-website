import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Editorial media is already optimized and committed with the site.
  images: { unoptimized: true },
};

export default nextConfig;
