import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section
      id="projects"
      className="text-white bg-gradient-to-b from-indigo-900 to-purple-600 body-font"
    >
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="text-pink-600 mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Apps I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            In addition to building this portfolio site, I've completed numerous
            in-depth projects as part of my bootcamp program. Here you'll find a
            selection of those apps, deployed and hosted through various service
            providers. <br />
            I'm in the process of refactoring some of these to provide cleaner
            code and apply stronger visual styling - pardon my dust!
            <br />
            <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              Current Personal Project:
            </span>
            &nbsp;A custom Pokédex - demo coming soon!
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="sm:w-1/2 w-100 p-4"
            >
              <div className="flex relative h-80">
                <img
                  alt="gallery"
                  className="border-4 border-purple-900 absolute inset-0 w-full h-full object-cover object-center"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-90 h-80 w-250">
                  <h2 className="tracking-widest text-sm title-font font-medium text-pink-600 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
