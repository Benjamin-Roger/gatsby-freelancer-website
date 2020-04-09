import React from "react";
import { useStaticQuery, graphql } from 'gatsby';
import PrimaryButton from "../PrimaryButton/PrimaryButton.js";
import './Story.scss';
import TechSVG from './TechSVG.js'



function Story(props) {

	const data = useStaticQuery(graphql`
	query StoryQuery {
		story: storyJson {
		  section {
			title {
			  en
			  fr
			}
			intro {
				fr
				en
			  }
			buttonTextCTA {
			  fr
			  en
			}
		  }
		}
	  }
	  `);

	  const section = data.story.section;



	return (
		<section id="story" className="story">
			<div className="container story-grid">

				<div className="column">

					<h2 className="teal-wave" >{section.title[props.lang]}</h2>

					<div dangerouslySetInnerHTML={{ __html: section.intro[props.lang] }} />


					<PrimaryButton align="left" href="#contact">{section.buttonTextCTA[props.lang]}</PrimaryButton>

				</div>
				<div className="column picture">

					<TechSVG />

				</div>
			</div>


		</section>
	)

};




export default Story;