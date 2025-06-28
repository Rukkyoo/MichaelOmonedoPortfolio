import React from "react";
import { FaRegMoon, FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const Nav = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <div className="flex sticky top-0 flex-row justify-between bg-zinc-200 border-b-zinc-300 border-b-1">
      <div className="flex font-bold justify-between gap-4 items-center text-black p-4">
        Rukkyoo{" "}
        <span className="cursor-pointer hover:text-gray-500">
          <FaRegMoon />
        </span>
      </div>
      <div className="hidden md:flex justify-center items-center space-x-4 p-4">
        <ul className="flex justify-center items-center space-x-4">
          <li className="hover:text-gray-800 cursor-pointer text-zinc-700">
            Home
          </li>
          <li className="hover:text-gray-800 cursor-pointer text-zinc-700">
            Technologies
          </li>
          <li className="hover:text-gray-800 cursor-pointer text-zinc-700">
            About
          </li>
          <li className="hover:text-gray-800 cursor-pointer text-zinc-700">
            Projects
          </li>
          <li className="hover:text-gray-800 cursor-pointer text-zinc-700">
            Contact
          </li>
        </ul>
      </div>
      <div className="md:hidden flex justify-center items-center p-4">
        <button
          className="cursor-pointer hover:text-gray-500"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FaBars />
        </button>
        {menuOpen && (
          <div className="fixed top-0 left-0 w-full bg-zinc-200 border-b-zinc-300 border-b-1 p-4">
            <button
              className="absolute top-4 right-4 cursor-pointer font-extrabold hover:text-gray-500"
              onClick={() => setMenuOpen(false)}
            >
              <IoMdClose size={25}/>
            </button>
            <ul className="flex flex-col justify-center items-center space-y-4">
              <li className="hover:text-gray-800 cursor-pointer text-zinc-700">
                Home
              </li>
              <li className="hover:text-gray-800 cursor-pointer text-zinc-700">
                Technologies
              </li>
              <li className="hover:text-gray-800 cursor-pointer text-zinc-700">
                About
              </li>
              <li className="hover:text-gray-800 cursor-pointer text-zinc-700">
                Projects
              </li>
              <li className="hover:text-gray-800 cursor-pointer text-zinc-700">
                Contact
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
