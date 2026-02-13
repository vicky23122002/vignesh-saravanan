import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Building2, Calendar } from "lucide-react";

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      role: "UI/UX Designer",
      company: "Tata Consultancy Services",
      period: "May 2024 – 2026",
      location: "Enterprise Solutions",
      responsibilities: [
        "Led full Design Thinking process for LUMIS Automobile App in 3 weeks",
        "Designed COIN Community Mobile App flows & UI system",
        "Enhanced UX consistency for TEXXAS Web App",
        "Designed dashboards & researcher modules for Research Spark",
        "Delivered multiple enterprise NDA projects",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      role: "UI/UX Intern",
      company: "Freetechcafe",
      period: "Apr 2022 – June 2023",
      location: "Digital Products",
      responsibilities: [
        "Completed FlyDel app end-to-end design",
        "Designed 100+ social media posters",
        "Created 10+ logos for various brands",
        "Delivered 3+ comprehensive UI design projects",
      ],
      color: "from-violet-500 to-purple-500",
    },
    {
      role: "Graphic Designer Intern",
      company: "Bizmatics",
      period: "Oct 2023 – Dec 2023",
      location: "Healthcare Branding",
      responsibilities: [
        "Designed creatives for medical & healthcare brands",
        "Built brand-focused visual communication systems",
      ],
      color: "from-pink-500 to-rose-500",
    },
  ];

  return (
    <section id="experience" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-violet-500 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-500">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-violet-500 mx-auto rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-violet-500 to-pink-500" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative mb-12 md:mb-16 ${index % 2 === 0 ? "md:pr-1/2 md:text-right" : "md:pl-1/2 md:ml-auto"}`}
            >
              {/* Timeline dot */}
              <div className="hidden md:block absolute left-1/2 top-8 w-4 h-4 -ml-2 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 ring-4 ring-black" />
              
              {/* Content card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 hover:bg-white/10 transition-all duration-300 group"
              >
                {/* Header */}
                <div className="mb-6">
                  <div className="flex items-start justify-between gap-4 flex-wrap mb-2">
                    <div className="flex-1">
                      <h3 className="text-2xl text-white mb-1">{exp.role}</h3>
                      <div className="flex items-center gap-2 text-gray-400 mb-2">
                        <Building2 className="w-4 h-4" />
                        <span>{exp.company}</span>
                      </div>
                    </div>
                    <div className={`px-4 py-2 rounded-full bg-gradient-to-r ${exp.color} text-white text-sm whitespace-nowrap`}>
                      {exp.location}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-blue-400">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Responsibilities */}
                <ul className="space-y-3">
                  {exp.responsibilities.map((resp, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: index * 0.2 + i * 0.1 }}
                      className="flex items-start gap-3 text-gray-300"
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${exp.color} mt-2 flex-shrink-0`} />
                      <span>{resp}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
