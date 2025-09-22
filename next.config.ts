import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export', // Enable static optimization
  images: {
    unoptimized: true, // Required for static export
  },
  compress: true,
};

export default nextConfig;
