import React from "react"
import Img from "gatsby-image"

import { useStaticQuery } from "gatsby"

import PrimaryButton from "../PrimaryButton/PrimaryButton.js"
import SocialBar from "../SocialBar/SocialBar.js"
import "./HomeBanner.scss"

import { Slide, Rotate } from "react-awesome-reveal"

function HomeBannerComponent(props) {
  return (
    <section id="top" className="banner">
      <div className="container">
        <div className="banner-grid">
          <div className="column left">
            <Slide
              className="opacity-breaker"
              direction="left"
              cascade
              damping="0.3"
            >
              <h1>{props.author ? props.author : "Benjamin Roger"}</h1>
              <p className="position">{props.position}</p>
            </Slide>

            <div dangerouslySetInnerHTML={{ __html: props.intro }} />

            <PrimaryButton href="#contact">{props.buttonText}</PrimaryButton>
          </div>

          <div className="column right">
            <div className="picture-wrapper">
              <Rotate>
                <Img className="bean" alt="" fluid={props.image.bean} />
              </Rotate>

              <Img className="CV-picture" alt="CV" fluid={props.image.cv} />
            </div>
            <div>
              <SocialBar />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// These queries fetches the CV picture and background, optimized with gatsby-image

function HomeBanner(props) {
  const data = useStaticQuery(graphql`
    query BannerPictureQuery {
      bean: imageSharp(fluid: { originalName: { eq: "bg_picture.png" } }) {
        fluid(maxWidth: 500, quality: 10) {
          presentationWidth
          ...GatsbyImageSharpFluid
        }
      }

      cv: imageSharp(fluid: { originalName: { eq: "CV_picture.png" } }) {
        fluid(maxWidth: 500, quality: 10) {
          presentationWidth
          ...GatsbyImageSharpFluid
        }
      }
    }
  `)

  return (
    <HomeBannerComponent
      title={props.title}
      position={props.position}
      intro={props.intro}
      buttonText={props.buttonText}
      image={{
        bean: data.bean.fluid,
        cv: data.cv.fluid,
      }}
    />
  )
}

export default HomeBanner
