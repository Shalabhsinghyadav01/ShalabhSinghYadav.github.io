"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="pt-0 pb-16 sm:pb-24 relative"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
          <h2 className="text-3xl sm:text-4xl font-sans font-bold mb-4 flex items-baseline gap-4">
            <span className="text-primary-400 font-mono text-xl">01.</span>
            <span className="text-neutral-50">About Me</span>
          </h2>

          <div className="mt-0 space-y-6 text-neutral-300 leading-relaxed">
            <p>
              Early-career Machine Learning Engineer and Data Scientist with hands-on experience in applied ML, statistical modeling, and optimization, currently pursuing a Master&apos;s in Data Science at the University of Massachusetts Dartmouth (GPA 3.7). Strong foundation in building reproducible ML workflows, evaluating models using quantitative decision frameworks, and translating research-driven methods into production-ready analytical systems.
            </p>
            <p>
              Experience includes developing Python-based automation for software reliability modeling, implementing constrained optimization and multi-criteria model ranking (CRITIC/AHP), and building configurable, experiment-driven pipelines with automated reporting and validation. These systems emphasize modularity, decision logic, and controlled execution—core building blocks for agentic AI systems.
            </p>
            <p>
              Currently expanding expertise in agentic AI concepts such as autonomous decision-making, tool-driven workflows, and multi-step reasoning, with the goal of building intelligent systems that combine ML models, orchestration logic, and real-world constraints. Actively seeking ML and AI roles in the US where I can grow in modern AI system design while delivering measurable impact.
            </p>
            <p>
              Here are a few technologies I&apos;ve been working with recently:
            </p>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-4">
              {[
                "Python",
                "SQL",
                "Statistical Modeling",
                "Supervised & Unsupervised Learning",
                "Reinforcement Learning",
                "Agentic AI Systems",
                "Deep RL",
                "Optimization",
                "Model Evaluation",
                "Experiment Design",
                "Reproducible Pipelines",
                "Algorithm Benchmarking",
                "Scikit-learn",
                "Gymnasium",
                "Stable-Baselines3",
              ].map((tech, index) => (
                <motion.li
                  key={tech}
                  initial={{ opacity: 0, x: -10 }}
                  animate={
                    isInView
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: -10 }
                  }
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  className="flex items-center gap-2 text-sm text-neutral-400"
                >
                  <span className="text-cyan-400">▹</span>
                  {tech}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
    </section>
  );
}
