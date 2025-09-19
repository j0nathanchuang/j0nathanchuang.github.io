import { MetadataRoute } from 'next';

// Force static generation for manifest when using output: export
export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Jonathan Chuang',
    short_name: 'Jonathan Chuang',
    description:
      'Full-stack software engineer at Greenlight with experience at Magical ($2M+ ARR growth), Capital One, and LeaseMagnets. University of Michigan graduate specializing in TypeScript, React, Next.js, and AI tools.',
    start_url: '/',
    display: 'standalone',
    background_color: '#fdfdf4',
    theme_color: '#2e612e',
    icons: [
      {
        src: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        src: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
