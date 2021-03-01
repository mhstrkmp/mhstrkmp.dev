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
        <section>
          <div className="my-8 text-center space-y-2">
            <h1 className="font-semibold tracking-wide uppercase text-md xl:text-xl">
              Projects
            </h1>
            <h2 className="max-w-2xl text-xl text-gray-500 xl:text-xl lg:mx-auto">
              Here are some of my latest projects.
            </h2>
          </div>
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
