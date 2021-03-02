import React from "react";
import { graphql } from "gatsby";
import PostListItem from "../components/PostListItem";

const tagTemplate = ({ pageContext, data }) => {
  const { tag } = pageContext;
  const { edges: posts, totalCount } = data.allMarkdownRemark;
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`;

  return (
    <main>
      <h1>{tagHeader}</h1>
      {posts.map(({ node: post }) => {
        return <PostListItem key={`post_item${post.id}`} post={post} />;
      })}
    </main>
  );
};

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
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

export default tagTemplate;
