
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { posts } from '../data/blog';
import NotFound from './NotFound';

import { ArrowLeft } from 'lucide-react';
import SEO from '../components/SEO';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return <NotFound />;
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col bg-white dark:bg-black">
      <SEO title={`${post.title} - Shreevatsa TG`} description={post.summary} />
      <main className="flex-grow">
        <article className="w-full flex items-center justify-center relative py-6 px-4 sm:px-6">
          <div className="container mx-auto relative z-10 max-w-4xl overflow-x-hidden">
            <motion.div initial="hidden" animate="visible" variants={itemVariants} className="break-words">
              <Link to="/#blog" className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300 font-bold text-xl sm:text-2xl hover:text-black dark:hover:text-white transition-colors duration-300 mb-8">
                <ArrowLeft size={20} />
                <span>Back </span>
              </Link>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium leading-tight tracking-tight metallic-text mb-4">
                {post.title}
              </h1>
              <p className="text-neutral-600 dark:text-neutral-400 mb-8 font-light">{post.date}</p>

              <div 
                className="prose dark:prose-invert sm:prose-lg max-w-none text-neutral-800 dark:text-neutral-300 font-light prose-h2:text-neutral-900 dark:prose-h2:text-neutral-100 prose-h2:font-medium prose-pre:bg-neutral-100 dark:prose-pre:bg-neutral-900 prose-pre:border prose-pre:border-neutral-300 dark:prose-pre:border-neutral-700 prose-pre:rounded-lg"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </motion.div>
          </div>
        </article>
      </main>
    </div>
  );
};

export default BlogPost;
