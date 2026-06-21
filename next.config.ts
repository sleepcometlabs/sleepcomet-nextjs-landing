import path from "path"
import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  output: "export",
  experimental: {
    inlineCss: true,
  },
  turbopack: {
    root: path.resolve(__dirname),
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
