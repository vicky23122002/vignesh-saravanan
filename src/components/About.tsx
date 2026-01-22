import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';

export function About() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <section id="about" ref={ref} className="py-24 px-6 lg:px-12 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm uppercase tracking-wider text-gray-500 mb-4">About Me</p>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Bridging design and development to create meaningful user experiences
              </h2>
            </div>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                I'm a UI/UX Designer at Tata Consultancy Services with a passion for creating 
                intuitive digital products that solve real user problems. My approach combines 
                design thinking, user research, and front-end development knowledge to deliver 
                end-to-end solutions.
              </p>
              <p>
                Since joining TCS in May 2024, I've worked on enterprise-level projects including 
                mobile applications, web platforms, and internal community tools. I focus on 
                user-centric design, accessibility, and building scalable design systems that 
                empower teams and delight users.
              </p>
              <p>
                My background in front-end development (HTML, CSS, Angular) allows me to bridge 
                the gap between design and implementation, ensuring pixel-perfect execution and 
                smooth designer-developer collaboration.
              </p>
            </div>
          </div>

          {/* Skills Summary */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            <div className="skill-card">
              <h3 className="font-semibold text-gray-900 mb-2">UI/UX Design</h3>
              <p className="text-sm text-gray-600">User research, wireframing, prototyping</p>
            </div>
            <div className="skill-card">
              <h3 className="font-semibold text-gray-900 mb-2">Design Thinking</h3>
              <p className="text-sm text-gray-600">Problem solving, ideation, iteration</p>
            </div>
            <div className="skill-card">
              <h3 className="font-semibold text-gray-900 mb-2">Design Systems</h3>
              <p className="text-sm text-gray-600">Component libraries, style guides</p>
            </div>
            <div className="skill-card">
              <h3 className="font-semibold text-gray-900 mb-2">Front-End</h3>
              <p className="text-sm text-gray-600">HTML, CSS, Angular basics</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
