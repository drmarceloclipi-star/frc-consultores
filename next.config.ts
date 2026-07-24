import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  outputFileTracingRoot: process.cwd(),
  turbopack: {
    root: process.cwd(),
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/pt",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
