import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export', // Enable static optimization
  trailingSlash: true,
  images: {
    unoptimized: true, // Required for static export
  },
  compress: true,
};

export default nextConfig;
