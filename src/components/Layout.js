import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => (
  <div className="container mx-auto max-w-screen-lg h-screen flex flex-col font-mono">
    <Header />
    <div className="flex-grow">{children}</div>
    <Footer />
  </div>
);

export default Layout;
