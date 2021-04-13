import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import _ from "lodash";
import classNames from "classnames";
import tagStyles from "../helpers/tagStyles";

const ProjectListItem = ({ project }) => {
  const data = useStaticQuery(
    graphql`
      query ProjectImageQuery {
        lifeAheadImage: file(relativePath: { eq: "life-ahead.png" }) {
          childImageSharp {
            gatsbyImageData(width: 200, placeholder: BLURRED)
          }
        }
        blueCollarRocketImage: file(
          relativePath: { eq: "blue-collar-rocket.png" }
        ) {
          childImageSharp {
            gatsbyImageData(width: 200, placeholder: BLURRED)
          }
        }
        thisWebsiteImage: file(relativePath: { eq: "mhstrkmp-website.png" }) {
          childImageSharp {
            gatsbyImageData(width: 200, placeholder: BLURRED)
          }
        }
        muenzerImage: file(relativePath: { eq: "muenzer.png" }) {
          childImageSharp {
            gatsbyImageData(width: 200, placeholder: BLURRED)
          }
        }
      }
    `
  );
  const image = getImage(data[project.imgQuery]);

  return (
    <article className="mx-auto relative inline-block flex flex-col justify-between py-6 px-4 text-gray-900 rounded-md outline-none group hover:bg-purple-50 hover:text-gray-700 focus:bg-purple-50 focus:shadow-sm focus:text-gray-700">
      {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="link to project"
        className="absolute top-0 bottom-0 left-0 right-0"
      ></a>
      <div className="relative z-10 md:space-x-4 flex flex-col md:flex-row justify-center items-center pointer-events-none">
        <GatsbyImage
          image={image}
          alt=""
          width={200}
          height={150}
          imgClassName="z-0"
          className="rounded-md shadow-xl z-10"
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
                    className={classNames(
                      "pointer-events-none inline-block px-2 py-1 rounded-md text-sm font-semibold",
                      tagStyles[tagName].bg,
                      tagStyles[tagName].text
                    )}
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
