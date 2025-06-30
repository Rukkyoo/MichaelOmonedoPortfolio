import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { useEffect, useRef } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, TextPlugin);
}

const Intro = () => {
  const nameRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonRef = useRef(null);
  const greetingRef = useRef(null);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Set initial states
      gsap.set([descriptionRef.current, buttonRef.current], {
        opacity: 0,
        y: 30
      });

      // Timeline for coordinated animations
      const tl = gsap.timeline();

      // First, fade in the greeting
      tl.from(greetingRef.current, {
        opacity: 10,
        y: 20,
        duration: 0.8,
        ease: "power2.out"
      });

      // Then start the typewriter effect for the name
      tl.to(nameRef.current, {
        text: "Michael Omonedo",
        duration: 1.5,
        ease: "none",
        delay: 0.3
      }, "-=0.2");

      // Finally, fade in the description and button
      tl.to([descriptionRef.current, buttonRef.current], {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out"
      }, "-=0.3");
    }
  }, []);

  return (
    <div className="mt-10 flex flex-col items-center lg:mb-8">
      <h1 className="text-4xl sm:text-6xl font-bold text-center lg:mt-10">
        <span ref={greetingRef}>Hello there 👋, I'm </span>
        <span ref={nameRef} className="text-gray-500"></span>
      </h1>
      <p 
        ref={descriptionRef}
        className="text-lg px-5.5 sm:text-2xl text-center mt-4 text-zinc-700"
      >
        I am a fullstack developer (frontend heavy) who is passionate about
        crafting beautiful and functional web experiences. I specialize in
        building responsive and user-friendly interfaces.
      </p>
      <button
        ref={buttonRef}
        onClick={scrollToProjects}
        className="bg-black text-white rounded-full py-2 px-7 mt-8 cursor-pointer hover:bg-gray-700 transition duration-300 ease-in-out"
      >
        View my Projects
      </button>
    </div>
  );
};

export default Intro;