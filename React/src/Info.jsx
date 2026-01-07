import myPhoto from "/my-photo.png";
import CV from "/my-CV.pdf";
import React, { useState } from "react";
import { motion } from "framer-motion";
export default function Info() {
  const myData = {
    name: "Oleh Zavediia",
    status: "IT Student",
    description:
      "Hello! I am a computer science student studying at I am interested in the website development process, " +
      "so I am actively learning FrontEnd. I am looking for an opportunity to use my knowledge in real-world projects. " +
      "My goal is to get a job at an IT company where I can learn from experienced professionals and make my contribution " +
      "to the development of web products.",
  };
  const [isExpanded, setIsExpanded] = useState(false);
  const textLimit = 150;
  return (
    <section
      id="info"
      className="info-section lg:mx-10 lg:px-6 lg:py-12 mb-4 lg:mb-12 flex flex-col md:flex-row items-center
     bg-white dark:bg-gray-800 rounded-tl-lg shadow-xl overflow-hidden p-4 md:p-8"
    >
      <div className="md:w-1/3 mb-3 lg:mb-6 md:mb-0 md:mr-8">
        <img
          src={myPhoto}
          alt="My Photo"
          className="rounded-full w-48 h-48 md:w-64 md:h-64 mx-auto object-cover 
        border-4 border-emerald-700 dark:border-emerald-500"
        />
      </div>
      <div className="md:w-2/3 px-3 text-center md:text-left">
        <h1 className="text-4xl font-bold mb-2">{myData.name}</h1>
        <p className="text-sm md:text-xl text-emerald-700 dark:text-emerald-500 font-medium mb-4">
          {myData.status}
        </p>
        <p className="info-text lg:text-lg mb-6 text-justify leading-relaxed">
          <span className="block md:block lg:hidden">
            {isExpanded ? myData.description : myData.description.substring(0, textLimit) + "..."}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mx-2 z-10 dark:bg-white/70 bg-gray-800/50 rounded-full p-1
            shadow-md hover:bg-white transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-5 w-5 transition-transform duration-300 ${isExpanded ? "rotate-90" : "-rotate-90"
                  }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          </span>
          <span className="hidden lg:block">{myData.description}</span>
        </p>
        <a
          href={CV}
          className="inline-block bg-emerald-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg
        transition-transform transform hover:scale-105 hover:bg-emerald-700"
          target="_blank"
        >
          Open resume in PDF
        </a>
      </div>
    </section>
  );
}
