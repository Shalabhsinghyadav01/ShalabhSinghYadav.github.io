import ContentWrapper from "@/components/ContentWrapper";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import ResearchCertifications from "@/components/sections/ResearchCertifications";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <ContentWrapper>
      <About />
      <Experience />
      <Projects />
      <ResearchCertifications />
      <Skills />
      <Contact />
    </ContentWrapper>
  );
}
