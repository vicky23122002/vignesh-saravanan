import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useInView } from './hooks/useInView';

interface CaseStudiesProps {
  onSelectCaseStudy: (id: string) => void;
}

export function CaseStudies({ onSelectCaseStudy }: CaseStudiesProps) {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const caseStudies = [
    {
      id: 'lumis',
      title: 'LUMIS Automobile App',
      description: 'Complete design thinking process for a modern automobile mobile experience',
      category: 'Mobile App • Design Thinking',
      year: '2024',
      color: 'bg-blue-50',
    },
    {
      id: 'coin',
      title: 'COIN Community Mobile App',
      description: 'Social community platform connecting users through shared interests',
      category: 'Mobile App • Social',
      year: '2024',
      color: 'bg-purple-50',
    },
    {
      id: 'texxas',
      title: 'TEXXAS Internal Community',
      description: 'Enterprise web application for internal team collaboration',
      category: 'Web App • Enterprise',
      year: '2024',
      color: 'bg-green-50',
    },
    {
      id: 'research-spark',
      title: 'Research Spark',
      description: 'Research management platform for academic and professional teams',
      category: 'Web App • Productivity',
      year: '2024',
      color: 'bg-orange-50',
    },
    {
      id: 'flydel',
      title: 'Flydel Delivery App',
      description: 'Fast delivery service app designed during internship',
      category: 'Mobile App • Logistics',
      year: '2023',
      color: 'bg-pink-50',
    },
  ];

  return (
    <section id="work" ref={ref} className="py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm uppercase tracking-wider text-gray-500 mb-4">Selected Work</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16">Case Studies</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <motion.button
                key={study.id}
                onClick={() => onSelectCaseStudy(study.id)}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`${study.color} p-8 rounded-2xl text-left hover:shadow-xl transition-all duration-300 group`}
              >
                <div className="aspect-video bg-white/50 rounded-lg mb-6 flex items-center justify-center">
                  <span className="text-4xl opacity-20">📱</span>
                </div>
                <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">
                  {study.category} • {study.year}
                </p>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3 group-hover:text-gray-600 transition-colors">
                  {study.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {study.description}
                </p>
                <div className="flex items-center text-gray-900 font-medium group-hover:gap-2 transition-all">
                  View Case Study
                  <ArrowRight size={18} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
