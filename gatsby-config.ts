import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: "El Yaakoubi Mohammed",
    description: "Portfolio",
    image: "/",
    author: "El Yaakoubi Mohammed",
    siteUrl: "https://yaakoubi.com",
    fbid: "100081044115071",
  },
  plugins: [
    "gatsby-plugin-emotion",
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `#37DF9E`,
        // Disable the loading spinner.
        showSpinner: false,
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: { placeholder: "blurred" },
      },
    }
]
};

export default config;
