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


const Tech = () => {
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

  // Split data into two groups (you can customize this split)
  const firstRowData = data.slice(0, 8);
  const secondRowData = data.slice(8);

  // Duplicate the data to create seamless loops
  const duplicatedFirstRow = [...firstRowData, ...firstRowData];
  const duplicatedSecondRow = [...secondRowData, ...secondRowData];

  return (
    <div  className="mt-20 flex flex-col items-center ">
      <h3 className="text-2xl font-bold mb-8 lg:text-4xl">Technologies I use</h3>

      {/* First row - faster scrolling */}
      <div className="w-full overflow-hidden py-2 mb-4">
        <div className="flex items-center gap-5 animate-infinite-scroll-fast">
          {duplicatedFirstRow.map((tech, index) => (
            <div
              key={`first-${tech.id}-${index}`}
              className="flex flex-col h-28 min-w-[120px] bg-zinc-200 border-zinc-300 rounded-md border-2 p-5 justify-center items-center gap-1"
            >
              <span>{tech.icon}</span>
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Second row - slower scrolling */}
      <div className="w-full overflow-hidden py-2">
        <div className="flex items-center gap-5 animate-infinite-scroll-slow-reverse">
          {duplicatedSecondRow.map((tech, index) => (
            <div
              key={`second-${tech.id}-${index}`}
              className="flex flex-col h-28 min-w-[120px] bg-zinc-200 border-zinc-300 rounded-md border-2 p-5 justify-center items-center gap-1"
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