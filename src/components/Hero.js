import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Hero = () => {
  return (
    <div className="h-auto w-auto flex flex-col items-center justify-center p-2 md:p-6 mx-1 md:mx-4 my-0 md:my-40 space-y-4 md:mx-0 md:space-x-8 xl:p-12 md:space-y-0 md:flex-row ">
      <StaticImage
        className="relative flex-none w-40 h-40 rounded-full shadow-xl md:h-44 md:w-44 z-10"
        imgClassName="absolute flex-none w-40 h-40 rounded-full md:h-44 md:w-44 z-0"
        src="../images/matthias.jpeg"
        alt=""
        width={176}
        height={176}
        placeholder="blurred"
      />
      <div className="space-y-2">
        <h1 className="font-sans">
          Hey, I&apos;m Matthias (
          <a
            className="text-purple-800 hover:text-purple-700"
            href="https://twitter.com/mhstrkmp"
            target="_blank"
            rel="noopener noreferrer"
          >
            @mhstrkmp
          </a>
          )
        </h1>
        <p className="text-2xl xl:text-3xl xl:leading-snug">
          <strong className="font-bold">Web Developer</strong> from{" "}
          <span aria-label="Germany">
            <span>Germany</span>
          </span>{" "}
          creating websites &amp; apps using
          <a
            href="https://reactjs.org/"
            className="font-semibold text-indigo-600 hover:text-indigo-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            React
          </a>{" "}
          and the{" "}
          <a
            href="https://jamstack.org/"
            className="font-semibold text-indigo-600 hover:text-indigo-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Jamstack
          </a>
        </p>
      </div>
    </div>
  );
};

export default Hero;
