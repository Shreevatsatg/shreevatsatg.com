'use client';

import { useState } from "react";

// Define types for blog posts
interface BlogPost {
  id: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  content: string;
}

// Define type for content section with text or image
interface ContentSection {
  type: 'text' | 'image';
  content: string; // text content or image URL
  alt?: string; // alt text for images
  caption?: string; // optional caption for images
}

// Define type for featured post with rich content
interface FeaturedPost extends Omit<BlogPost, 'content'> {
  headerImage?: string;
  headerImageAlt?: string;
  contentSections: ContentSection[];
}

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
  headerImage: "/blog/jaylaxmi.jpg", // Optional header image
  headerImageAlt: "Clothing billboard in Udupi",
  contentSections: [
    {
      type: 'text',
      content: `
Introduction :
Billboards promoting clothing brands have become defining features of Udupi and Manipal's urban landscapes. These towns, with their vibrant student communities and bustling commercial centers, offer a perfect environment for outdoor advertising. This article explores how these visual advertisements influence the local market, examining their design elements, strategic placement, and impact on consumer behavior.`
    },
    {
      type: 'image',
      content: '/blog/jaylaxmi.jpg',
      alt: 'Billboard in Manipal city center',
      caption: 'A prominent clothing billboard in Manipal city center featuring the latest fashion trends'
    },
    {
      type: 'text',
      content: `
Observation and Documentation  

Strategic Billboard Placements
Commercial Streets
In areas like Maruthi Veethika and Kinnimulki in Udupi, traditional billboards showcase local favorites such as Nidhi Selection and Omega Bag House and Garments. Meanwhile, Manyavar, located in Kunjibettu, captures attention with its colorful displays of ethnic wear at major intersections.

Shopping Hubs
Manipal's Laxmindra Nagar features modern digital displays highlighting seasonal collections from popular brands like Trends, Van Heusen, and Fabindia. In Udupi's Subhash Nagar area, elegant advertisements for boutiques like Soch specifically target fashion-conscious women shoppers.`
    },
    {
      type: 'image',
      content: '/blog/jaylaxmi.jpg',
      alt: 'Digital billboard in Laxmindra Nagar',
      caption: 'Digital billboard displaying fashion advertisements in Laxmindra Nagar shopping district'
    },
    {
      type: 'text',
      content: `
Highways and Urban Zones
Along the busy Gundibail-Manipal Road, strategically positioned billboards ensure maximum visibility for retailers such as Vishal Mega Mart and United Colors of Benetton, capturing the attention of daily commuters and visitors.

These carefully selected locations ensure maximum exposure to the diverse population of students, professionals, locals, and tourists that frequent both towns.

Visual Appeal  
Design Elements That Captivate

Bold Imagery
High-resolution fashion photographs create immediate visual impact for brands like Fabindia and Trends, showcasing their latest collections in vivid detail.

Color Psychology
Brands strategically employ color schemes to evoke specific emotions - Manyavar often uses vibrant reds to create excitement, while boutiques like Soch prefer elegant pastels that suggest sophistication.`
    },
    {
      type: 'image',
      content: '/blog/jaylaxmi.jpg',
      alt: 'Manyavar billboard with vibrant red color scheme',
      caption: 'Manyavar billboard using vibrant red color psychology to create excitement and cultural connection'
    },
    {
      type: 'text',
      content: `
Minimal Text
The most effective billboards in the area rely on concise messaging such as "Summer Sale" or "New Arrivals" that can be quickly understood even by passing vehicles.

Illumination
Backlit displays maintain visibility around the clock, particularly beneficial for stores like Van Heusen that cater to busy professionals with varied schedules.

Marketing Strategies  
Tactical Approaches

Seasonal Campaigns
Billboards transform with the seasons, showcasing summer collections, monsoon essentials, and festive wear from retailers like Trends and Fabindia to align with consumer needs.

Local Targeting
Student-focused advertisements in Manipal highlight affordable yet trendy options from brands like United Colors of Benetton, speaking directly to the town's young demographic.`
    },
    {
      type: 'image',
      content: '/blog/jaylaxmi.jpg',
      alt: 'Student-targeted billboard in Manipal',
      caption: 'United Colors of Benetton billboard near Manipal University targeting student demographics'
    },
    {
      type: 'text',
      content: `
Brand Recall
Strategic repetition of logos and slogans along commuter routes builds recognition for retailers like Vishal Mega Mart, creating lasting impressions through consistent exposure.

Interactive Displays
Modern digital billboards create dynamic experiences with changing content for retailers like D Mart on Ambagilu Road, allowing for timely promotion of sales and special events.

Consumer Influence  
Impact on Shopping Behavior

Impulse Decisions
Eye-catching visuals from brands like Soch and Manyavar frequently trigger spontaneous store visits, particularly during sale periods or new collection launches.

Brand Recognition
Continuous exposure builds trust and familiarity with brands like Van Heusen, influencing purchasing decisions even when consumers shop online or visit other locations.

Social Proof
Aspirational imagery creates desire and a sense of belonging, particularly effective for ethnic wear retailers like Manyavar that connect fashion choices to cultural identity.

Challenges  
Obstacles to Effectiveness

Visual Competition
High-density advertising zones like Laxmindra Nagar create a battle for attention, with some billboards inevitably overshadowed by more prominent or visually striking ones.

Regulatory Limitations
Heritage zones in Udupi impose restrictions on billboard placement and design, creating challenges for brands seeking maximum visibility in certain historic areas.`
    },
    {
      type: 'image',
      content: '/blog/jaylaxmi.jpg',
      alt: 'Heritage zone in Udupi with limited billboard advertising',
      caption: 'Heritage zone in Udupi with restricted billboard placements to preserve historical character'
    },
    {
      type: 'text',
      content: `
Conclusion  
Clothing billboards across Udupi and Manipal demonstrate the enduring power of outdoor advertising in shaping consumer choices through strategic placement and compelling design. Local retail landmarks such as Fabindia, Trends, and boutiques like Soch continue to transform the commercial character of these dynamic towns. As these communities evolve, billboard advertising remains an essential component of the modern marketing landscape for clothing retailers looking to capture the attention of this diverse and growing market.`
    }
  ]
};

