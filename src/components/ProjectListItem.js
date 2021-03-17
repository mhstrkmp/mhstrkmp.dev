import React from "react";
import _ from "lodash";

const ProjectListItem = ({ project }) => {
  return (
    <article className="relative inline-block flex flex-col justify-between py-6 px-4 text-gray-900 rounded-md outline-none group hover:bg-gray-100 hover:text-gray-700 focus:bg-gray-100 focus:shadow-sm focus:text-gray-700">
      {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="link to project"
        className="absolute top-0 bottom-0 left-0 right-0"
      ></a>
      <div className="relative z-10 space-x-4 flex flex-col md:flex-row justify-center items-center pointer-events-none">
        <img
          src="https://via.placeholder.com/200x150"
          height={150}
          width={200}
          alt=""
          className="object-cover rounded-md"
        />
        <div className="w-80 h-auto md:w-auto md:max-w-4 px-4 py-4">
          <h2 className="text-purple-800 text-center md:text-left font-bold pb-1">
            {project.title}
          </h2>
          <p className="text-left text-lg tracking-tight text-gray-800">
            {project.description}
          </p>
          <ul className="flex justify-center md:justify-start flex-wrap">
            {project.tags.map((tag, index) => {
              const tagName = _.kebabCase(tag);
              return (
                <li key={`project_tag${index}`} className="flex-none mt-2 mr-2">
                  <span
                    className={`inline-block px-2 py-1 text-white text-sm font-semibold rounded-md bg-purple-600 bg-${tagName}`}
                  >
                    {tag}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </article>
  );
};

export default ProjectListItem;
