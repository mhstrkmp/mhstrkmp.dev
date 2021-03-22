import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => (
  <div className="w-full h-full px-8 flex flex-col text-blueGray-900">
    <Header />
    <div className="container mx-auto max-w-screen-lg flex-grow">
      {children}
    </div>
    <Footer />
  </div>
);

export default Layout;
