import React from "react";
import { useStaticQuery, graphql } from 'gatsby';

import SecondaryButton from "../SecondaryButton/SecondaryButton.js";
import SocialBar from "../SocialBar/SocialBar.js";
import './Footer.scss';


function Footer(props) {

	const data = useStaticQuery(graphql`
	query FooterQuery {
		footer: footerJson {
			footer_menu {
			  title{
				  fr
				  en
			  }
			  links {
				name{
				  fr
				  en
			  }
				href
			  }
			}
			social {
			  title {
				  fr
				  en
			  }
			}

			contact {
				fr
				en
			}
		  }

	  

	}
`);

	const social = data.footer.social;
	const footer_menu = data.footer.footer_menu;
	const contact = data.footer.contact;

	

    return (
        <footer className="footer">
	<div className="container">

	<div className="footer-grid">

		<div className="sitemap column"> 

			<h3>{footer_menu.title[props.lang]}</h3>

			<ul>
				{footer_menu.links.map(link => <li key={link.name[props.lang]}><SecondaryButton href={link.href} title={link.name[props.lang]}>{link.name[props.lang]}</SecondaryButton></li>)}
			</ul>

		</div>

		<div className="social column">

			<h3>{social.title[props.lang]}</h3>

			<SocialBar />

		</div>

		<div className="footer-contact column">

			<div dangerouslySetInnerHTML={{ __html: contact[props.lang] }} />

		</div>


	</div>



	</div>



	</footer>
    )

}

export default Footer;