import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout/Layout.js"
import IndexPage from "../components/IndexPage/IndexPage.js"

import languageSelector from "../inc/languageSelector.js"

export default function HomePage({ data, location }) {
  var language = languageSelector(location.pathname)

  return (
    <Layout
      lang={language}
      title={data.homeBanner.edges[0].node.frontmatter.title}
    >
      <IndexPage
        lang={language}
        banner={{
          title: data.homeBanner.edges[0].node.frontmatter.author,
          position: data.homeBanner.edges[0].node.frontmatter.position,
          buttonText: data.homeBanner.edges[0].node.frontmatter.buttonTextCTA,
          intro: data.homeBanner.edges[0].node.html,
        }}
      />
    </Layout>
  )
}

export const query = graphql`
  query {
    homeBanner: allMarkdownRemark(
      filter: { frontmatter: { path: { eq: "/en/banner" } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            author
            position
            buttonTextCTA
          }
          html
        }
      }
    }
  }
`
