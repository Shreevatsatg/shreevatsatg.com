# Shreevatsa TG Portfolio Website

This is my personal portfolio website, showcasing my projects, drawings, and blog content.

## Visit Website

[Visit shreevatsatg.com](https://shreevatsatg.com)

## Features

- Responsive design for all device sizes
- Dark/light theme support
- Structured data for SEO optimization
- Optimized image rendering
- Blog section with detailed articles
- Projects showcase
- Art/drawings gallery
- Contact information

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- React Router for navigation
- Framer Motion for animations
- Headless UI components
- Lucide React icons
- Vite for fast development and building

## Project Structure

```
shreevatsatg.com/
├── public/                # Static assets
│   ├── blog/              # Blog images
│   ├── drawing/           # Drawing/artwork images
│   ├── favicon.png        # Site favicon
│   └── sitemap.xml        # XML sitemap for SEO
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── blogcard.tsx   # Blog card component
│   │   ├── navbar.jsx     # Navigation component
│   │   ├── OptimizedImage.tsx  # Image optimization component
│   │   ├── StructuredData.tsx  # SEO structured data component
│   │   └── ThemeProvider.tsx   # Theme context provider
│   ├── pages/             # Page components for routes
│   │   ├── AboutPage.tsx  # About page
│   │   ├── BlogPage.tsx   # Blog listing page
│   │   ├── ContactPage.tsx # Contact information
│   │   ├── DrawingsPage.tsx # Artwork gallery
│   │   ├── HomePage.tsx   # Landing page
│   │   ├── NotFoundPage.tsx # 404 page
│   │   └── ProjectsPage.tsx # Projects showcase
│   ├── globals.css        # Global styles and Tailwind directives
│   ├── App.tsx            # Main App component with routing
│   └── main.tsx           # Entry point
├── .eslintrc.json         # ESLint configuration
├── .gitignore             # Git ignore rules
├── index.html             # HTML entry point
├── package.json           # Dependencies and scripts
├── postcss.config.js      # PostCSS configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
├── tsconfig.node.json     # TypeScript Node configuration
└── vite.config.ts         # Vite configuration
```

### Theme Support

The site supports both light and dark themes via the ThemeProvider component.

## Author

Shreevatsa TG
