import { useRef } from "react";
import Nav from "./Main/Nav";
import Intro from "./Main/Intro";
import Tech from "./Main/Tech";
import Project from "./Main/Project";
import Experience from "./Main/Experience";
import Contact from "./Main/Contact";
import Footer from "./Main/Footer";

function App() {
const introRef = useRef<HTMLDivElement | null>(null);
const techRef = useRef<HTMLDivElement | null>(null);
const projectRef = useRef<HTMLDivElement | null>(null);
const experienceRef = useRef<HTMLDivElement | null>(null);
const contactRef = useRef<HTMLDivElement | null>(null);

  // Smooth scroll function with offset for fixed header
  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
  if (ref.current) {
    const offset = 120;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = ref.current.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
};

  return (
    <div className="bg-gray-100 h-fit">
      <Nav
        scrollToSection={scrollToSection}
        refs={{ introRef, techRef, projectRef, experienceRef, contactRef }}
      />
      
      {/* Add scroll-margin-top to account for fixed header */}
      <section ref={introRef} id="home" className="scroll-mt-25">
        <Intro />
      </section>

      <section ref={techRef} id="technologies" className="scroll-mt-20">
        <Tech />
      </section>

      <section ref={projectRef} id="projects" className="scroll-mt-20">
        <Project />
      </section>

      <section ref={experienceRef} id="experience" className="scroll-mt-20">
        <Experience />
      </section>

      <section ref={contactRef} id="contact" className="scroll-mt-20">
        <Contact />
      </section>

      <Footer />
    </div>
  );
}

export default App;