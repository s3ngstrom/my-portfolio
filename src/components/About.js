import React from "react";

export default function About() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm{" "}
            <span className="font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              Stefanie
            </span>
            .
            <br className="lg:inline-block" /> I want to build accessible, visuably appealing apps.
          </h1>
          <p className="mb-8 leading-relaxed">
            I'm a June 2023 Bootcamp grad with years of prior experience in the
            Chicago fintech world, eager to parlay that experience into making
            a meaningful impact in my next role.
          </p>
          <div className="flex justify-center">
            <button
              onClick={() => scrollToSection("contact")}
              className="inline-flex text-white bg-purple-700 border-0 py-2 px-6 focus:outline-none hover:bg-purple-500 rounded text-lg"
            >
              Work With Me
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="ml-4 inline-flex text-gray-300 bg-gray-600 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              See My Past Work
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./pixel.png"
          />
        </div>
      </div>
    </section>
  );
}
