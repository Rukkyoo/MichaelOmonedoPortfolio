import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { FaSass } from "react-icons/fa";

const Project = () => {
  return (
    <div className="mt-10 flex flex-col items-center">
      <h3 className="text-2xl font-bold mb-8">Projects</h3>
      <div className="flex flex-col">
        {/* Projects Card */}

        <div className="bg-zinc-200 border-zinc-300 rounded-md border-2 p-2 mx-4 mb-4">
          <h4 className="font-bold">Keferoma</h4>
          <p className=" mb-2 text-zinc-500">
            A simple e-commerce platform used for selling premium soya oil,
            utilizing dummy prices.
          </p>
          <p className=" mb-2 flex flex-row items-center gap-2">
            Technologies Used:
            <span>
              <FaReact />
            </span>
            <span>
              <RiNextjsFill />
            </span>
            <span>
              <FaSass />
            </span>
          </p>
          <div className="flex flex-row gap-4.5">
            <p className="font-bold">
              {" "}
              <a href="">Live Demo</a>{" "}
            </p>
            <p className="font-bold">
              <a href="">Repository</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
