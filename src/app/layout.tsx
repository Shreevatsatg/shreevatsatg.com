import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/navbar';
import './globals.css';
import Script from 'next/script';
import metadata from './metadata';

export { metadata };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          id="schema-org-person"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Shreevatsa TG',
              url: 'https://www.shreevatsatg.com',
              image: 'https://www.shreevatsatg.com/photo_2024-09-13_09-13-24.jpg',
              sameAs: [
                'https://github.com/Shreevatsatg',
                'https://www.linkedin.com/in/shreevatsa-t-g-7b6509314',
                'https://www.instagram.com/shreevatsa_tg'
              ],
              jobTitle: 'Student & Web Developer',
              worksFor: {
                '@type': 'Organization',
                name: 'BCA Program'
              },
              description: 'BCA student, web developer, and digital artist based in Bangalore, India.'
            })
          }}
        />
        <Script
          id="schema-org-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Shreevatsa TG',
              url: 'https://www.shreevatsatg.com',
              description: 'Personal website of Shreevatsa TG - BCA student, web developer, and digital artist',
              potentialAction: {
                '@type': 'SearchAction',
                target: 'https://www.shreevatsatg.com/search?q={search_term_string}',
                'query-input': 'required name=search_term_string'
              }
            })
          }}
        />
      </head>
      <body>
        <ThemeProvider>
          <Navbar />
          <main className="min-h-screen bg-gradient-to-br from-[var(--bg-primary)] to-[var(--bg-tertiary)] dark:from-gray-900 dark:to-gray-800">
            {children}
          </main>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
} 