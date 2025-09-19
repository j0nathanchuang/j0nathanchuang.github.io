import { MetadataRoute } from 'next';

// Force static generation for robots.txt when using output: export
export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://jonathanchuang.me/sitemap.xml',
  };
}
