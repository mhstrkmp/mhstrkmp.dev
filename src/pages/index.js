import React from "react";
import Hero from "../components/Hero";
import ProjectListItem from "../components/ProjectListItem";
import Seo from "../components/Seo";
import projects from "../content/Projects.json";

const IndexPage = () => {
  return (
    <>
      <Seo />
      <main>
        <section>
          <Hero />
        </section>
        <section className="mt-8 mb-12 space-y-2 text-center">
          <h1 className="text-purple-800 font-semibold tracking-wide uppercase text-2xl xl:text-3xl">
            Projects
          </h1>
          <h2 className="max-w-2xl text-xl text-gray-600 xl:text-xl mx-auto pb-6">
            Some projects I worked on recently.
          </h2>
          {projects.content.map((project, index) => {
            return (
              <ProjectListItem
                key={`project_item_${index}`}
                project={project}
              />
            );
          })}
        </section>
      </main>
    </>
  );
};

export default IndexPage;
