import React from "react";
import { graphql } from "gatsby";
import PostListItem from "../components/PostListItem";

const BlogPage = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <main>
      {posts
        .filter((post) => post.node.frontmatter.title.length > 0)
        .map(({ node: post }) => {
          return (
            <>
              <PostListItem post={post} />
            </>
            /* 

            <article key={post.id}>
              <h1>
                <Link to={post.frontmatter.slug}>{post.frontmatter.title}</Link>
              </h1>
              <h2>{post.frontmatter.date}</h2>
              <p>{post.excerpt}</p>
            </article>

 */
          );
        })}
    </main>
  );
};

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
            description
            tags
          }
        }
      }
    }
  }
`;

export default BlogPage;
