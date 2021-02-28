import React from "react";
import "./src/styles/global.css";
import Layout from "./src/components/Layout";

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}
