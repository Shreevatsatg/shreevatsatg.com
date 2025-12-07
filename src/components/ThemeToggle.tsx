import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-black-200 dark:bg-black-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white items-center flex justify-center"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {resolvedTheme === 'dark' ? <Sun  size={18} /> : <Moon size={18} />}
    </motion.button>
  );
};

export default ThemeToggle;
