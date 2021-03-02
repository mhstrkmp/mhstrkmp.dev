import React from "react";
import { graphql } from "gatsby";

export default function Template({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    <main>
      <article className="prose">
        <h1>{frontmatter.title}</h1>
        <h2>
          <time dateTime={frontmatter.date}>{frontmatter.date}</time>
        </h2>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </article>
    </main>
  );
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`;
