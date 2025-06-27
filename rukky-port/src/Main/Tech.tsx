import React from "react";
import { FaHtml5 } from "react-icons/fa";

const Tech = () => {
  return (
    <div className="mt-10 flex flex-col items-center">
      <h3 className="text-2xl font-bold">Technologies I use</h3>
      {/* Technology Card */}
      <div className="flex flex-col bg-zinc-200 border-b-gray-950 border-2 p-5 justify-center items-center gap-1 mt-5">
        <FaHtml5 size={60} />
        <span>HTML</span>
      </div>
    </div>
  );
};

export default Tech;
