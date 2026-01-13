import { Linkedin, Github, Mail, Instagram } from "lucide-react";

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

export default function Footer() {
  return (
    <footer className="border-t border-transparent bg-transparent lg:ml-0 relative z-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-neutral-500 text-sm">
            © {new Date().getFullYear()} Shalabh Singh Yadav. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              const isResearchGate = link.name === 'Research Gate';
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-primary-400 transition-colors duration-200"
                  aria-label={link.name}
                >
                  {isResearchGate ? (
                    <Icon size={20} />
                  ) : (
                    <Icon size={20} aria-hidden="true" />
                  )}
                </a>
              );
            })}
          </div>
        </div>
        <p className="text-center text-neutral-600 text-xs mt-8">
          Built with Next.js, Tailwind CSS, and Framer Motion
        </p>
      </div>
    </footer>
  );
}
