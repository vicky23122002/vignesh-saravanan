import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Briefcase, Users, Target, Palette } from "lucide-react";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "TCS Experience",
      description: "Working at Tata Consultancy Services on enterprise-level applications",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Research-Driven",
      description: "Strong foundation in design thinking and user-centered solutions",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Cross-Functional",
      description: "Experienced in collaborating with diverse teams",
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Full Spectrum",
      description: "Expertise in branding, UI/UX, and digital experiences",
    },
  ];

  return (
    <section id="about" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-500 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-500">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-violet-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Main description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-3xl p-8">
              <p className="text-lg text-gray-300 leading-relaxed">
                UI/UX Designer with experience in <span className="text-blue-400 font-semibold">enterprise applications</span>, <span className="text-violet-400 font-semibold">mobile apps</span>, and <span className="text-blue-400 font-semibold">digital branding</span>. Skilled in research-driven design, wireframing, prototyping, and high-fidelity UI creation.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mt-4">
                Experienced in collaborating with cross-functional teams to deliver scalable and user-centered solutions that make a real impact.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.4 }}
                className="backdrop-blur-sm bg-gradient-to-br from-blue-500/10 to-violet-500/10 border border-white/10 rounded-2xl p-4 text-center"
              >
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-500">2+</div>
                <div className="text-sm text-gray-400 mt-1">Years Experience</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 }}
                className="backdrop-blur-sm bg-gradient-to-br from-blue-500/10 to-violet-500/10 border border-white/10 rounded-2xl p-4 text-center"
              >
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-500">20+</div>
                <div className="text-sm text-gray-400 mt-1">Projects Done</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6 }}
                className="backdrop-blur-sm bg-gradient-to-br from-blue-500/10 to-violet-500/10 border border-white/10 rounded-2xl p-4 text-center"
              >
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-500">100+</div>
                <div className="text-sm text-gray-400 mt-1">Designs Created</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right side - Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 flex items-center justify-center mb-4 text-blue-400 group-hover:scale-110 transition-transform duration-300">
                  {highlight.icon}
                </div>
                <h3 className="text-lg text-white mb-2">{highlight.title}</h3>
                <p className="text-sm text-gray-400">{highlight.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
