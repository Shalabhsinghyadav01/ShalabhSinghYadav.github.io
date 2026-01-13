"use client";

import { useState, useEffect } from "react";
import { Linkedin, Github, Mail, ExternalLink, Download, Instagram } from "lucide-react";
import { motion } from "framer-motion";

const navItems = [
  { name: "About", href: "#about", id: "about" },
  { name: "Experience", href: "#experience", id: "experience" },
  { name: "Projects", href: "#projects", id: "projects" },
  { name: "Research & Certifications", href: "#research-certifications", id: "research-certifications" },
  { name: "Skills", href: "#skills", id: "skills" },
  { name: "Contact", href: "#contact", id: "contact" },
];

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

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/Shalabhsinghyadav01",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/shalabhsinghyadav",
    icon: Linkedin,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/shalabh_singh_yadav?igsh=cGRvenNjNHA5M210",
    icon: Instagram,
  },
  {
    name: "Research Gate",
    href: "https://www.researchgate.net/profile/Shalabh-Yadav",
    icon: ResearchGateIcon,
  },
  {
    name: "Email",
    href: "mailto:shalabhsinghyadav@example.com",
    icon: Mail,
  },
];

interface IdentityPanelProps {
  activeSection: string | null;
}

export default function IdentityPanel({ activeSection }: IdentityPanelProps) {
  return (
    <aside className="hidden lg:flex flex-col justify-between h-screen sticky top-0 pt-20 pb-12 px-10 xl:px-16 border-r border-transparent bg-transparent w-96 xl:w-[420px] flex-shrink-0 relative z-10">
      <div className="flex-1 flex flex-col">
        {/* Name and Role */}
        <div className="space-y-0.5 mb-12">
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl xl:text-4xl font-sans font-bold text-neutral-50"
          >
            Shalabh Singh Yadav
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-neutral-400 text-sm font-normal"
          >
            Machine Learning Engineer / Data Scientist Agentic AI & Applied ML
          </motion.p>
        </div>

        {/* Navigation - Centered */}
        <nav className="space-y-1">
          {navItems.map((item, index) => {
            const isActive = activeSection === item.id;
            return (
              <motion.a
                key={item.id}
                href={item.href}
                initial={{ opacity: 0, x: -10 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  scale: isActive ? 1.15 : 1,
                  y: isActive ? -4 : 0,
                }}
                transition={{
                  duration: 0.4,
                  delay: 0.3 + index * 0.05,
                  scale: { duration: 0.3, ease: "easeOut" },
                  y: { duration: 0.3, ease: "easeOut" },
                }}
                className={`block py-2 text-lg transition-colors duration-200 ${
                  isActive
                    ? "text-primary-400 font-semibold"
                    : "text-neutral-500 hover:text-neutral-300"
                }`}
                style={{
                  textShadow: isActive
                    ? "0 0 20px rgba(6, 182, 212, 0.3)"
                    : "none",
                }}
              >
                {item.name}
              </motion.a>
            );
          })}
        </nav>
      </div>

      {/* Bottom: Social Links */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="flex items-center gap-5 mb-8"
      >
        {socialLinks.map((link) => {
          const Icon = link.icon;
          const isResearchGate = link.name === 'Research Gate';
          return (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-primary-400 transition-colors duration-200"
              aria-label={link.name}
            >
              {isResearchGate ? (
                <Icon size={18} />
              ) : (
                <Icon size={18} aria-hidden="true" />
              )}
            </a>
          );
        })}
      </motion.div>
    </aside>
  );
}
