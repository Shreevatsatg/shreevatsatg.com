'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8 text-center">
      <div className="max-w-md">
        <h1 className="text-6xl font-bold text-amber-500 mb-4">404</h1>
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Page Not Found</h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>
        <Link 
          href="/"
          className="px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-medium rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:translate-y-[-2px]"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
} 