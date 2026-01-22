import { motion } from 'motion/react';
import { ArrowDown, FileDown, Mail } from 'lucide-react';

export function Hero() {
  const scrollToWork = () => {
    const element = document.getElementById('work');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 lg:px-12 pt-20">
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm uppercase tracking-wider text-gray-500 mb-4">
            UI/UX Designer & Front-End Developer
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Designing intuitive digital experiences for mobile & web products.
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl leading-relaxed">
            I'm Vignesh Saravanan, a UI/UX Designer at Tata Consultancy Services, crafting user-centric 
            solutions for enterprise dashboards, mobile apps, and design systems in Chennai, India.
          </p>

          <div className="flex flex-wrap gap-4 mb-16">
            <button
              onClick={scrollToWork}
              className="btn-primary"
            >
              View Work
              <ArrowDown size={18} />
            </button>
            <button
              onClick={() => window.open('/resume.pdf', '_blank')}
              className="btn-secondary"
            >
              <FileDown size={18} />
              Download Resume
            </button>
            <button
              onClick={scrollToContact}
              className="btn-secondary"
            >
              <Mail size={18} />
              Contact
            </button>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-gray-400"
          >
            <ArrowDown size={24} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
