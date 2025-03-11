import { Metadata } from "next";

const metadata: Metadata = {
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

export default metadata; 