import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.shreevatsatg.com';
  const currentDate = new Date();
  
  // Define all your routes here
  const routes = [
    '',
    '/about',
    '/projects',
    '/drawings',
    '/blog',
    '/contact',
  ];

  // Create the standard sitemap entries
  const standardEntries = routes.map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: route === '/blog' ? 'weekly' : 'monthly' as 'weekly' | 'monthly',
    priority: route === '' ? 1.0 : 0.8,
  }));

  return standardEntries;
} 