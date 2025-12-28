import { Mail } from 'lucide-react';
import { SiBluesky, SiGithub, SiTwitch } from '@icons-pack/react-simple-icons';

export const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400">© 2025 akitafuki. All rights reserved.</p>
            <div className="flex gap-6">
            <a href="https://github.com/akitafuki" className="text-gray-400 hover:text-white transition-colors">
              <SiGithub className="h-5 w-5" />
            </a>
            <a href="https://bsky.app/profile/akitafuki.com" className="text-gray-400 hover:text-white transition-colors">
              <SiBluesky className="h-5 w-5" />
            </a>
            <a href="https://twitch.tv/akitafuki" className="text-gray-400 hover:text-white transition-colors">
              <SiTwitch className="h-5 w-5" />
            </a>
            <a href="mailto:contact@akitafuki.com" className="text-gray-400 hover:text-white transition-colors">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
