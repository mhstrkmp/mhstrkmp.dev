module.exports = {
  siteMetadata: {
    siteUrl: "https://mhstrkmp.dev",
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-sitemap",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/content/posts`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://mhstrkmp.dev",
        sitemap: "https://mhstrkmp.dev/sitemap.xml",
        env: {
          development: {
            policy: [{ userAgent: "*", disallow: ["/"] }],
          },
          production: {
            policy: [{ userAgent: "*", disallow: "/" }],
          },
        },
      },
    },
  ],
};