interface PostProps {
  post: BlogPost;
  onReadMore: (post: BlogPost) => void;
}

interface FeaturedPostProps {
  post: FeaturedPost;
  onReadMore: (post: FeaturedPost) => void;
}

// Featured Post Component with header image support
const FeaturedPostComponent = ({ post, onReadMore }: FeaturedPostProps) => (
  <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-lg mb-16">
    <div className="relative">
      {post.headerImage ? (
        <img 
          src={post.headerImage} 
          alt={post.headerImageAlt || post.title} 
          className="w-full h-80 object-cover"
        />
      ) : (
        <div className="w-full h-80 bg-amber-100/50 dark:bg-amber-900/20 flex items-center justify-center">
          <span className="text-gray-700 dark:text-gray-300 font-medium">
            {post.title}
          </span>
        </div>
      )}
      <div className="absolute top-4 left-4">
        <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-medium px-3 py-1 rounded-full">
          {post.category}
        </span>
      </div>
    </div>
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{post.title}</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        {post.excerpt}
      </p>
      <button 
        onClick={() => onReadMore(post)}
        className="px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-md hover:from-amber-600 hover:to-orange-600 transition-colors"
      >
        Read More
      </button>
    </div>
  </div>
);

// Regular Post Component with text placeholder
const BlogPostCard = ({ post, onReadMore }: PostProps) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 shadow-lg transition-all duration-300 hover:translate-y-[-5px] hover:shadow-amber-500/20 dark:hover:shadow-amber-500/10">
    <div className="w-full h-48 bg-amber-50 dark:bg-amber-900/10 flex items-center justify-center">
      <span className="text-gray-700 dark:text-gray-300">
        {post.title}
      </span>
    </div>
    <div className="p-5">
      <div className="flex items-center mb-3">
        <span className="text-xs text-gray-500 dark:text-gray-400">{post.date}</span>
        <span className="mx-2 text-gray-400 dark:text-gray-500">•</span>
        <span className="text-xs font-medium text-amber-500 dark:text-amber-400">{post.category}</span>
      </div>
      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{post.title}</h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
        {post.excerpt}
      </p>
      <button
        onClick={() => onReadMore(post)}
        className="text-amber-500 dark:text-amber-400 font-medium hover:text-orange-500 dark:hover:text-orange-400 transition-colors flex items-center"
      >
        Read More
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>
    </div>
  </div>
);

