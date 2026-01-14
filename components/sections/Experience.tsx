"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { experiences } from "@/lib/data";
import { ExternalLink } from "lucide-react";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section
      id="experience"
      ref={ref}
      className="py-16 sm:py-24 relative"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl sm:text-4xl font-sans font-bold mb-12 flex items-center gap-4">
          <span className="text-primary-400 font-mono text-xl">02.</span>
          <span>Where I&apos;ve Worked</span>
        </h2>

        <div
          className="mt-12 space-y-4"
          onMouseLeave={() => setActiveId(null)}
        >
          {experiences.map((exp, index) => {
            const isActive = activeId === `${exp.company}-${index}`;
            const isDimmed = activeId !== null && !isActive;

            return (
              <motion.div
                key={`${exp.company}-${index}`}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                onMouseEnter={() => setActiveId(`${exp.company}-${index}`)}
                onFocus={() => setActiveId(`${exp.company}-${index}`)}
                onBlur={() => setActiveId(null)}
                className={`blend-card p-6 ${isDimmed ? "blend-card-dimmed" : ""}`}
                tabIndex={0}
              >
                <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6">
                  {/* Left: Date Range */}
                  <div className="text-sm text-neutral-400 font-mono">
                    {exp.startDate} — {exp.endDate}
                  </div>

                  {/* Right: Content */}
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-sans font-semibold text-neutral-50 mb-1">
                          {exp.position}
                        </h3>
                        <div className="flex items-center gap-2">
                          <a
                            href="#"
                            className="text-primary-400 hover:text-primary-300 transition-colors text-sm font-medium inline-flex items-center gap-1.5"
                            onClick={(e) => e.preventDefault()}
                          >
                            {exp.company}
                            <ExternalLink size={14} aria-hidden="true" />
                          </a>
                          <span className="text-neutral-500 text-sm">·</span>
                          <span className="text-neutral-500 text-sm">{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-neutral-400 text-sm leading-relaxed max-w-3xl">
                      {exp.description[0]}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {exp.technologies.map((tech) => (
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

        {/* View Full Résumé Link */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.4, delay: experiences.length * 0.1 + 0.2 }}
          className="mt-12"
        >
          <a
            href="https://drive.google.com/file/d/1fi3kS57yrB-k13ZH1DUkz3FFS69fElb7/view"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors text-base font-normal"
          >
            View Full Résumé
            <ExternalLink size={16} aria-hidden="true" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
