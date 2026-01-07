import { motion } from 'framer-motion';
import { Layout, Server, Settings, Terminal } from 'lucide-react';

const skills = [
  {
    category: 'Frontend',
    icon: <Layout className="h-6 w-6" />,
    items: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Astro']
  },
  {
    category: 'Backend',
    icon: <Server className="h-6 w-6" />,
    items: ['Java', 'Node.js', 'Express', 'PostgreSQL', 'MySQL', 'Cassandra', ]
  },
  {
    category: 'DevOps & Tools',
    icon: <Settings className="h-6 w-6" />,
    items: ['Docker', 'Git', 'AWS', 'CI/CD']
  },
  {
    category: 'Other',
    icon: <Terminal className="h-6 w-6" />,
    items: ['Testing (JUnit, Jest/Vitest)', 'Performance Optimization', 'Agile']
  }
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Technical Expertise</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolset that allows me to build end-to-end solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 bg-gray-900 rounded-xl hover:shadow-lg hover:shadow-indigo-900/10 transition-shadow border border-gray-800"
            >
              <div className="w-12 h-12 bg-indigo-900/30 rounded-lg flex items-center justify-center text-indigo-400 mb-4">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{skill.category}</h3>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li key={item} className="flex items-center text-gray-400">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
