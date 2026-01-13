"use client";

import { motion } from "framer-motion";
import { ArrowDown, ExternalLink } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-950/20 via-neutral-950 to-accent-950/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.1),transparent_50%)]" />

      <div className="container-width section-padding relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-primary-400 text-sm font-medium mb-4"
          >
            Hi, my name is
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-sans font-bold mb-4"
          >
            <span className="text-neutral-50">Shalabh Singh </span>
            <span className="text-gradient">Yadav.</span>
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-2xl sm:text-3xl md:text-4xl font-sans font-semibold text-neutral-400 mb-6"
          >
            Machine Learning Engineer / Data Scientist Agentic AI & Applied ML
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-neutral-400 text-lg sm:text-xl max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            I&apos;m a data analyst based in Boston, specializing in transforming
            complex datasets into actionable insights that drive business
            decisions and optimize performance.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <a
              href="#contact"
              className="text-primary-400 hover:text-primary-300 transition-colors duration-200 text-sm font-normal"
            >
              Get In Touch
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-400 hover:text-primary-300 transition-colors duration-200 text-sm font-normal inline-flex items-center gap-1.5"
            >
              Resume
              <ExternalLink size={14} aria-hidden="true" />
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-neutral-500 hover:text-primary-400 transition-colors duration-200"
            aria-label="Scroll to about section"
          >
            <span className="text-xs">Scroll down</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowDown size={20} aria-hidden="true" />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
