import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://jonathanchuang.me'

    return [
        {
            url: baseUrl,
            lastModified: new Date('2025-09-19'),
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: `${baseUrl}/resume.pdf`,
            lastModified: new Date('2025-09-19'),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
    ]
}
