import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Awards from "@/components/Awards";
import Certifications from "@/components/Certifications";
import Education from "@/components/Education";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 w-full">
      <main className="flex flex-col w-full">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Experience />
        <Awards />
        <Certifications />
        <Contact />
      </main>
    </div>
  );
}
