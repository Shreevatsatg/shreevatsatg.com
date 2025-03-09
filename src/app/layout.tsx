import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/navbar';
import './globals.css';

export const metadata: Metadata = {
  title: 'Shreevatsa TG',
  description: 'Personal website of Shreevatsa TG',
  icons: {
    icon: '/favcon.png',
    apple: '/favcon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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