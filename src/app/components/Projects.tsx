import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    {
      title: "Logo Design Collection",
      category: "Branding",
      description: "Modern and versatile logo designs created for multiple brands across industries, focusing on identity systems and strong visual impact.",
      tags: ["Branding", "Identity", "Logo Design"],
      link: "https://www.behance.net/gallery/183861059/Logo-Design",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Travel Rhythem",
      subtitle: "UI Case Study",
      category: "UI/UX Design",
      description: "A complete travel application case study including research, wireframes, user flows, and high-fidelity mobile UI.",
      tags: ["UI/UX", "Mobile", "Case Study"],
      link: "https://www.behance.net/gallery/166979715/Travel-Rhythem-UI-Case-Study",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80",
      color: "from-violet-500 to-purple-500",
    },
    {
      title: "We Earn",
      subtitle: "Referral Rewards Platform",
      category: "Product Design",
      description: "End-to-end referral reward platform with sharing, tracking, and redemption experience.",
      tags: ["Product", "Mobile", "UI/UX"],
      link: "https://www.behance.net/gallery/166968547/We-Earn",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
      color: "from-pink-500 to-rose-500",
    },
    {
      title: "FlyDel",
      subtitle: "Food Delivery App",
      category: "Mobile App UI/UX",
      description: "Full UX process including research, wireframes, and high-fidelity UI for seamless ordering experience.",
      tags: ["Mobile", "UI/UX", "Food Tech"],
      link: "https://www.behance.net/gallery/166989793/Flydel-UI-Case-Study",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80",
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section id="projects" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-violet-500 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-500">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-violet-500 mx-auto rounded-full" />
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A showcase of design work spanning branding, mobile apps, and digital experiences
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative"
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                {/* Card */}
                <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-500 h-full">
                  {/* Image container */}
                  <div className="relative overflow-hidden aspect-video">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Overlay on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
                    
                    {/* Category badge */}
                    <div className={`absolute top-4 left-4 px-4 py-2 rounded-full bg-gradient-to-r ${project.color} text-white text-sm`}>
                      {project.category}
                    </div>

                    {/* External link icon */}
                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="mb-3">
                      <h3 className="text-2xl text-white mb-1">
                        {project.title}
                      </h3>
                      {project.subtitle && (
                        <p className="text-lg text-gray-400">{project.subtitle}</p>
                      )}
                    </div>

                    <p className="text-gray-300 mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* View project link */}
                    <div className="flex items-center gap-2 text-blue-400 group-hover:gap-3 transition-all duration-300">
                      <span>View Project</span>
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Glow effect */}
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10`}
                />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://www.behance.net/vigneshsaravanan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 text-white hover:from-blue-700 hover:to-violet-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            View All Projects on Behance
            <ExternalLink className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
