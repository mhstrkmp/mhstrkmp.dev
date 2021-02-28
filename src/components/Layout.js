import React from "react";
import Header from "./Header";

const Layout = ({ children }) => (
  <div className="container w-full max-w-screen-lg mx-auto px-8 ">
    <Header />
    {children}
  </div>
);

export default Layout;
