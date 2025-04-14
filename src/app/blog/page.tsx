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

Billboards promoting clothing brands have become defining features of Udupi and Manipal's urban landscapes, transforming these towns into vibrant canvases for outdoor advertising. With their thriving student communities and bustling commercial centers, Udupi and Manipal offer a perfect environment for brands to connect with a diverse audience. The strategic placement of billboards in high-traffic areas such as Maruthi Veethika in Udupi and Laxmindra Nagar in Manipal ensures that they capture the attention of pedestrians, students, and professionals alike. These billboards not only serve as visual attractions but also play a crucial role in shaping consumer preferences and driving retail sales.

As Udupi and Manipal continue to grow economically, the role of outdoor advertising becomes increasingly significant. Clothing brands leverage billboards to promote seasonal collections, reinforce brand identity, and drive impulse purchases. By examining the design elements, strategic placement, and profound impact of these visual advertisements on consumer behavior, we can gain a deeper understanding of how they contribute to the economic vitality of these dynamic towns. Additionally, integrating real-life examples from local shops and brands will provide valuable insights into how these visual advertisements influence the local market and retail landscape.

This blog aims to explore the visual appeal, marketing strategies, and consumer influence of clothing billboards in Udupi and Manipal. By delving into the specifics of how these billboards are designed, placed, and perceived by the local audience, we can better appreciate the power of outdoor advertising in these regions. Whether it's promoting brands like jayalaxmi silks or Trends, or highlighting local boutiques, these billboards are integral to the retail ecosystem of Udupi and Manipal, making them a fascinating subject for study and analysis.
`
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
Strategic Billboard Placements
The strategic placement of clothing billboards in Udupi and Manipal is crucial for maximizing visibility and impact. These billboards are positioned in high-traffic areas to target a diverse audience of students, professionals, locals, and tourists.

1. Commercial Streets
Areas like Maruthi Veethika and Kinnimulki in Udupi are hubs for traditional billboards showcasing local favorites such as Nidhi Selection and Omega Bag House and Garments. Meanwhile, Manyavar, located in Kunjibettu, captures attention with its colorful displays of ethnic wear at major intersections. This strategic placement allows local brands to reinforce their presence and appeal to a broad audience.

Target Audience: These locations are ideal for reaching local residents and frequent visitors who are familiar with the area.

Visual Impact: Traditional billboards in these areas often feature bold imagery and vibrant colors, making them hard to miss.

2. Shopping Hubs
Manipal’s bustling shopping areas, such as Laxmindra Nagar, feature modern digital displays highlighting seasonal collections from popular brands like Trends, Van Heusen, and Fabindia. In Udupi’s Subhash Nagar area, elegant advertisements for boutiques like Soch specifically target fashion-conscious women shoppers. These digital displays allow for dynamic content updates, enabling brands to showcase limited-time offers or event-specific promotions.

Target Audience: These locations are perfect for targeting students and young professionals who frequent shopping hubs.

Technological Advantage: Digital billboards offer flexibility in updating content, allowing brands to respond quickly to market trends or seasonal changes.

3. Highways and Urban Zones
Along the busy Gundibail-Manipal Road, strategically positioned billboards ensure maximum visibility for retailers such as Vishal Mega Mart and United Colors of Benetton. These billboards capture the attention of daily commuters and visitors, providing a broad reach to a diverse audience.

Target Audience: Highways are ideal for reaching a wide audience, including commuters and travelers who may not be familiar with local brands.

Visibility: Billboards in these areas benefit from high visibility due to slower traffic speeds and longer exposure times.

Benefits of Strategic Placement
The strategic placement of billboards in these areas offers several benefits:

Increased Visibility: High-traffic locations ensure that billboards are seen by a large number of people, enhancing brand awareness.

Targeted Marketing: By placing billboards in areas frequented by specific demographics (e.g., students in Manipal), brands can tailor their messaging to resonate with their target audience.

Cost-Effectiveness: While costs vary based on location and type of billboard, strategic placement can maximize return on investment by ensuring that the message reaches the intended audience effectively.

Challenges and Opportunities
Despite the advantages, there are challenges to consider:

Competition: High-density advertising zones can lead to visual clutter, making it harder for individual brands to stand out.

Regulatory Constraints: Zoning laws and restrictions in certain areas may limit billboard placement, requiring brands to adapt their strategies.

In conclusion, the strategic placement of clothing billboards in Udupi and Manipal is a critical component of effective outdoor advertising. By leveraging high-traffic areas and tailoring messaging to specific demographics, brands can enhance visibility, drive engagement, and reinforce their market presence.`
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
Visual Appeal: Design Elements That Captivate
The visual appeal of clothing billboards in Udupi and Manipal plays a pivotal role in their effectiveness, blending artistry with strategic marketing to capture the attention of diverse audiences. These design elements ensure that billboards stand out amidst the bustling urban landscapes.

