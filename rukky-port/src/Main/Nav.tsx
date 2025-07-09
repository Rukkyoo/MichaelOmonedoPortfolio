import {  FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { type RefObject } from "react";
import React from "react";

interface NavProps {
  scrollToSection: (ref: RefObject<HTMLDivElement | null>) => void;
  refs: {
    introRef: RefObject<HTMLDivElement | null>;
    techRef: RefObject<HTMLDivElement | null>;
    projectRef: RefObject<HTMLDivElement | null>;
    experienceRef: RefObject<HTMLDivElement | null>;
    contactRef: RefObject<HTMLDivElement | null>;
  };
}

const Nav = ({ scrollToSection, refs }: NavProps) => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <div className="flex z-50 sticky top-0 flex-row justify-between bg-zinc-200 border-b-zinc-300 border-b-1 h-20">
      <div className="flex font-bold justify-between gap-4 items-center text-black p-4">
        Rukkyoo{" "}
        <span className="cursor-pointer hover:text-gray-500">
        </span>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex justify-center items-center space-x-4 p-4">
        <ul className="flex justify-center items-center space-x-4">
          <li
            onClick={() => scrollToSection(refs.introRef)}
            className="hover:text-gray-800 cursor-pointer text-zinc-700"
          >
            Home
          </li>
          <li
            onClick={() => scrollToSection(refs.techRef)}
            className="hover:text-gray-800 cursor-pointer text-zinc-700"
          >
            Technologies
          </li>
          <li
            onClick={() => scrollToSection(refs.projectRef)}
            className="hover:text-gray-800 cursor-pointer text-zinc-700"
          >
            Projects
          </li>
          <li
            onClick={() => scrollToSection(refs.experienceRef)}
            className="hover:text-gray-800 cursor-pointer text-zinc-700"
          >
            Experience
          </li>
          <li
            onClick={() => scrollToSection(refs.contactRef)}
            className="hover:text-gray-800 cursor-pointer text-zinc-700"
          >
            Contact
          </li>
        </ul>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex justify-center items-center p-4">
        <button
          className="cursor-pointer hover:text-gray-500"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FaBars />
        </button>
        {menuOpen && (
          <div className="fixed top-0 left-0 w-full bg-zinc-200 border-b-zinc-300 border-b-1 p-2">
            <button
              className="absolute top-4 right-4 cursor-pointer font-extrabold hover:text-gray-500"
              onClick={() => setMenuOpen(false)}
            >
              <IoMdClose size={25} />
            </button>
            <ul className="flex flex-col justify-center items-center space-y-4 mt-4">
              <li
                onClick={() => {
                  scrollToSection(refs.introRef);
                  setMenuOpen(false);
                }}
                className="hover:text-gray-800 cursor-pointer text-zinc-700"
              >
                Home
              </li>
              <li
                onClick={() => {
                  scrollToSection(refs.techRef);
                  setMenuOpen(false);
                }}
                className="hover:text-gray-800 cursor-pointer text-zinc-700"
              >
                Technologies
              </li>
              <li
                onClick={() => {
                  scrollToSection(refs.projectRef);
                  setMenuOpen(false);
                }}
                className="hover:text-gray-800 cursor-pointer text-zinc-700"
              >
                Projects
              </li>
              <li
                onClick={() => {
                  scrollToSection(refs.experienceRef);
                  setMenuOpen(false);
                }}
                className="hover:text-gray-800 cursor-pointer text-zinc-700"
              >
                Experience
              </li>
              <li
                onClick={() => {
                  scrollToSection(refs.contactRef);
                  setMenuOpen(false);
                }}
                className="hover:text-gray-800 cursor-pointer text-zinc-700"
              >
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
