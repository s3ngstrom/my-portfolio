import React from "react";
import { TerminalIcon, UsersIcon } from "@heroicons/react/solid";
import { jobs } from "../data";

export default function Experience() {
  return (
    <section
      id="experience"
      className="text-white bg-gradient-to-b from-indigo-900 to-purple-600 body-font"
    >
      <div className="container px-5 py-10 mx-auto text-center">
        <UsersIcon className="text-pink-600 w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          Relevant Experience
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          In addition to my recent bootcamp at Thinkful, I have years of recent
          experience in the world of Chicago fintech, and have been a central
          player on the technology teams at various companies since 2016.
          <p className="font-bold">
            Looking for more info? Connect with me on{" "}
            <a
              href="https://linkedin.com/in/stefanie-engstrom"
              className="text-purple-300 leading-relaxed hover:underline hover:text-purple-100"
            >
              LinkedIn!
            </a>
          </p>
        </p>
        <div className="flex flex-wrap m-4">
          {jobs.map((job) => (
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                <TerminalIcon className="text-pink-600 block w-8 text-gray-500 mb-4" />
                <span className="flex-grow flex flex-col pl-4">
                  <span className="title-font font-bold font-medium text-white text-pink-600">
                    {job.title}
                  </span>
                  <span className="text-gray-200 text-sm uppercase">
                    {job.company}
                  </span>{" "}
                  <span className="text-gray-400 text-sm uppercase">
                    {job.range}
                  </span>
                </span>
                <p className="leading-relaxed mb-6">{job.description}</p>
                <p className="leading-relaxed mb-6">{job.description2}</p>
                <div className="inline-flex items-center">
                  <img
                    alt="job"
                    src={job.image}
                    className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
