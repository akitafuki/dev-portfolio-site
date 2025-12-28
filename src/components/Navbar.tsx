import { motion } from 'framer-motion';
import { Code2, Mail } from 'lucide-react';
import { SiBluesky, SiGithub, SiTwitch } from '@icons-pack/react-simple-icons';

export const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2"
          >
            <Code2 className="h-8 w-8 text-indigo-500" />
            <span className="text-xl font-bold text-white">akitafuki.dev</span>
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            {['About', 'Projects', 'Skills'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-400 hover:text-indigo-400 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <a href="https://github.com/akitafuki" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400 transition-colors">
              <SiGithub className="h-5 w-5" />
            </a>
            <a href="https://bsky.app/profile/akitafuki.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400 transition-colors">
              <SiBluesky className="h-5 w-5" />
            </a>
            <a href="https://twitch.tv/akitafuki" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400 transition-colors">
              <SiTwitch className="h-5 w-5" />
            </a>
            <a href="mailto:contact@akitafuki.com" className="text-gray-400 hover:text-indigo-400 transition-colors">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
