import React from "react";
import { Link } from "gatsby";

const Header = () => {
  return (
    <div className="container w-full mx-auto">
      <header className="py-6 md:py-3 flex flex-col content-center items-center md:flex-row md:justify-between">
        <div>
          <Link to="/">
            <h1>mhstrkmp</h1>
          </Link>
        </div>
        <div>
          <ul className="flex">
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li className="px-3">
              <Link to="/about">About me</Link>
            </li>
            <li>
              <Link to="/resources">Resources</Link>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
