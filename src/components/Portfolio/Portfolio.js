import React from "react";
import { useStaticQuery, graphql } from 'gatsby';
import PrimaryButton from "../PrimaryButton/PrimaryButton.js";
import SecondaryButton from "../SecondaryButton/SecondaryButton.js";
import './Portfolio.scss';

import { Fade } from 'react-awesome-reveal';

function PortfolioCard(props) {

	var cardData = props.content;

	const readMore = {
		"fr": "Voir plus",
		"en": "Read more"
	}

	return (
		<div className="card">

			<div className="column card-wrapper">
				<img className="card-picture" title={cardData.title} alt="" src={cardData.image.href} />
			</div>

			<div className="column description">

				<h3>{cardData.category}</h3>

				<h4>{cardData.title[props.lang]}</h4>
				<p>{cardData.text[props.lang]}</p>

				{(cardData.href ? <SecondaryButton href={cardData.href}>{readMore[props.lang]}</SecondaryButton> : '')}
			</div>

		</div>

	)
}


function Portfolio(props) {


	const data = useStaticQuery(graphql`
	query PortfolioQuery {
		portfolio: portfolioJson {
		  section {
			title {
			  en
			  fr
			}
			buttonTextCTA {
			  fr
			  en
			}
		  }
		  projects {
			category
			title
			text {
			  fr
			  en
			}
			image {
			  href
			}

			href
		  }
		}
	  }
	  `);

	  const section = data.portfolio.section;
	  const projects = data.portfolio.projects;


	return (
		<section id="portfolio" className="portfolio">
			<div className="container">
				<h2 className="red-wave" >{section.title[props.lang]}</h2>


				<Fade direction="top" className="portfolio-grid" triggerOnce cascade>

					{projects.map((project,i) => <PortfolioCard key={i} lang={props.lang} content={project} />)}
		

				</Fade>


				<PrimaryButton align="center" href="#contact">{section.buttonTextCTA[props.lang]}</PrimaryButton>

			</div>


		</section>
	)

}

export default Portfolio;