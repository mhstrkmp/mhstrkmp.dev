import React, { Fragment } from "react";
import resources from "../content/Resources.json";
import Seo from "../components/Seo";
import ResourceItem from "../components/ResourceItem";

const ResourcesPage = () => {
  const categories = Object.keys(resources);
  return (
    <>
      <Seo title="Resources" article={true} />
      <main className="flex justify-center items-center mt-6">
        <article className="container">
          <h1 className="text-center text-purple-800 font-semibold tracking-wide uppercase text-2xl xl:text-3xl">
            Resources
          </h1>
          <p className="text-justify md:text-center">
            Some tools and resources I'd like to share with you.
          </p>
          {categories.map((category, index) => {
            return (
              <Fragment key={`${category}_${index}`}>
                <h2 className="text-xl text-purple-800 capitalize font-mono pb-1 pt-6">
                  {category}
                </h2>
                <ResourceItem item={resources[category]} />
              </Fragment>
            );
          })}
        </article>
      </main>
    </>
  );
};

export default ResourcesPage;
