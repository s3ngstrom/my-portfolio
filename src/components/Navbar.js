import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <button
          onClick={() => scrollToSection("about")}
          className="title-font hover:text-pink-500 hover:underline font-medium text-white mb-4 md:mb-0 ml-3 text-xl focus:outline-none flex-shrink-0"
        >
          Stefanie Engstrom
        </button>
        <nav className="md:flex md:items-center md:w-auto md:ml-auto flex flex-wrap md:ml-4">
          <button
            onClick={() => scrollToSection("projects")}
            className="mr-5 hover:text-pink-500 hover:underline focus:outline-none whitespace-nowrap"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className="mr-5 hover:text-pink-500 hover:underline focus:outline-none whitespace-nowrap"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection("experience")}
            className="mr-5 hover:text-pink-500 hover:underline focus:outline-none whitespace-nowrap"
          >
            Experience
          </button>
           <button
          onClick={() => scrollToSection("contact")}
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-pink-700 rounded text-base"
        >
          Hire Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </button>
        </nav>
       
      </div>
    </header>
  );
}
