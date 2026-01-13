"use client";

import { useState, useEffect } from "react";

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState<string | null>("about");

  useEffect(() => {
    const sections = ["about", "experience", "projects", "research-certifications", "skills", "contact"];

    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -65% 0px",
      threshold: [0, 0.25, 0.5, 0.75, 1],
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      // Find the section with the highest intersection ratio
      let maxRatio = 0;
      let activeId: string | null = null;

      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
          maxRatio = entry.intersectionRatio;
          if (entry.target.id) {
            activeId = entry.target.id;
          }
        }
      });

      if (activeId && maxRatio > 0.1) {
        setActiveSection(activeId);
      }
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    const elements: HTMLElement[] = [];
    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
        elements.push(element);
      }
    });

    // Fallback: check scroll position on scroll
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = elements.length - 1; i >= 0; i--) {
        const element = elements[i];
        if (element) {
          const { offsetTop } = element;
          if (scrollPosition >= offsetTop) {
            setActiveSection(element.id);
            break;
          }
        }
      }
    };

    // Initial check
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return activeSection;
}