1. Bold Imagery:
High-resolution fashion photographs are the cornerstone of billboard designs, creating immediate visual impact. Brands like Fabindia and Trends excel in showcasing their latest collections through vivid and detailed images. For instance, Fabindia’s billboards often feature models adorned in traditional attire against scenic backdrops, emphasizing cultural elegance. Similarly, Trends employs dynamic poses and contemporary outfits to appeal to younger audiences, particularly students and professionals in Manipal. The use of bold imagery ensures that these advertisements grab attention even from a distance, making them memorable for passersby.

2. Color Psychology:
The strategic use of color is a powerful tool in billboard design, as it evokes specific emotions and reinforces brand identity:

3. Excitement and Energy: 
Brands like Manyavar frequently use vibrant reds and golds in their billboards to create a sense of celebration and festivity, aligning with their focus on ethnic wear for special occasions.

4. Elegance and Sophistication: 
Boutiques like Soch prefer pastel shades such as peach and lavender to convey a sense of refinement, appealing to women seeking stylish yet graceful attire.

5. Contrast for Visibility: 
Contrasting colors enhance readability and visual impact. For example, Trends uses bright yellow text against dark backgrounds to highlight sales events like "Summer Sale," ensuring the message is quickly absorbed by viewers.

Color psychology not only enhances aesthetic appeal but also influences consumer perception, making billboards more effective in driving engagement.

6. Minimal Text
The most impactful billboards rely on concise messaging that can be understood within seconds:

Phrases like "New Arrivals" or "Flat 50% Off" are commonly used by brands such as Van Heusen and United Colors of Benetton, targeting busy professionals who have limited time to process information while commuting.

Minimal text ensures clarity and avoids overwhelming viewers, allowing the imagery to take center stage while reinforcing the core message.

This approach aligns with best practices for billboard design, where simplicity is key to ensuring quick comprehension and retention.

7. Illumination
Lighting plays a crucial role in maintaining the visibility of billboards around the clock:

8. Backlit Displays: 
Stores like Van Heusen, which cater to professionals with varied schedules, benefit from illuminated billboards that remain prominent even at night. This ensures continuous exposure to potential customers traveling late or early in the day.

9. Dynamic Lighting Effects: 
Digital billboards in Manipal’s shopping hubs often incorporate changing lights or animations to draw attention to limited-time offers or seasonal campaigns.

By leveraging illumination effectively, brands can maximize the reach and impact of their advertisements regardless of time or weather conditions.

Conclusion on Visual Appeal:
The design elements employed in clothing billboards across Udupi and Manipal—bold imagery, strategic color schemes, minimal text, and effective illumination—are meticulously crafted to captivate audiences and drive consumer engagement. These visual strategies not only enhance the aesthetic appeal of urban spaces but also serve as powerful tools for clothing brands looking to establish a strong presence in these dynamic towns. By understanding and applying these principles, retailers can create billboard campaigns that resonate deeply with their target audience while standing out in competitive advertising zones.`
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
      Marketing Strategies :
Tactical Approaches

=> Seasonal Campaigns
Billboards transform with the seasons, showcasing summer collections, monsoon essentials, and festive wear from retailers like Trends and Fabindia to align with consumer needs.

=> Local Targeting
Student-focused advertisements in Manipal highlight affordable yet trendy options from brands like United Colors of Benetton, speaking directly to the town's young demographic.

=> Brand Recall
Strategic repetition of logos and slogans along commuter routes builds recognition for retailers like Vishal Mega Mart, creating lasting impressions through consistent exposure.

=> Interactive Displays
Modern digital billboards create dynamic experiences with changing content for retailers like D Mart on Ambagilu Road, allowing for timely promotion of sales and special events.

=> Consumer Influence  
Impact on Shopping Behavior

=> Impulse Decisions
Eye-catching visuals from brands like Soch and Manyavar frequently trigger spontaneous store visits, particularly during sale periods or new collection launches.

=> Brand Recognition
Continuous exposure builds trust and familiarity with brands like Van Heusen, influencing purchasing decisions even when consumers shop online or visit other locations.

=> Social Proof
Aspirational imagery creates desire and a sense of belonging, particularly effective for ethnic wear retailers like Manyavar that connect fashion choices to cultural identity.`
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
      Challenges: Obstacles to Effectiveness
