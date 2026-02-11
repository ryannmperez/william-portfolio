import { MetadataRoute } from 'next'
import { performances } from '@/data/performances'
import { designs } from '@/data/designs'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://williamrenebryant.com'

  // Performance pages
  const performancePages = performances
    .filter(p => !p.placeholder)
    .map(p => ({
      url: `${baseUrl}/performance/${p.id}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }))

  // Design pages
  const designPages = designs
    .filter(d => !d.placeholder)
    .map(d => ({
      url: `${baseUrl}/design/${d.id}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/resume`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/reel`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    ...performancePages,
    ...designPages,
  ]
}
