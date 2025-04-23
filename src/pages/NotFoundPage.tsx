'use client';

import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--bg-primary)] to-[var(--bg-tertiary)] dark:from-gray-900 dark:to-gray-800 flex flex-col items-center justify-center p-4 md:p-8">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold text-[var(--accent-primary)] mb-4">404</h1>
        <h2 className="text-2xl md:text-4xl font-bold text-[var(--text-primary)] dark:text-white mb-6">Page Not Found</h2>
        <p className="text-lg md:text-xl text-[var(--text-secondary)] dark:text-gray-300 mb-8">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>
        <Link
          to="/"
          className="px-8 py-4 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] text-white font-medium rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:translate-y-[-2px] focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)] focus:ring-opacity-50"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
} 