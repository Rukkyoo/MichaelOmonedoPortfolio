import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Experience = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const experienceRefs = useRef<Array<HTMLDivElement | null>>([]);

  const experienceData = [
    {
      id: 1,
      company: "Flexisaf Internship",
      role: "Frontend Engineer Intern",
      duration: "05/2025 - Present",
      location: "Remote Internship",
      technologies: ["ReactJS", "SASS", "Styled Components"],
      description: [
        "Building responsive web interfaces with React and styled components",
        "Implementing design systems and UI components",
        "Collaborating with team on frontend architecture"
      ],
    },
    {
      id: 2,
      company: "Kenwiza",
      role: "Fullstack Engineer (Freelance)",
      site: "https://www.kenwiza.com/",
      siteText: "kenwiza.com",
      duration: "02/2025 - 03/2025",
      location: "Remote",
      technologies: [
        "ReactJS",
        "NodeJS",
        "Tailwind CSS",
        "Express",
        "MongoDB",
        "Framer Motion",
      ],
      description: [
        "Built booking platform increasing client engagement by 15%",
        "Created portfolio with Spotify/BeatStars integrations",
        "Developed admin dashboard with real-time session management",
        "Implemented JWT-secured API with Cloudinary support"
      ],
    },
    {
      id: 3,
      company: "Jolly Weekend",
      role: "Frontend Engineer (Freelance)",
      site: "https://jollyweekend.com/",
      siteText: "jollyweekend.com",
      duration: "09/2024 - 10/2024",
      location: "Remote",
      technologies: ["Tailwind CSS", "NextJS", "Framer Motion"],
      description: [
        "Developed responsive landing pages with Next.js",
        "Reduced frontend response time by 15% through optimization",
        "Implemented animations with Framer Motion",
        "Improved site load time by 30%"
      ],
    },
  ];

  // Initialize refs array
  experienceRefs.current = experienceRefs.current.slice(0, experienceData.length);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const ctx = gsap.context(() => {
        // Initial setup - hide elements
        gsap.set(titleRef.current, {
          opacity: 0,
          y: 30
        });

        gsap.set(experienceRefs.current, {
          opacity: 0,
          y: 50,
          scale: 0.95
        });

        // Title animation
        gsap.to(titleRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        });

        // Staggered experience cards animation
        experienceRefs.current.forEach((card, index) => {
          if (card) {
            // Main card animation
            gsap.to(card, {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none reverse"
              },
              delay: index * 0.15 // Stagger effect
            });

            // Animate description list items
            const listItems = card.querySelectorAll('.description-item');
            gsap.set(listItems, { opacity: 0, x: -20 });
            
            gsap.to(listItems, {
              opacity: 1,
              x: 0,
              duration: 0.5,
              ease: "power2.out",
              stagger: 0.1,
              scrollTrigger: {
                trigger: card,
                start: "top 75%",
                toggleActions: "play none none reverse"
              },
              delay: 0.4
            });

            // Animate technologies text
            const techSection = card.querySelector('.tech-section');
            if (techSection) {
              gsap.set(techSection, { opacity: 0, y: 10 });
              gsap.to(techSection, {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: card,
                  start: "top 75%",
                  toggleActions: "play none none reverse"
                },
                delay: 0.2
              });
            }

            // Hover effects for experience cards
            card.addEventListener('mouseenter', () => {
              gsap.to(card, {
                y: -5,
                scale: 1.01,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 5px 10px -5px rgba(0, 0, 0, 0.04)",
                duration: 0.3,
                ease: "power2.out"
              });
            });

            card.addEventListener('mouseleave', () => {
              gsap.to(card, {
                y: 0,
                scale: 1,
                boxShadow: "0 0 0 0 rgba(0, 0, 0, 0)",
                duration: 0.3,
                ease: "power2.out"
              });
            });
          }
        });

        // Site link hover effects
        if (containerRef.current) {
          const siteLinks = containerRef.current.querySelectorAll('.site-link');
          siteLinks.forEach(link => {
            link.addEventListener('mouseenter', () => {
              gsap.to(link, {
                scale: 1.05,
                duration: 0.2,
                ease: "power2.out"
              });
            });

            link.addEventListener('mouseleave', () => {
              gsap.to(link, {
                scale: 1,
                duration: 0.2,
                ease: "power2.out"
              });
            });
          });
        }

        // Timeline animation for current role indicator
        if (containerRef.current) {
          const currentRoleCards = containerRef.current.querySelectorAll('.current-role');
          currentRoleCards.forEach(card => {
            const pulse = gsap.to(card, {
              boxShadow: "0 0 0 4px rgba(59, 130, 246, 0.3)",
              duration: 1.5,
              ease: "power2.inOut",
              repeat: -1,
              yoyo: true,
              paused: true
            });

            ScrollTrigger.create({
              trigger: card,
              start: "top 80%",
              end: "bottom 20%",
              onEnter: () => pulse.play(),
              onLeave: () => pulse.pause(),
              onEnterBack: () => pulse.play(),
              onLeaveBack: () => pulse.pause()
            });
          });
        }

      }, containerRef);

      return () => ctx.revert();
    }
  }, []);

  return (
    <div ref={containerRef} id="experience" className="mt-10 flex flex-col items-center">
      <h3 ref={titleRef} className="text-2xl font-bold mb-8 lg:text-4xl">Experience</h3>
      <div className="w-full max-w-4xl">
        {experienceData.map((exp, index) => (
          <div
            key={exp.id}
            ref={(el) => { experienceRefs.current[index] = el; }}
            className={`bg-zinc-200 border-zinc-300 rounded-md border-2 p-4 mx-4 mb-4 transition-shadow duration-300 cursor-pointer ${
              exp.duration.includes('Present') ? 'current-role' : ''
            }`}
          >
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-bold mb-1">{exp.role}</h4>
                <h5 className="font-medium">
                  {exp.company}, {exp.location}
                </h5>
              </div>
              {exp.site && (
                <a 
                  href={exp.site} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="site-link text-blue-600 hover:underline transition-colors duration-200"
                >
                  {exp.siteText}
                </a>
              )}
            </div>
            <p className="mb-2 text-sm text-zinc-600">Duration: {exp.duration}</p>
            
            <div className="tech-section my-2">
              <span className="font-medium">Technologies: </span>
              <span className="text-zinc-600">
                {exp.technologies.join(", ")}
              </span>
            </div>

            <ul className="text-zinc-500 list-disc list-inside space-y-1 mt-2">
              {exp.description.map((item, index) => (
                <li key={index} className="description-item">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;