const Intro = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div  className="mt-10 flex flex-col items-center lg:mb-8">
      <h1 className="text-4xl sm:text-6xl font-bold text-center lg:mt-10">
        Hello there 👋, I'm Michael{" "}
        <span className="text-gray-500">Omonedo</span>
      </h1>
      <p className="text-lg px-5.5 sm:text-2xl text-center mt-4 text-zinc-700">
        I am a fullstack developer (frontend heavy) who is passionate about
        crafting beautiful and functional web experiences. I specialize in
        building responsive and user-friendly interfaces.
      </p>
      <button
        onClick={scrollToProjects}
        className="bg-black text-white rounded-full py-2 px-7 mt-8 cursor-pointer hover:bg-gray-700 transition duration-300 ease-in-out"
      >
        View my Projects
      </button>
    </div>
  );
};

export default Intro;
