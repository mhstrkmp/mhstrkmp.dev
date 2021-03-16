import React from "react";
import "./src/styles/global.css";
import Layout from "./src/components/Layout";
require("prismjs/themes/prism-okaidia.css");

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}
