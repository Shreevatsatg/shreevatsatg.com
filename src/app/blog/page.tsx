'use client';

import Blog, { BlogPost, FeaturedPost, ContentSection } from '@/components/blogcard';

// Sample blog post data structure with full content
const blogPosts: BlogPost[] = [
  {
    id: "post-1",
    title: "The Art of Painting: A Creative Escape",
    date: "Feb 20, 2025",
    category: "Tools",
    excerpt: "How painting serves as a meditative and expressive outlet in my daily life.",
    content: `
      Amidst coding, workouts, and academics, painting has always been my creative escape. It allows me to express emotions, experiment with colors, and create something truly unique. 
      
      I love working with oil paints on canvas, which brings a bold and striking effect to my artwork. One of my most memorable paintings is  Krishna artwork it  was a rewarding experience that deepened my connection to art.
      
      Painting teaches patience, focus, and the beauty of imperfection. Whether you're an artist or just starting, embracing creativity through art can be a deeply fulfilling journey.
    `
  },
  {
    id: "post-2",
    title: "Mastering DSA with C++",
    date: "Jan 11, 2025",
    category: "Programming",
    excerpt: "My strategy for learning data structures and algorithms effectively in C++.",
    content: `
      As a BCA student aspiring to excel in programming, I've dedicated time to learning data structures and algorithms (DSA) using C++. Understanding DSA is crucial for cracking coding interviews and building efficient applications.
      
      My approach includes practicing problems daily on platforms like LeetCode and CodeChef, focusing on concepts like recursion, dynamic programming, and graph theory. I also maintain a repository of solved problems to track my progress.
      
      If you're learning DSA, consistency is key. Start with the basics, solve problems regularly, and don't hesitate to debug your way through tough challenges!
    `
  },
  {
    id: "post-3",
    title: "Git & Terminal: Essential Developer Tools",
    date: "Dec 05, 2024",
    category: "Tools",
    excerpt: "Why mastering Git and terminal commands is crucial for modern developers.",
    content: `
      As developers, we rely on various tools to streamline our workflow. Two tools I consider essential are Git and the terminal. Git revolutionizes how we track changes and collaborate on projects, making version control intuitive and powerful.
      
      Learning Git commands like commit, push, pull, merge, and rebase has significantly improved my development process. I can experiment with features in separate branches without affecting the main codebase, and easily collaborate with other developers.
      
      The terminal, on the other hand, provides a powerful way to interact with your system. Whether you're navigating files, running scripts, or using package managers, mastering the terminal improves efficiency and makes development smoother. 
      
      If you're new to Git and the terminal, start by learning basic commands and gradually explore advanced workflows. These skills will set you apart as a proficient developer!
    `
  }
];

// Featured post with rich content including inline images
const featuredPostData: FeaturedPost = {
  id: "featured",
  title: "Clothing Billboards in Udupi & Manipal: A Visual and Market Perspective",
  date: "Apr 14, 2025",
  category: "FEATURED",
  excerpt: "Clothing Billboards in Udupi & Manipal: A Visual and Market Perspective is a blog post that explores the impact of clothing billboards on the local market and community.",
  headerImage: "/blog/peter england.jpg",
  headerImageAlt: "Clothing billboard in Udupi",
  contentSections: [
    {
      type: 'text',
      content: `Introduction :

Billboards promoting clothing brands have become defining features of Udupi and Manipal's urban landscapes, transforming these towns into vibrant canvases for outdoor advertising. With their thriving student communities and bustling commercial centers, Udupi and Manipal offer a perfect environment for brands to connect with a diverse audience.`
    },
    {
      type: 'image',
      content: 'blog/geethanjali1.jpg',
      alt: 'Billboard in Manipal city ',
      caption: 'A prominent clothing billboard in Manipal city featuring geethanjali silks'
    },
    // Additional content sections would go here
  ]
};

export default function BlogPage() {
  return (
    <Blog 
      blogPosts={blogPosts} 
      featuredPost={featuredPostData}
      title="My Blog"
      description="Thoughts, stories, and ideas about programming, art and personal growth."
    />
  );
}