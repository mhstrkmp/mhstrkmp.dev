import React from "react";
import _ from "lodash";
import { Link } from "gatsby";

const PostListItem = ({ post }) => {
  return (
    <article className="relative inline-block p-4 text-gray-900 rounded-md outline-none group hover:bg-gray-100 hover:text-gray-700 focus:bg-gray-100 focus:shadow-sm focus:text-gray-700">
      {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
      <Link
        to={post.frontmatter.slug}
        aria-label={`link to blog post ${post.frontmatter.title}`}
        className="absolute top-0 bottom-0 left-0 right-0"
      ></Link>
      <div className="relative z-10 space-y-4 pointer-events-none xl:space-y-0 xl:grid xl:grid-cols-4 xl:col-gap-6">
        <div className="flex items-center pr-4 xl:space-x-6 xl:pb-0 xl:col-span-3">
          <div className="space-y-2">
            <h2>{post.frontmatter.title}</h2>
            <p className="text-lg tracking-tight text-gray-800 xl:text-lg xl:leading-8">
              {post.frontmatter.description}
            </p>
          </div>
        </div>
        <div className="flex items-center pt-4 space-x-6 border-t border-gray-200 xl:pl-4 xl:pt-0 xl:space-x-0 xl:border-l xl:border-t-0">
          <div>
            <dl>
              <dt className="sr-only">Published on</dt>
              <dd className="text-base font-small leading-4">
                <time dateTime={post.frontmatter.date}>
                  {post.frontmatter.date}
                </time>
              </dd>
            </dl>
            <ul className="flex flex-wrap">
              {post.frontmatter.tags.map((tag, index) => {
                return (
                  <li key={`post_tag${index}`} className="flex-none mt-2 mr-2">
                    <Link
                      to={`/tag/${_.kebabCase(tag)}`}
                      className="pointer-events-auto inline-block px-2 py-1 text-sm font-semibold"
                    >
                      #{tag}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
};

export default PostListItem;
