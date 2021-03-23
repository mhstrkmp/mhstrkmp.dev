import React from "react";
import { graphql } from "gatsby";
import PostListItem from "../components/PostListItem";
import SEO from "../components/SEO";

const BlogPage = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <>
      <SEO title="Blog" />
      <main>
        {posts
          .filter((post) => post.node.frontmatter.title.length > 0)
          .map(({ node: post }) => {
            return <PostListItem key={`post_item${post.id}`} post={post} />;
          })}
      </main>
    </>
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
