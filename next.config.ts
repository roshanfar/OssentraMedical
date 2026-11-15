import type { NextConfig } from "next";

/** The site is a single page; old section URLs jump to the matching section. */
const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/technology", destination: "/#technology", permanent: true },
      { source: "/clinical-need", destination: "/#need", permanent: true },
      { source: "/team", destination: "/#team", permanent: true },
      { source: "/contact", destination: "/#contact", permanent: true },
    ];
  },
};

export default nextConfig;
