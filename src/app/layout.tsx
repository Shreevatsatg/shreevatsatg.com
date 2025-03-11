import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/navbar';
import './globals.css';
import StructuredData from '@/components/StructuredData';
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
        <StructuredData />
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