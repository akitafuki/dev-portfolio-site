import { motion } from 'framer-motion';
import { ArrowRight, Code2, Terminal } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden bg-gray-950">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl mix-blend-screen opacity-50 animate-blob"></div>
        <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-purple-500/20 rounded-full blur-3xl mix-blend-screen opacity-50 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl mix-blend-screen opacity-50 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col items-center text-center relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-900/80 backdrop-blur-sm border border-indigo-500/30 shadow-sm mb-8 text-sm font-medium text-indigo-300"
            >
              <Terminal className="w-4 h-4" />
              <span>Software Engineering Manager & Full-Stack Developer</span>
              <Code2 className="w-4 h-4" />
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight tracking-tight">
              Crafting modern solutions <br className="hidden md:block" />
              for <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Creators and their communities</span>.
            </h1>
            
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              I love diving into new technologies and building tools that make a difference. My focus is on creating solutions for streamers to engage and help their communities grow.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
              <a 
                href="#projects"
                className="px-8 py-4 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-900/50 hover:shadow-indigo-900 flex items-center justify-center gap-2"
              >
                View Selected Work <ArrowRight className="h-5 w-5" />
              </a>
              <a 
                href="mailto:contact@akitafuki.com"
                className="px-8 py-4 bg-gray-900 text-gray-300 border border-gray-700 rounded-xl font-semibold hover:border-indigo-500 hover:text-indigo-400 transition-all shadow-sm hover:shadow-md"
              >
                Let's Connect
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
