const Experience = () => {
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

  return (
    <div id="experience" className="mt-10 flex flex-col items-center">
      <h3 className="text-2xl font-bold mb-8  lg:text-4xl">Experience</h3>
      <div className="w-full max-w-4xl">
        {experienceData.map((exp) => (
          <div
            key={exp.id}
            className="bg-zinc-200 border-zinc-300 rounded-md border-2 p-4 mx-4 mb-4"
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
                  className="text-blue-600 hover:underline"
                >
                  {exp.siteText}
                </a>
              )}
            </div>
            <p className="mb-2 text-sm text-zinc-600">Duration: {exp.duration}</p>
            
            <div className="my-2">
              <span className="font-medium">Technologies: </span>
              <span className="text-zinc-600">
                {exp.technologies.join(", ")}
              </span>
            </div>

            <ul className="text-zinc-500 list-disc list-inside space-y-1 mt-2">
              {exp.description.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;