// Component to render individual content sections (text or image)
const ContentSection = ({ section }: { section: ContentSection }) => {
  if (section.type === 'text') {
    return (
      <div className="prose prose-amber dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
        {section.content.split('\n').map((paragraph: string, index: number) => (
          paragraph.trim() ? <p key={index}>{paragraph.trim()}</p> : null
        ))}
      </div>
    );
  } else if (section.type === 'image') {
    return (
      <figure className="my-8">
        <img 
          src={section.content} 
          alt={section.alt || ''} 
          className="w-full rounded-lg shadow-md"
        />
        {section.caption && (
          <figcaption className="text-center text-sm text-gray-500 dark:text-gray-400 mt-2 italic">
            {section.caption}
          </figcaption>
        )}
      </figure>
    );
  }
  return null;
};

interface FullPostProps {
  post: BlogPost | FeaturedPost;
  onBack: () => void;
}

// Full Blog Post View Component with support for rich content
const FullBlogPost = ({ post, onBack }: FullPostProps) => {
  const isFeaturedPost = 'contentSections' in post;
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 shadow-lg">
      {/* Show header image for featured post if available */}
      {isFeaturedPost && (post as FeaturedPost).headerImage && (
        <div className="w-full">
          <img 
            src={(post as FeaturedPost).headerImage} 
            alt={(post as FeaturedPost).headerImageAlt || post.title} 
            className="w-full h-64 object-cover"
          />
        </div>
      )}
      
      <div className="p-6">
        {/* Top navigation */}
        <div className="mb-4">
          <button
            onClick={onBack}
            className="text-gray-600 dark:text-gray-300 hover:text-amber-500 dark:hover:text-amber-400 transition-colors flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Blog
          </button>
        </div>
        
        <div className="flex items-center mb-4">
          <span className="text-sm text-gray-500 dark:text-gray-400">{post.date}</span>
          <span className="mx-2 text-gray-400 dark:text-gray-500">•</span>
          <span className="text-sm font-medium text-amber-500 dark:text-amber-400">{post.category}</span>
        </div>
        
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">{post.title}</h1>
        
        {/* Render content based on post type */}
        {isFeaturedPost ? (
          // Render rich content with inline images for featured post
          <div>
            {(post as FeaturedPost).contentSections.map((section, index) => (
              <ContentSection key={index} section={section} />
            ))}
          </div>
        ) : (
          // Render regular content for standard posts
          <div className="prose prose-amber dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
            {(post as BlogPost).content.split('\n').map((paragraph: string, index: number) => (
              paragraph.trim() ? <p key={index}>{paragraph.trim()}</p> : null
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default function BlogPage() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | FeaturedPost | null>(null);
  
  const handleReadMore = (post: BlogPost | FeaturedPost) => {
    setSelectedPost(post);
    window.scrollTo(0, 0);
  };
  
  const handleBack = () => {
    setSelectedPost(null);
    window.scrollTo(0, 0);
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-gray-900 dark:to-gray-800 py-24 px-4 md:px-8">
      <div className="container mx-auto max-w-4xl">
        {!selectedPost ? (
          <>
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
                <span className="bg-gradient-to-r from-amber-500 to-orange-500 dark:from-amber-400 dark:to-orange-400 bg-clip-text text-transparent">Blog</span>
              </h1>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Thoughts, stories, and ideas about programming, art, and personal growth.
              </p>
            </div>
            
            <FeaturedPostComponent post={featuredPostData} onReadMore={handleReadMore} />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPosts.map(post => (
                <BlogPostCard key={post.id} post={post} onReadMore={handleReadMore} />
              ))}
            </div>
          </>
        ) : (
          <FullBlogPost post={selectedPost} onBack={handleBack} />
        )}
      </div>
    </div>
  );
}