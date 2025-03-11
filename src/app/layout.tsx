import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/navbar';
import './globals.css';
import Script from 'next/script';

export const metadata: Metadata = {
  title: {
    default: 'Shreevatsa TG | Developer & Artist',
    template: '%s | Shreevatsa TG'
  },
  description: 'Personal website of Shreevatsa TG - BCA student, web developer, and digital artist based in Bangalore, India.',
  keywords: ['Shreevatsa TG', 'web developer', 'artist', 'BCA student', 'portfolio', 'Bangalore', 'India', 'web development', 'digital art'],
  authors: [{ name: 'Shreevatsa TG', url: 'https://www.shreevatsatg.com' }],
  creator: 'Shreevatsa TG',
  publisher: 'Shreevatsa TG',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.shreevatsatg.com'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-video-preview': -1,
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favcon.png',
    apple: '/favcon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.shreevatsatg.com',
    title: 'Shreevatsa TG | Developer & Artist',
    description: 'Personal website of Shreevatsa TG - BCA student, web developer, and digital artist based in Bangalore, India.',
    siteName: 'Shreevatsa TG',
    images: [
      {
        url: '/photo_2024-09-13_09-13-24.jpg',
        width: 1200,
        height: 630,
        alt: 'Shreevatsa TG',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shreevatsa TG | Developer & Artist',
    description: 'Personal website of Shreevatsa TG - BCA student, web developer, and digital artist based in Bangalore, India.',
    images: ['/photo_2024-09-13_09-13-24.jpg'],
    creator: '@shreevatsatg',
  },
};

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