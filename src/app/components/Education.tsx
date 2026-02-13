import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

export function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-violet-500 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-500">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-violet-500 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          {/* Glassmorphism card */}
          <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-12 hover:bg-white/10 transition-all duration-300 group">
            {/* Icon */}
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <GraduationCap className="w-10 h-10 text-white" />
            </div>

            {/* Content */}
            <div className="space-y-4">
              <div>
                <h3 className="text-3xl text-white mb-2">
                  Bachelor of Science in UI Design and Development
                </h3>
                <p className="text-xl text-gray-400">ICAT Design & Media College</p>
              </div>

              <div className="flex flex-wrap gap-6 text-gray-300">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-blue-400" />
                  <span>Aug 2020 – Apr 2023</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-violet-400" />
                  <span>Chennai, India</span>
                </div>
              </div>

              {/* Highlights */}
              <div className="mt-6 pt-6 border-t border-white/10">
                <h4 className="text-lg text-white mb-4">Key Learnings</h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    "User Interface Design",
                    "User Experience Design",
                    "Design Thinking",
                    "Web Development",
                    "Visual Communication",
                    "Interaction Design",
                  ].map((learning, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="flex items-center gap-2 text-gray-300"
                    >
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-violet-500" />
                      <span>{learning}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Decorative glow */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500 to-violet-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10" />
        </motion.div>
      </div>
    </section>
  );
}
