import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { SiGithub } from '@icons-pack/react-simple-icons';

const projects = [
  {
    title: 'Mentor Bingo',
    description: 'A Final Fantasy XIV-themed bingo game designed for more engaging Mentor Roulette sessions with your community.',
    tags: ['React', 'TypeScript', 'Node.js', 'Socket.io', 'Tailwind CSS', 'PostgreSQL'],
    image: '/mentorbingo.png',
    demo: 'https://www.mentorbingo.com'
  },
  {
    title: 'Twitch Clip Carousel',
    description: 'A web application that curates and displays Twitch clips from a specific Twitch channel in a dynamic carousel format for enhanced viewer engagement.',
    tags: ['React', 'TypeScript', 'Node.js', 'Docker'],
    image: '/twitchclip.png',
    github: 'https://github.com/akitafuki/twitch-clip-carousel-app',
    demo: ''
  },
  {
    title: 'Aoi Sora Bot',
    description: 'A Discord bot that integrates with the BlueSky social network, posting a user\'s latest message to a specific channel.',
    tags: ['Node.js', 'TypeScript', 'Discord.js', 'atproto'],
    image: '/aoisora.png',
    github: 'https://github.com/akitafuki/aoi-sora-bot',
    demo: ''
  },
  {
    title: 'My Resume Site',
    description: 'A personal website showcasing my resume.',
    tags: ['Node.js', 'Astro'],
    image: '/resumesite.png',
    github: 'https://github.com/akitafuki/my-resume-site',
    demo: 'https://www.jimmiemaggard.com/'
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Latest Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A selection of the latest projects that I have worked on.
          </p>
        </div>

        <div className="flex flex-col gap-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } bg-gray-950 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-indigo-900/10 transition-all duration-500 border border-gray-800 group min-h-[450px]`}
            >
              {/* Image Section */}
              <div className={`md:w-1/2 h-64 md:h-[450px] ${project.image.startsWith('/') ? 'bg-gray-900/50 p-4' : project.image} flex items-center justify-center relative overflow-hidden`}>
                {project.image.startsWith('/') ? (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                    <span className="text-white/40 text-5xl font-bold transform group-hover:scale-110 transition-transform duration-500">Project UI</span>
                  </>
                )}
              </div>

              {/* Content Section */}
              <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{project.title}</h3>
                <p className="text-lg text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-4 py-1.5 bg-indigo-900/30 text-indigo-300 rounded-lg text-sm font-medium border border-indigo-500/20">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-6">
                  {project.github && (
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-300 hover:text-indigo-400 transition-colors font-semibold"
                    >
                      <SiGithub className="h-5 w-5" /> View Code
                    </a>
                  )}
                  {project.demo && (
                    <a 
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors font-semibold"
                    >
                      <ExternalLink className="h-5 w-5" /> Visit Live Site
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
