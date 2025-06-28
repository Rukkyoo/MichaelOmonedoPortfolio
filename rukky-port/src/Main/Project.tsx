import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaSass } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";

const Project = () => {
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

  return (
    <div className="mt-20 flex flex-col items-center">
      <h3 className="text-2xl font-bold mb-8 lg:text-4xl">Projects</h3>
      <div className="flex flex-col">
        {projectInfo.map((project) => (
          <div 
            key={project.id}
            className="bg-zinc-200 border-zinc-300 rounded-md border-2 p-2 mx-4 mb-4"
          >
            <h4 className="font-bold mb-2">{project.name}</h4>
            <p className="mb-2 text-zinc-500">
              {project.desc}
            </p>
            <p className="mb-2 flex flex-row items-center gap-2">
              Technologies Used:
              {project.technology.map((tech, index) => (
                <span key={index}>{tech}</span>
              ))}
            </p>
            <div className="flex flex-row gap-4.5">
              {project.demo && (
                <p className="font-bold">
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    Demo
                  </a>
                </p>
              )}
              <p className="font-bold">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  Github
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;