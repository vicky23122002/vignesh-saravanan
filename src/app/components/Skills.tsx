import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Palette, Code, Sparkles } from "lucide-react";

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Design Tools",
      icon: <Palette className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      skills: ["Figma", "Adobe Creative Cloud", "Canva", "Blender", "CapCut"],
    },
    {
      title: "Development",
      icon: <Code className="w-6 h-6" />,
      color: "from-violet-500 to-purple-500",
      skills: ["HTML", "CSS", "React", "Angular", "Bootstrap", "WordPress"],
    },
    {
      title: "AI Tools",
      icon: <Sparkles className="w-6 h-6" />,
      color: "from-pink-500 to-rose-500",
      skills: ["ChatGPT", "Gemini", "Midjourney", "Adobe Firefly", "Runway", "Sora", "Framer", "Uizard", "Beautiful.AI", "Recraft", "Kling"],
    },
  ];

  return (
    <section id="skills" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-pink-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-500">Tools</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-violet-500 mx-auto rounded-full" />
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Equipped with modern design and development tools to create exceptional digital experiences
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 group"
            >
              {/* Category header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} bg-opacity-20 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl text-white">{category.title}</h3>
              </div>

              {/* Skills tags */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: categoryIndex * 0.2 + skillIndex * 0.05 }}
                    whileHover={{ scale: 1.1 }}
                    className={`px-4 py-2 rounded-full bg-gradient-to-r ${category.color} bg-opacity-10 border border-white/10 text-white text-sm hover:bg-opacity-20 transition-all duration-300 cursor-default`}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional skills showcase */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 backdrop-blur-sm bg-gradient-to-r from-blue-500/10 via-violet-500/10 to-pink-500/10 border border-white/10 rounded-3xl p-8"
        >
          <h4 className="text-xl text-white mb-4 text-center">Core Competencies</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "User Research",
              "Wireframing",
              "Prototyping",
              "Visual Design",
              "Design Systems",
              "Responsive Design",
              "Design Thinking",
              "Brand Identity",
            ].map((competency, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.9 + index * 0.05 }}
                className="flex items-center gap-2 text-gray-300"
              >
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-violet-500" />
                <span>{competency}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}