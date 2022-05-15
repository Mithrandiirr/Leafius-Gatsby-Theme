import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `portfolio`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    "gatsby-plugin-emotion",
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: { placeholder: "blurred" },
      },
    }
]
};

export default config;
