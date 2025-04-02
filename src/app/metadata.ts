import { Metadata } from "next";

const metadata = {
  title: {
    default: 'Shreevatsa TG | Shreevatsatg |shreevatsa | Developer & Artist',
    template: '%s | Shreevatsa TG | Shreevatsatg'
  },
  description: 'Personal website of Shreevatsa TG (Shreevatsatg) - BCA student, web developer, and digital artist based in Bangalore, India.',
  keywords: ['Shreevatsa', 'Shreevatsatg', 'Shreevatsa TG', 'web developer', 'artist', 'BCA student', 'portfolio', 'Bangalore', 'India', 'web development', 'digital art'],
  authors: [{ name: 'Shreevatsa TG (Shreevatsatg)', url: 'https://www.shreevatsatg.com' }],
  creator: 'Shreevatsa TG (Shreevatsatg)',
  publisher: 'Shreevatsa TG (Shreevatsatg)',
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
    title: 'Shreevatsa TG | Shreevatsatg | Developer & Artist',
    description: 'Personal website of Shreevatsa TG (Shreevatsatg) - BCA student, web developer, and digital artist based in Bangalore, India.',
    siteName: 'Shreevatsa TG | Shreevatsatg',
    images: [
      {
        url: '/photo_2024-09-13_09-13-24.jpg',
        width: 1200,
        height: 630,
        alt: 'Shreevatsa TG (Shreevatsatg)',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shreevatsa TG | Shreevatsatg | Developer & Artist',
    description: 'Personal website of Shreevatsa TG (Shreevatsatg) - BCA student, web developer, and digital artist based in Bangalore, India.',
    images: ['/photo_2024-09-13_09-13-24.jpg'],
    creator: '@shreevatsatg',
  },
};

export default metadata; 