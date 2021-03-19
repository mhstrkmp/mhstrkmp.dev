import React from "react";
import { Link } from "gatsby";
import _ from "lodash";
import classNames from "classnames";
import tagStyles from "../helpers/tagStyles";

const TagList = ({ tags }) => {
  return (
    <ul className="flex flex-wrap">
      {tags.map((tag, index) => {
        const tagName = _.kebabCase(tag);

        return (
          <li key={`post_tag${index}`} className="flex-none mt-2 mr-2">
            <Link
              to={`/tag/${tagName}`}
              className={classNames(
                "transform hover:scale-105 pointer-events-auto inline-block px-2 py-1 rounded-md text-sm font-semibold",
                tagStyles[tagName].bg,
                tagStyles[tagName].text
              )}
            >
              {tag}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default TagList;
