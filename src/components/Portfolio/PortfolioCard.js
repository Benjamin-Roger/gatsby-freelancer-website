import React from "react";
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

				<h4>{cardData.title}</h4>
				<p>{cardData.text[props.lang]}</p>

				{(cardData.href ? <SecondaryButton href={cardData.href}>{readMore[props.lang]}</SecondaryButton> : '')}
			</div>

		</div>

	)
}



export default PortfolioCard;