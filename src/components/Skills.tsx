import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';

export function Skills() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const skillCategories = [
    {
      category: 'UI/UX & Product Design',
      skills: [
        'User Research & Testing',
        'Wireframing & Prototyping',
        'Information Architecture',
        'Interaction Design',
        'Responsive Design',
        'Mobile-First Design',
      ],
    },
    {
      category: 'Design Systems & Prototyping',
      skills: [
        'Component Libraries',
        'Design Tokens',
        'Style Guides',
        'Interactive Prototypes',
        'Design Documentation',
        'Handoff & Collaboration',
      ],
    },
    {
      category: 'Branding & Visual Design',
      skills: [
        'Brand Identity',
        'Typography',
        'Color Theory',
        'Illustration',
        'Icon Design',
        'Marketing Design',
      ],
    },
    {
      category: 'Front-End & Development',
      skills: ['HTML & CSS', 'Angular Basics', 'Responsive Development', 'Version Control (Git)', 'Web Accessibility', 'Design-Dev Handoff'],
    },
    {
      category: 'AI-Powered Design Tools',
      skills: ['ChatGPT for Design', 'Midjourney', 'Adobe Firefly', 'Runway ML', 'AI Prototyping', 'Generative UI'],
    },
    {
      category: 'Research & Strategy',
      skills: [
        'User Personas',
        'Journey Mapping',
        'Competitive Analysis',
        'Usability Testing',
        'Design Thinking',
        'Problem Framing',
      ],
    },
  ];

  return (
    <section id="skills" ref={ref} className="py-24 px-6 lg:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm uppercase tracking-wider text-gray-500 mb-4">Capabilities</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16">Skills & Expertise</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl"
              >
                <h3 className="font-semibold text-gray-900 mb-4">{category.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIndex) => (
                    <span
                      key={sIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
