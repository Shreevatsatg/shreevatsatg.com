
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { posts } from '../data/blog';
import NotFound from './NotFound';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
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
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-900 to-gray-900">
      <SEO title={`${post.title} - Shreevatsa TG`} description={post.summary} />
      <main className="flex-grow">
        <article className="w-full flex items-center justify-center relative py-6">
          <div className="container mx-auto relative z-10 max-w-4xl">
            <motion.div initial="hidden" animate="visible" variants={itemVariants}>
              <Link to="/#blog" className="flex items-center gap-2 text-slate-300 font-bold text-2xl hover:text-white transition-colors duration-300 mb-8">
                <ArrowLeft size={20} />
                <span>Back </span>
              </Link>

              <h1 className="text-4xl md:text-5xl font-medium leading-tight tracking-tight text-slate-100 mb-4">
                {post.title}
              </h1>
              <p className="text-slate-400 mb-8 font-light">{post.date}</p>

              <div 
                className="prose prose-invert prose-lg max-w-none text-slate-300 font-light prose-h2:text-slate-100 prose-h2:font-medium prose-pre:bg-slate-800 prose-pre:border prose-pre:border-slate-700 prose-pre:rounded-lg"
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
