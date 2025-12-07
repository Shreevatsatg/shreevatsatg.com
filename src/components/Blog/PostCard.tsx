
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { type Post } from '../../data/blog';
import { ArrowRight } from 'lucide-react';

interface PostCardProps {
  post: Post;
}

const PostCard = ({ post }: PostCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.01 }}
      className="bg-neutral-100 dark:bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-300 dark:border-neutral-700 shadow-2xl group flex flex-col transition-all duration-300 hover:shadow-neutral-300/20 dark:hover:shadow-neutral-700/20"
    >
      <div className="p-6 flex-1 flex flex-col">
        <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-2 font-light">{post.date}</p>
        <h3 className="text-xl font-medium text-neutral-900 dark:text-neutral-200 mb-2 group-hover:text-neutral-950 dark:group-hover:text-neutral-100 transition-colors">
          {post.title}
        </h3>
        <p className="text-neutral-600 dark:text-neutral-400 mb-4 text-sm flex-1 font-light">
          {post.summary}
        </p>
        <Link to={`/blog/${post.slug}`} className="flex items-center gap-2 text-neutral-900 dark:text-neutral-200 font-medium group-hover:text-black dark:group-hover:text-white transition-colors duration-300 mt-auto">
          <span>Read More</span>
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
};

export default PostCard;
