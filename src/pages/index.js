import React from "react";
import Hero from "../components/Hero";
import ProjectListItem from "../components/ProjectListItem";
import projects from "../content/Projects.json";

const IndexPage = () => {
  return (
    <>
      <main>
        <section>
          <Hero />
        </section>
        <section className="mt-8 mb-12 text-center space-y-2">
          <h1 className="font-semibold tracking-wide uppercase text-2xl xl:text-3xl">
            Projects
          </h1>
          <h2 className="max-w-2xl text-xl text-gray-500 xl:text-xl lg:mx-auto">
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
