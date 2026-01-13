"use client";

import { useState, useEffect } from "react";
import { Menu, X, Linkedin, Github, Mail, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Research & Certifications", href: "#research-certifications" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/shalabhsinghyadav",
    icon: Linkedin,
  },
  {
    name: "GitHub",
    href: "https://github.com/Shalabhsinghyadav01",
    icon: Github,
  },
  {
    name: "Email",
    href: "mailto:shalabhsinghyadav@example.com",
    icon: Mail,
  },
  {
    name: "Tableau",
    href: "https://public.tableau.com/app/profile/shalabhsinghyadav",
    icon: ExternalLink,
  },
];

export default function MobileHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`lg:hidden fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-navy-900/80 backdrop-blur-md border-b border-transparent"
          : "bg-transparent backdrop-blur-sm"
      }`}
    >
      <div className="section-padding">
        <div className="flex items-center justify-between h-16">
          <div className="space-y-0">
            <h1 className="text-lg font-sans font-bold">
              <span className="text-neutral-50">Shalabh Singh </span>
              <span className="text-gradient">Yadav</span>
            </h1>
            <p className="text-xs text-primary-400 font-medium">Machine Learning Engineer / Data Scientist Agentic AI & Applied ML</p>
          </div>

          <button
            className="text-neutral-400 hover:text-primary-400 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X size={24} aria-hidden="true" />
            ) : (
              <Menu size={24} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-navy-900 border-t border-navy-800"
          >
            <div className="section-padding py-6 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-neutral-400 hover:text-primary-400 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex items-center gap-4 pt-4 border-t border-navy-800">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-400 hover:text-primary-400 transition-colors"
                      aria-label={link.name}
                    >
                      <Icon size={20} aria-hidden="true" />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
