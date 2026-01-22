import { motion } from 'motion/react';
import { Briefcase } from 'lucide-react';
import { useInView } from './hooks/useInView';

export function Experience() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const experiences = [
    {
      company: 'Tata Consultancy Services',
      role: 'UI/UX Designer',
      period: 'May 2024 - Present',
      location: 'Chennai, India',
      description:
        'Designing enterprise-level web and mobile applications for clients. Working on design systems, user research, wireframing, and high-fidelity prototypes. Collaborating with cross-functional teams including developers, product managers, and stakeholders.',
      highlights: [
        'Led design for multiple mobile and web applications',
        'Built scalable design systems and component libraries',
        'Conducted user research and usability testing',
        'Collaborated with Angular development teams',
      ],
    },
    {
      company: 'Dif Inc',
      role: 'Freelance Designer',
      period: '2023 - 2024',
      location: 'Remote',
      description:
        'Provided design services for various clients including branding, web design, and UI/UX projects.',
      highlights: [
        'Delivered 10+ design projects for diverse clients',
        'Created brand identities and visual systems',
        'Designed responsive websites and landing pages',
      ],
    },
    {
      company: 'Bizmatics',
      role: 'Graphic Designer Intern',
      period: '2023',
      location: 'Chennai, India',
      description:
        'Assisted in creating marketing materials, social media graphics, and brand collateral.',
      highlights: [
        'Designed 50+ social media graphics and marketing materials',
        'Supported brand consistency across touchpoints',
      ],
    },
    {
      company: 'Freetechcafe',
      role: 'UI/UX Design Intern',
      period: '2023',
      location: 'Remote',
      description:
        'Worked on mobile app design projects including the Flydel delivery app. Gained hands-on experience in user research and interface design.',
      highlights: [
        'Designed complete mobile app from wireframes to high-fidelity',
        'Participated in user research and competitor analysis',
        'Created interactive prototypes in Figma',
      ],
    },
  ];

  return (
    <section id="experience" ref={ref} className="py-24 px-6 lg:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm uppercase tracking-wider text-gray-500 mb-4">Experience</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16">Work History</h2>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="border-l-2 border-gray-200 pl-8 relative"
              >
                <div className="absolute -left-3 top-0 bg-gray-900 rounded-full p-2">
                  <Briefcase size={16} className="text-white" />
                </div>
                <div className="mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">{exp.role}</h3>
                  <p className="text-gray-600">{exp.company}</p>
                </div>
                <p className="text-sm text-gray-500 mb-4">
                  {exp.period} • {exp.location}
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">{exp.description}</p>
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="text-sm text-gray-600 flex items-start">
                      <span className="text-gray-400 mr-2">•</span>
                      {highlight}
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
