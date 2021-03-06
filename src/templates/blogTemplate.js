import React from "react";
import { graphql } from "gatsby";
import Seo from "../components/Seo";

export default function Template({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    <>
      <Seo
        title={frontmatter.title}
        description={frontmatter.description}
        article={true}
      />
      <main className="flex justify-center items-center mt-6">
        <article className="container prose prose-purple">
          <span>
            <time dateTime={frontmatter.date}>{frontmatter.date}</time>
          </span>
          <h1>{frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </article>
      </main>
    </>
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
        description
      }
    }
  }
`;
