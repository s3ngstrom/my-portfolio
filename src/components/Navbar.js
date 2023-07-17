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
          className="title-font hover:text-pink-500 hover:underline font-medium text-white mb-4 md:mb-0 ml-3 text-xl focus:outline-none"
        >
          Stefanie Engstrom
        </button>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">
          <button
            onClick={() => scrollToSection("projects")}
            className="mr-5 hover:text-pink-500 hover:underline focus:outline-none"
          >
            Past Work
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className="mr-5 hover:text-pink-500 hover:underline focus:outline-none"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection("testimonials")}
            className="mr-5 hover:text-pink-500 hover:underline focus:outline-none"
          >
            Testimonials
          </button>
        </nav>
        <button
          onClick={() => scrollToSection("contact")}
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-pink-700 rounded text-base mt-4 md:mt-0"
        >
          Hire Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </button>
      </div>
    </header>
  );
}
