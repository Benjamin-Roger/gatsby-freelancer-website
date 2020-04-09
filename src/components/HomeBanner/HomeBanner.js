import React from "react";
import Img from "gatsby-image";

import { useStaticQuery, graphql } from 'gatsby';

import PrimaryButton from "../PrimaryButton/PrimaryButton.js";
import SocialBar from "../SocialBar/SocialBar.js";
import './HomeBanner.scss';

import { Slide, Rotate } from 'react-awesome-reveal';





function HomeBannerComponent(props) {


	return (
		<section id="top" className="banner">
			<div className="container">

				<div className="banner-grid">
					<div className="column left">

						<Slide direction="left" cascade damping="0.5">
							<h1>{props.author ? props.author : "Benjamin Roger"}</h1>
							<p className="position">{props.position}</p>
						</Slide>

						<div dangerouslySetInnerHTML={{ __html: props.intro }} />

						<PrimaryButton href="#contact" >{props.buttonText}</PrimaryButton>

					</div>

					<div className="column right" >


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
		    bean:file(relativePath: { eq: "images/bg_picture.png" }) {
		      childImageSharp {
		        fluid {
		          ...GatsbyImageSharpFluid
		          presentationWidth
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
    `)


	return (
		<HomeBannerComponent
			title={props.title}
			position={props.position}
			intro={props.intro}
			buttonText={props.buttonText}
			image={{
				bean: data.bean.childImageSharp.fluid,
				cv: data.cv.childImageSharp.fluid
			}}
		/>
	)
}



export default HomeBanner;