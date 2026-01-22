import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';

export function Tools() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const toolCategories = [
    {
      category: 'Design & Prototyping',
      tools: ['Figma', 'Adobe XD', 'Adobe Photoshop', 'Adobe Illustrator', 'Adobe After Effects', 'Framer', 'FigJam', 'Miro'],
    },
    {
      category: '3D & Animation',
      tools: ['Blender', 'Spline', 'Rive'],
    },
    {
      category: 'Development',
      tools: ['VS Code', 'Git & GitHub', 'WordPress', 'Webflow', 'HTML/CSS'],
    },
    {
      category: 'AI-Powered',
      tools: ['ChatGPT', 'Midjourney', 'Adobe Firefly', 'Runway ML', 'Stable Diffusion', 'Canva AI'],
    },
    {
      category: 'Collaboration',
      tools: ['Slack', 'Microsoft Teams', 'Notion', 'Trello', 'Jira', 'Confluence'],
    },
    {
      category: 'Other Tools',
      tools: ['Canva', 'InVision', 'Zeplin', 'Maze', 'Hotjar', 'Google Analytics'],
    },
  ];

  return (
    <section id="tools" ref={ref} className="py-24 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm uppercase tracking-wider text-gray-500 mb-4">Tools & Software</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16">What I Use</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {toolCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="border border-gray-200 p-6 rounded-xl hover:shadow-lg transition-shadow"
              >
                <h3 className="font-semibold text-gray-900 mb-4">{category.category}</h3>
                <ul className="space-y-2">
                  {category.tools.map((tool, tIndex) => (
                    <li key={tIndex} className="text-gray-600 text-sm flex items-center">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></span>
                      {tool}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
