"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { skills } from "@/lib/data";

const skillCategories = [
  { title: "Languages & Methodologies", items: skills.languages },
  { title: "Tools, Platforms & Frameworks", items: [...skills.tools, ...skills.frameworks] },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="skills"
      ref={ref}
      className="py-16 sm:py-24 relative"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
          <h2 className="text-3xl sm:text-4xl font-sans font-bold mb-4 flex items-center gap-4">
            <span className="text-primary-400 font-mono text-xl">05.</span>
            <span>Skills & Technologies</span>
          </h2>
          <p className="text-neutral-400 mt-4 mb-12 max-w-2xl">
            A comprehensive overview of the technologies and methodologies I use
            to transform data into insights.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="bg-transparent border-0 rounded-xl p-6 hover:bg-white/[0.03] transition-all duration-300"
              >
                <h3 className="text-lg font-sans font-semibold text-primary-400 mb-4">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.items.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={
                        isInView
                          ? { opacity: 1, scale: 1 }
                          : { opacity: 0, scale: 0.8 }
                      }
                      transition={{
                        duration: 0.3,
                        delay: categoryIndex * 0.1 + skillIndex * 0.05,
                      }}
                      className="px-3 py-1.5 bg-transparent text-primary-400 text-xs rounded-full border-0 hover:bg-white/[0.05] hover:border hover:border-primary-400/30 transition-all duration-200"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
    </section>
  );
}
