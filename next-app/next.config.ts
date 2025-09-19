import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static optimization
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true, // Required for static export
  },
  // Enable compression
  compress: true,
  // Enable experimental features for better performance
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;
