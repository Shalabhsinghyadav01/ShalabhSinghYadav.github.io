"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, Github, Instagram } from "lucide-react";

// Research Gate icon component
const ResearchGateIcon = ({ size }: { size: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.668 1.333H4.332C2.494 1.333 1 2.827 1 4.665v14.67c0 1.838 1.494 3.332 3.332 3.332h15.336c1.838 0 3.332-1.494 3.332-3.332V4.665c0-1.838-1.494-3.332-3.332-3.332zm-2.666 14.668h-2.668v-4h-2.668v4H8.998V8.998h2.668v4h2.668v-4h2.668v7.003z" />
  </svg>
);

const contactLinks = [
  {
    name: "GitHub",
    href: "https://github.com/Shalabhsinghyadav01",
    icon: Github,
    label: "View my GitHub profile",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/shalabhsinghyadav",
    icon: Linkedin,
    label: "Connect on LinkedIn",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/shalabh_singh_yadav?igsh=cGRvenNjNHA5M210",
    icon: Instagram,
    label: "Follow me on Instagram",
  },
  {
    name: "Research Gate",
    href: "https://www.researchgate.net/profile/Shalabh-Yadav",
    icon: ResearchGateIcon,
    label: "View my Research Gate profile",
  },
  {
    name: "Email",
    href: "mailto:shalabhsinghyadav@example.com",
    icon: Mail,
    label: "Send me an email",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="contact"
      ref={ref}
      className="py-16 sm:py-24 relative"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center"
      >
          <h2 className="text-3xl sm:text-4xl font-sans font-bold mb-4 flex items-center justify-center gap-4">
            <span className="text-primary-400 font-mono text-xl">06.</span>
            <span>Get In Touch</span>
          </h2>
          <p className="text-neutral-400 mt-6 mb-4 text-lg">
            I&apos;m currently open to new opportunities and collaborations. Whether
            you have a question or just want to say hi, I&apos;ll try my best to get
            back to you!
          </p>
          <p className="text-neutral-500 text-sm mb-12">
            Feel free to reach out through any of the channels below.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-12">
            {contactLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex flex-col items-center gap-3 p-6 bg-transparent border-0 rounded-xl hover:bg-white/[0.03] transition-all duration-300 group"
                  aria-label={link.label}
                >
                  {link.name === 'Research Gate' ? (
                    <div className="text-neutral-400 group-hover:text-primary-400 transition-colors">
                      <Icon size={24} />
                    </div>
                  ) : (
                    <Icon
                      size={24}
                      className="text-neutral-400 group-hover:text-primary-400 transition-colors"
                      aria-hidden="true"
                    />
                  )}
                  <span className="text-sm text-neutral-400 group-hover:text-primary-400 transition-colors font-medium">
                    {link.name}
                  </span>
                </motion.a>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12"
          >
            <a
              href="mailto:shalabhsinghyadav@example.com"
              className="inline-block text-primary-400 hover:text-primary-300 transition-colors duration-200 text-sm font-normal"
            >
              Say Hello
            </a>
          </motion.div>
        </motion.div>
    </section>
  );
}
