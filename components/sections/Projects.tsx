"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { projects } from "@/lib/data";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section
      id="projects"
      ref={ref}
      className="py-16 sm:py-24 relative"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl sm:text-4xl font-sans font-bold mb-4 flex items-center gap-4">
          <span className="text-primary-400 font-mono text-xl">03.</span>
          <span>Featured Projects</span>
        </h2>
        <p className="text-neutral-400 mt-4 mb-12 max-w-2xl">
          A selection of projects showcasing my work in data analysis,
          visualization, and machine learning.
        </p>

        <div
          className="space-y-4 mt-12"
          onMouseLeave={() => setActiveId(null)}
        >
          {projects.map((project, index) => {
            const isActive = activeId === project.title;
            const isDimmed = activeId !== null && !isActive;

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                onMouseEnter={() => setActiveId(project.title)}
                onFocus={() => setActiveId(project.title)}
                onBlur={() => setActiveId(null)}
                className={`blend-card p-6 ${isDimmed ? "blend-card-dimmed" : ""}`}
                tabIndex={0}
              >
                <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6">
                  {/* Left: Image Container */}
                  <div className="relative w-full h-48 md:h-56 rounded-lg overflow-hidden bg-navy-900/30 group-hover:opacity-90 transition-opacity flex items-center justify-center p-4">
                    {project.imageUrl ? (
                      <div className="relative w-full h-full max-w-[140px] max-h-[140px]">
                        <Image
                          src={project.imageUrl}
                          alt={project.title}
                          fill
                          className="object-contain"
                          sizes="(max-width: 768px) 100vw, 140px"
                        />
                      </div>
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary-900/20 to-accent-900/20">
                        <div className="text-center p-4">
                          <div className="text-4xl mb-2">📊</div>
                          <p className="text-neutral-500 text-xs">{project.title}</p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Right: Content Container */}
                  <div className="space-y-3 flex flex-col">
                    {/* Title with external link */}
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-lg font-sans font-semibold text-neutral-50 group-hover:text-primary-400 transition-colors">
                        <a
                          href={project.liveUrl || project.githubUrl || "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 hover:text-primary-400 transition-colors"
                          onClick={(e) => {
                            if (!project.liveUrl && !project.githubUrl) {
                              e.preventDefault();
                            }
                          }}
                        >
                          {project.title}
                          <ExternalLink size={16} className="text-primary-400" aria-hidden="true" />
                        </a>
                      </h3>
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-neutral-500 hover:text-primary-400 transition-colors flex-shrink-0"
                          aria-label={`View ${project.title} on GitHub`}
                        >
                          <Github size={18} aria-hidden="true" />
                        </a>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-neutral-400 text-sm leading-relaxed flex-1">
                      {project.description}
                    </p>

                    {/* Technology chips */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-transparent text-primary-400 text-xs rounded-full border-0 hover:bg-white/[0.05] hover:border hover:border-primary-400/30 transition-all duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
