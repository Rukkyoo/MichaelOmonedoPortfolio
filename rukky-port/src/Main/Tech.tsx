import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaSass } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { FiFramer } from "react-icons/fi";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Tech = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const firstRowRef = useRef<HTMLDivElement>(null);
  const secondRowRef = useRef<HTMLDivElement>(null);
  const firstRowInnerRef = useRef<HTMLDivElement>(null);
  const secondRowInnerRef = useRef<HTMLDivElement>(null);

  const data = [
    {
      id: 1,
      name: "HTML",
      icon: <FaHtml5 size={50} />,
    },
    {
      id: 2,
      name: "CSS",
      icon: <FaCss3Alt size={50} />,
    },
    {
      id: 3,
      name: "JavaScript",
      icon: <IoLogoJavascript size={50} />,
    },
    {
      id: 4,
      name: "ReactJS",
      icon: <FaReact size={50} />,
    },
    {
      id: 5,
      name: "NextJS",
      icon: <RiNextjsFill size={50} />,
    },
    {
      id: 6,
      name: "TailwindCSS",
      icon: <RiTailwindCssFill size={50} />,
    },
    {
      id: 7,
      name: "SASS",
      icon: <FaSass size={50} />,
    },
    {
      id: 8,
      name: "Typescript",
      icon: <SiTypescript size={50} />,
    },
    {
      id: 9,
      name: "NodeJS",
      icon: <FaNodeJs size={50} />,
    },
    {
      id: 10,
      name: "ExpressJS",
      icon: <SiExpress size={50} />,
    },
    {
      id: 11,
      name: "Git",
      icon: <FaGitAlt size={50} />,
    },
    {
      id: 12,
      name: "Github",
      icon: <FaGithub size={50} />,
    },
    {
      id: 13,
      name: "MongoDB",
      icon: <SiMongodb size={50} />,
    },
    {
      id: 14,
      name: "Postman",
      icon: <SiPostman size={50} />,
    },
    {
      id: 15,
      name: "Firebase",
      icon: <IoLogoFirebase size={50} />,
    },
    {
      id: 16,
      name: "Framer",
      icon: <FiFramer size={50} />,
    },
  ];

  // Split data into two groups
  const firstRowData = data.slice(0, 8);
  const secondRowData = data.slice(8);

  // Duplicate the data to create seamless loops
  const duplicatedFirstRow = [...firstRowData, ...firstRowData];
  const duplicatedSecondRow = [...secondRowData, ...secondRowData];

  useEffect(() => {
    if (typeof window !== "undefined") {
      const ctx = gsap.context(() => {
        // Initial setup - hide elements
        gsap.set([titleRef.current, firstRowRef.current, secondRowRef.current], {
          opacity: 0,
          y: 50
        });

        // ScrollTrigger animation for entrance
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        });

        // Stagger in the elements
        tl.to(titleRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out"
        })
        .to([firstRowRef.current, secondRowRef.current], {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.3,
          ease: "power2.out"
        }, "-=0.4");

        // Infinite scroll animations
        const firstRowWidth = firstRowInnerRef.current ? firstRowInnerRef.current.scrollWidth / 2 : 0;
        const secondRowWidth = secondRowInnerRef.current ? secondRowInnerRef.current.scrollWidth / 2 : 0;

        // First row - left to right
        if (firstRowInnerRef.current) {
          gsap.to(firstRowInnerRef.current, {
            x: -firstRowWidth,
            duration: 20,
            ease: "none",
            repeat: -1
          });
        }

        // Second row - right to left (reverse)
        if (secondRowInnerRef.current) {
          gsap.set(secondRowInnerRef.current, { x: -secondRowWidth });
          gsap.to(secondRowInnerRef.current, {
            x: 0,
            duration: 25,
            ease: "none",
            repeat: -1
          });
        }

        // Hover effects for tech cards
        if (containerRef.current) {
          const techCards = containerRef.current.querySelectorAll('.tech-card');
          techCards.forEach((card: Element) => {
            card.addEventListener('mouseenter', () => {
              gsap.to(card, {
                scale: 1.05,
                y: -5,
                duration: 0.3,
                ease: "power2.out"
              });
            });

            card.addEventListener('mouseleave', () => {
              gsap.to(card, {
                scale: 1,
                y: 0,
                duration: 0.3,
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
      <h3 ref={titleRef} className="text-2xl font-bold mb-8 lg:text-4xl">
        Technologies I use
      </h3>

      {/* First row - faster scrolling */}
      <div ref={firstRowRef} className="w-full overflow-hidden py-2 mb-4">
        <div ref={firstRowInnerRef} className="flex items-center gap-5">
          {duplicatedFirstRow.map((tech, index) => (
            <div
              key={`first-${tech.id}-${index}`}
              className="tech-card flex flex-col h-28 min-w-[120px] bg-zinc-200 border-zinc-300 rounded-md border-2 p-5 justify-center items-center gap-1 cursor-pointer"
            >
              <span>{tech.icon}</span>
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Second row - slower scrolling */}
      <div ref={secondRowRef} className="w-full overflow-hidden py-2">
        <div ref={secondRowInnerRef} className="flex items-center gap-5">
          {duplicatedSecondRow.map((tech, index) => (
            <div
              key={`second-${tech.id}-${index}`}
              className="tech-card flex flex-col h-28 min-w-[120px] bg-zinc-200 border-zinc-300 rounded-md border-2 p-5 justify-center items-center gap-1 cursor-pointer"
            >
              <span>{tech.icon}</span>
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tech;