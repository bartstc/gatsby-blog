const dotenv = require('dotenv');
if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
};

module.exports = {
  siteMetadata: {
    title: `M`,
    subtitle: `Travel, lifestyle, architecture and more.`,
    author: `Bart`,
    description: `Simple blog exmaple using Gatsby & Contentful`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets`,
        name: `assets`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `M Blog`,
        short_name: `M Blog`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#000`,
        display: `minimal-ui`,
        icon: `src/assets/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-contentful`, // after adding plugin gatsby-source-contentful we have access to the contentful data via graphQL
      options: {
        spaceId: `t5uhlt7prm98`,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    },
    `@contentful/gatsby-transformer-contentful-richtext`, // allows to convert contentful data (content) into html
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layout.js`)
      }
    }
  ],
}

