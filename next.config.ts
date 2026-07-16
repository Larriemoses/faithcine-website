import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Vinext/Workers serves committed media directly; this avoids a runtime image
  // optimizer hop and keeps local editorial assets reliable in every viewport.
  images: { unoptimized: true },
};

export default nextConfig;
