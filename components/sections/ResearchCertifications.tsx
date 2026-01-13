"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";
import { certifications, research } from "@/lib/data";

export default function ResearchCertifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="research-certifications"
      ref={ref}
      className="py-16 sm:py-24 relative"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl sm:text-4xl font-sans font-bold mb-4 flex items-center gap-4">
          <span className="text-primary-400 font-mono text-xl">04.</span>
          <span>Research & Certifications</span>
        </h2>
        <p className="text-neutral-400 mt-4 mb-12 max-w-2xl">
          Academic credentials and research contributions in machine learning and data science.
        </p>

        {/* Research Section */}
        <div className="mb-12">
          <h3 className="text-xl font-sans font-semibold text-primary-400 mb-6">
            Research
          </h3>
          <div className="space-y-4">
            {research.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="blend-card p-6"
              >
                <h4 className="text-lg font-sans font-semibold text-neutral-50 mb-2">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 hover:text-primary-400 transition-colors"
                  >
                    {item.title}
                    <ExternalLink size={16} className="text-primary-400" aria-hidden="true" />
                  </a>
                </h4>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <h3 className="text-xl font-sans font-semibold text-primary-400 mb-6">
            Education & Certifications
          </h3>
          <div className="space-y-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.4, delay: (research.length + index) * 0.1 }}
                className="blend-card p-6"
              >
                <h4 className="text-lg font-sans font-semibold text-neutral-50 mb-1">
                  {cert.link ? (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 hover:text-primary-400 transition-colors"
                    >
                      {cert.title}
                      <ExternalLink size={16} className="text-primary-400" aria-hidden="true" />
                    </a>
                  ) : (
                    cert.title
                  )}
                </h4>
                <p className="text-primary-400 text-sm font-medium mb-1">
                  {cert.institution}
                </p>
                {cert.date && (
                  <p className="text-neutral-500 text-xs font-mono mb-1">
                    {cert.date}
                  </p>
                )}
                {cert.details && (
                  <p className="text-neutral-400 text-xs mt-2">
                    {cert.details}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
