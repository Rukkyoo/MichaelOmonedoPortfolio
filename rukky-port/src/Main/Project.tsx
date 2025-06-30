import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaSass } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Project = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  const projectInfo = [
    {
      id: 1,
      name: "Keferoma E-commerce Platform",
      desc: "An e-commerce platform for premium soya oil, built with React and Next.js. Features: Mobile-friendly shopping experience, Product catalog with cart functionality, Direct contact via WhatsApp, call, or email Fast delivery & competitive pricing, Perfect for households, restaurants, and bulk buyers.",
      technology: [
        <FaReact key="react" size={20}/>,
        <RiNextjsFill key="nextjs" size={20}/>,
        <FaSass key="sass" size={20}/>,
      ],
      demo: "https://keferoma-project.vercel.app/",
      github: "https://github.com/Rukkyoo/keferoma-project",
    },
    {
      id: 2,
      name: "MERN Map",
      desc: "A fullstack app that utilizes Google Maps Platform Places New API and Routes API directly to handle address autocomplete and route computation on the backend and a slick UI on the frontend to display.",
      technology: [
        <FaReact key="react" size={20}/>,
        <RiTailwindCssFill key="tailwind" size={20}/>,
        <FaNodeJs key="nodejs" size={20}/>,
        <SiExpress key="express" size={20}/>,
      ],
      demo: "https://mern-map.vercel.app/",
      github: "https://github.com/Rukkyoo/mern-map",
    },
    {
      id: 3,
      name: "Subscription Tracker API",
      desc: "This Node.js/Express API helps users manage recurring subscriptions with JWT authentication and authorization, MongoDB storage, and automated workflows with Upstash QStash. Users can track subscriptions while receiving email reminders via Nodemailer before renewals.",
      technology: [
        <FaReact key="react" size={20}/>,
        <RiTailwindCssFill key="tailwind" size={20}/>,
        <FaNodeJs key="nodejs" size={20}/>,
        <SiExpress key="express" size={20}/>,
        <SiMongodb key="mongodb" size={20}/>,
      ],
      github: "https://github.com/Rukkyoo/sub-tracker-api",
    },
    {
      id: 4,
      name: "Task Manager App",
      desc: "This fullstack app with clean UI utilizes CRUD operations for task management.",
      technology: [
        <FaReact key="react" size={20}/>,
        <RiTailwindCssFill key="tailwind" size={20}/>,
        <FaNodeJs key="nodejs" size={20}/>,
        <SiExpress key="express" size={20}/>,
        <SiMongodb key="mongodb" size={20}/>,
      ],
      demo: "https://fs-task-manager-app.vercel.app/",
      github: "https://github.com/Rukkyoo/task-manager-app",
    },
    {
      id: 5,
      name: "Quiz App",
      desc: "This is a responsive quiz application built with Next.js, Tailwind CSS, and Firebase Authentication. Users can sign up, log in, and take quizzes across five categories such as Animals, Film, General Knowledge, Maths, and Science with real-time scoring and dynamic question loading.",
      technology: [
        <FaReact key="react" size={20}/>,
        <RiTailwindCssFill key="tailwind" size={20}/>,
        <IoLogoFirebase key="firebase" size={20}/>,
        <RiNextjsFill key="nextjs" size={20}/>,
      ],
      demo: "https://improved-quizzical-app.vercel.app",
      github: "https://github.com/Rukkyoo/Improved-quizzical-app",
    },
  ];

  // Add refs to array
  projectRefs.current = projectRefs.current.slice(0, projectInfo.length);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const ctx = gsap.context(() => {
        // Initial setup - hide elements
        gsap.set(titleRef.current, {
          opacity: 0,
          y: 30
        });

        gsap.set(projectRefs.current, {
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

        // Staggered project cards animation
        projectRefs.current.forEach((card, index) => {
          if (card) {
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
              delay: index * 0.1 // Stagger effect
            });

            // Technology icons animation
            const techIcons = (card as HTMLDivElement).querySelectorAll('.tech-icon');
            gsap.set(techIcons, { scale: 0, opacity: 0 });
            
            gsap.to(techIcons, {
              scale: 1,
              opacity: 1,
              duration: 0.4,
              ease: "back.out(1.7)",
              stagger: 0.1,
              scrollTrigger: {
                trigger: card,
                start: "top 70%",
                toggleActions: "play none none reverse"
              },
              delay: 0.3
            });

            // Hover effects for project cards
            card.addEventListener('mouseenter', () => {
              gsap.to(card, {
                y: -8,
                scale: 1.02,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
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

        // Link hover effects
        if (containerRef.current) {
          const links = containerRef.current.querySelectorAll('.project-link');
          links.forEach(link => {
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

      }, containerRef);

      return () => ctx.revert();
    }
  }, []);

  return (
    <div ref={containerRef} className="mt-20 flex flex-col items-center">
      <h3 ref={titleRef} className="text-2xl font-bold mb-8 lg:text-4xl">Projects</h3>
      <div className="flex flex-col">
        {projectInfo.map((project, index) => (
          <div 
            key={project.id}
            ref={el => { projectRefs.current[index] = el; }}
            className="bg-zinc-200 border-zinc-300 rounded-md border-2 p-4 mx-4 mb-6 transition-shadow duration-300 cursor-pointer"
          >
            <h4 className="font-bold mb-3 text-lg">{project.name}</h4>
            <p className="mb-3 text-zinc-600 leading-relaxed">
              {project.desc}
            </p>
            <div className="mb-4 flex flex-row items-center gap-2 flex-wrap">
              <span className="font-medium">Technologies Used:</span>
              {project.technology.map((tech, techIndex) => (
                <span key={techIndex} className="tech-icon">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex flex-row gap-6">
              {project.demo && (
                <a 
                  href={project.demo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link font-bold text-blue-600 hover:text-blue-800 transition-colors duration-200"
                >
                  Demo
                </a>
              )}
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link font-bold text-gray-700 hover:text-gray-900 transition-colors duration-200"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;