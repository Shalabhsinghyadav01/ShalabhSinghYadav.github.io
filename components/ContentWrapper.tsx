"use client";

import { useActiveSection } from "@/hooks/useActiveSection";
import IdentityPanel from "@/components/IdentityPanel";
import MobileHeader from "@/components/MobileHeader";

interface ContentWrapperProps {
  children: React.ReactNode;
}

export default function ContentWrapper({ children }: ContentWrapperProps) {
  const activeSection = useActiveSection();

  return (
    <>
      <MobileHeader />
      <div className="flex min-h-screen lg:pt-0 pt-16 relative">
        <IdentityPanel activeSection={activeSection} />
        <main className="flex-1 overflow-y-auto relative z-10">
          <div className="max-w-4xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 pt-20 pb-12 lg:pb-24">
            {children}
          </div>
        </main>
      </div>
    </>
  );
}