Despite the effectiveness of clothing billboards in Udupi and Manipal, several challenges hinder their optimal impact. These obstacles not only affect the visibility of advertisements but also influence the overall marketing strategy of clothing brands.

Visual Competition
High-density advertising zones, such as Laxmindra Nagar in Manipal, create a competitive environment where billboards vie for attention. 

This crowded landscape poses several challenges:

Attention Dilution: 
With numerous billboards competing for the same audience, some inevitably get overshadowed by more prominent or visually striking ones. Brands must invest in more innovative designs and strategic placements to stand out.

Brand Clutter: 
The sheer number of advertisements can lead to a phenomenon known as "brand clutter," where consumers become desensitized to the messages being conveyed. This necessitates brands to continuously refresh their advertising content to maintain relevance.

Cost Implications: 
Securing prime spots in high-traffic areas can be costly, making it challenging for smaller brands or local boutiques to compete with larger retailers like Fabindia or Trends.

Regulatory Limitations:
Heritage zones in Udupi impose strict regulations on billboard placement and design, creating significant challenges for brands seeking maximum visibility in these historic areas:

Placement Restrictions: 
Zoning laws often prohibit the installation of billboards in certain areas, limiting the reach of advertising campaigns. Brands must navigate these restrictions to find alternative locations that still offer high visibility.

Design Constraints: 
Regulations may dictate the size, color palette, or content of billboards to preserve the aesthetic integrity of heritage zones. This can restrict the creative freedom of brands, forcing them to adapt their advertising strategies to comply with local regulations.

Permitting Challenges: 
Obtaining permits for billboard installation can be a lengthy and bureaucratic process, delaying the launch of advertising campaigns and impacting their overall effectiveness.

Additional Challenges:
Beyond visual competition and regulatory limitations, other challenges affect the effectiveness of clothing billboards:

Environmental Factors: 
Weather conditions, such as heavy rainfall or extreme sunlight, can degrade billboard materials and reduce their visibility over time.

Technological Advancements: 
The rise of digital advertising and social media has shifted consumer attention towards online platforms, potentially reducing the impact of traditional outdoor advertising.

Addressing these challenges requires innovative marketing strategies, including the use of interactive digital displays, strategic partnerships with local businesses, and a deep understanding of consumer behavior in these dynamic towns.
      `
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

Conclusion:

Clothing billboards across Udupi and Manipal are a testament to the enduring relevance and effectiveness of outdoor advertising in today’s fast-paced retail environment. These billboards, with their strategic placement in high-traffic areas and visually captivating designs, have become an integral part of the urban fabric of these towns. Whether it’s the vibrant displays on Maruthi Veethika in Udupi or the dynamic digital hoardings in Laxmindra Nagar, Manipal, these advertisements are more than just promotional tools—they are cultural markers that reflect the aspirations and preferences of the local population.

The presence of prominent retail landmarks such as Fabindia, Trends, Van Heusen, and boutiques like Soch adds to the richness of the commercial landscape. These brands utilize billboards to not only showcase their latest collections but also to establish a strong connection with their target audience, which includes students, professionals, and families. By leveraging bold imagery, color psychology, minimalistic yet impactful text, and innovative lighting techniques, these advertisements succeed in creating a lasting impression on passersby.

Moreover, the influence of these billboards extends beyond mere aesthetics. They play a pivotal role in shaping consumer behavior by driving impulse purchases, reinforcing brand recall, and fostering a sense of aspiration through carefully curated visuals. For instance, premium clothing brands use aspirational imagery to resonate with consumers’ desires for style and sophistication, while affordable fashion stores appeal to the practical needs of students and young professionals.

As Udupi and Manipal continue to evolve into thriving commercial hubs, billboard advertising remains an indispensable component of the marketing strategies employed by clothing retailers. The dynamic nature of these towns—with their growing student population, increasing urbanization, and diverse consumer base—offers endless opportunities for brands to innovate and engage through outdoor advertising.

In conclusion, clothing billboards in Udupi and Manipal are not just advertisements; they are powerful tools that bridge the gap between brands and consumers. By combining strategic placement with compelling design elements, these billboards contribute significantly to the economic vitality and cultural identity of these towns. As we look to the future, it is evident that billboard advertising will continue to adapt and thrive, playing a crucial role in shaping the retail landscape of Udupi and Manipal for years to come.

`
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
                Thoughts, stories, and ideas about programming, art and personal growth.
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