import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  output: "export",
  experimental: {
    inlineCss: true,
  },
  skipTrailingSlashRedirect: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
        port: "",
        pathname: "/**",
      },
    ],
  },
}

export default nextConfig
