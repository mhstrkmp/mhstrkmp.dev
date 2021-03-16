import React from "react";
import { Link } from "gatsby";

const Header = () => {
  return (
    <div className="container w-full mx-auto">
      <header className="font-mono text-purple-800 space-y-2 py-6 flex flex-col content-center items-center mt-2 md:text-lg md:flex-row md:justify-between md:py-3 md:mb-12 ">
        <div className="tracking-wide capitalize">
          <Link to="/" className="hover:text-purple-700">
            <h1>{"<mhstrkmp />"}</h1>
          </Link>
        </div>
        <div>
          <ul className="flex space-x-4 uppercase">
            <li>
              <Link to="/blog" className="hover:text-purple-700">
                Blog
              </Link>
            </li>
            <li className="px-3">
              <Link to="/about" className="hover:text-purple-700">
                About me
              </Link>
            </li>
            <li>
              <Link to="/resources" className="hover:text-purple-700">
                Resources
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
