import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.shreevatsatg.com';
  
  // Define all your routes here
  const routes = [
    '',
    '/about',
    '/projects',
    '/drawings',
    '/blog',
    '/contact',
  ];

  return routes.map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));
} 