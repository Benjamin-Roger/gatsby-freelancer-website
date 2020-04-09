import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";


function SEO({ description, lang, meta, image: metaImage_org, title, pathname }) {


  // Get the data for SEO
  const data = useStaticQuery(
    graphql`
  {
    SEO: site {
      siteMetadata {
        author
        captchaKey
        description {
          fr
          en
        }
        keywords
        siteUrl
        title {
          fr
          en
        }
      }
    }

    cv:file(relativePath: { eq: "images/CV_picture.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }


  }
`
  )

  const SEOData = data.SEO.siteMetadata;

  const metaDescription = description || SEOData.description[lang];

  const metaImage = metaImage_org || data.cv.childImageSharp.fluid;

  const image = metaImage && metaImage.src
    ? `${SEOData.siteUrl}${metaImage.src}`
    : null
  const canonical = pathname
    ? `${SEOData.siteUrl}${pathname}`
    : null
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${SEOData.title[lang]}`}
      script={[{
        src: "https://www.google.com/recaptcha/api.js?render=" + SEOData.captchaKey,
        SameSite: "None",
        Secure: true
      }]}
      link={
        canonical
          ? [
            {
              rel: "canonical",
              href: canonical,
            },
          ]
          : []
      }
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: "keywords",
          content: SEOData.keywords,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:creator`,
          content: SEOData.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]
        .concat(
          metaImage
            ? [
              {
                property: "og:image",
                content: image,
              },
              {
                property: "og:image:width",
                content: metaImage.width,
              },
              {
                property: "og:image:height",
                content: metaImage.height,
              },
              {
                name: "twitter:card",
                content: "summary_large_image",
              },
            ]
            : [
              {
                name: "twitter:card",
                content: "summary",
              },
            ]
        )
        .concat(meta)}
    />
  )
}


SEO.defaultProps = {
  lang: `fr`,
  meta: [],
  description: ``,
}


SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
  }),
  pathname: PropTypes.string,
}
export default SEO