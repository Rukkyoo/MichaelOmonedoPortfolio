import React from "react";

const Intro = () => {
  return (
    <div className="mt-10 flex flex-col items-center">
      <h1 className="text-4xl sm:text-6xl font-bold text-center">
        Hello there, I'm Michael Omonedo
      </h1>
      <p className="text-lg px-5.5 sm:text-2xl text-center mt-4 text-zinc-700">
        I am a fullstack developer (frontend heavy) who is passionate about
        crafting beautiful and functional web experiences. I specialize in
        building responsive and user-friendly interfaces.
      </p>
      <button className="bg-black text-white rounded-full py-2 px-7 mt-8 cursor-pointer">
        View my Projects
      </button>
    </div>
  );
};

export default Intro;
