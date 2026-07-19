import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "FaithCine",
    short_name: "FaithCine",
    description: "Christian media and technology from Nigeria for Africa.",
    start_url: "/",
    display: "standalone",
    background_color: "#020202",
    theme_color: "#0f62fe",
    icons: [
      { src: "/icon.png", sizes: "512x512", type: "image/png" },
      { src: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
