import React from "react";

const Hero = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center p-6 mx-4 space-y-4 md:mx-0 md:space-x-8 xl:p-12 md:space-y-0 md:flex-row ">
      <picture className="relative flex-none w-40 h-40 rounded-full shadow-xl md:h-44 md:w-44">
        <img
          className="absolute flex-none object-cover w-40 h-40 rounded-full md:h-44 md:w-44"
          src="https://via.placeholder.com/150"
          alt="Matthias Heisterkamp"
          width={176}
          height={176}
        />
      </picture>
      <div className="space-y-2">
        <h1>
          Hey, I&apos;m Matthias (
          <a
            className="text-indigo-500 hover:text-indigo-400"
            href="https://twitter.com/mhstrkmp"
            target="_blank"
            rel="noopener noreferrer"
          >
            @mhstrkmp
          </a>
          )
        </h1>
        <p className="text-2xl xl:text-3xl xl:leading-snug">
          I am a <strong className="font-bold">Web Developer</strong> from{" "}
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
          currently looking for new opportunities
        </p>
      </div>
    </div>
  );
};

export default Hero;
