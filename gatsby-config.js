/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: {
      fr: `Benjamin ROGER - Développeur Web freelance`,
      en: `Benjamin ROGER - Freelance web developer`,
    },
    siteUrl: `https://www.sapiowork.com`,
    description: {
      fr: `Je suis un développeur Web freelance spécialisé en front end. Prêts pour vos projets en React/NodeJS, Wagtail et Wordpress. Contactez-moi !`,
      en: `I am a freelance web developer, specialized in front end. Ready for a React/NodeJS, Wordpress or Wagtail project? Contact me!`,
    },
    author: "Benjamin Roger",
    captchaKey: "6LdsOuEUAAAAAMSpSbcCSnEdtoQVUM75Mz3peYY2",
    keywords:
      "react,reactJS,freelance,développeur,wagtail,wordpress,api paris,remote,france",
  },

  mapping: {
    "portfolioJson.projects.image.picture": `file (path : { regex : "/static/\\b/ })`,
  },

  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-json`,
    `gatsby-plugin-smoothscroll`,
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        custom: {
          families: ["iCiel"],
          urls: ["/fonts/fonts.css"],
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "data",
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "markdown-pages",
        path: `${__dirname}/src/markdown-pages/`,
      },
    },
    {
      resolve: "gatsby-plugin-i18n",
      options: {
        langKeyDefault: "fr",
        useLangKeyLayout: false,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-136006110-1",
        // this option places the tracking script into the head of the DOM
        head: true,
        // other options
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: `src/images/favicon.png`,
      },
    },
    // Add other plugins here
  ],
}
