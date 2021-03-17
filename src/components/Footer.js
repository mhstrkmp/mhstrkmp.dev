import React from "react";

const today = new Date();

const Footer = () => {
  return (
    <footer className="pt-8 mt-12">
      <div className="container text-center font-mono text-purple-800 w-full mx-auto">
        <div className="flex flex-wrap justify-center space-x-4">
          <a
            className="px-4 py-2 font-semibold transform hover:scale-105 hover:text-purple-600"
            href="https://twitter.com/mhstrkmp"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            className="px-4 py-2 font-semibold transform hover:scale-105 hover:text-purple-600"
            href="https://github.com/mhstrkmp"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            className="px-4 py-2 font-semibold transform hover:scale-105 hover:text-purple-600"
            href="https://www.linkedin.com/in/mhstrkmp"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
        <div className="container text-center text-sm text-purple-200 py-4">
          <span>&copy; {today.getFullYear()} Matthias Heisterkamp</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
