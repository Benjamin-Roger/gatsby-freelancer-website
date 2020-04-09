import React from "react";
import './Contact.scss';

import { useStaticQuery, graphql } from 'gatsby';

import { Pulse } from 'react-awesome-reveal';


function Contact(props) {

	const data = useStaticQuery(graphql`
	    query ContactQuery {
			site {
				siteMetadata {
				  captchaKey
				}
			  }

			contact_section: contactJson {
				form {
					form {
						GPDR {
							value {
								en
								fr
							}
							name {
								en
								fr
							}
						}
						contact {
							en
							fr
						}
						subject {
							placeholder {
								en
								fr
							}
							name {
								en
								fr
							}
						}
						name {
							en
							fr
						}
						}
						submit {
							en
							fr
						}
						title {
							en
							fr
						}
				}
				contact_text {
					intro {
						en
						fr
					}
					title {
						en
						fr
					}
				}
			}
		  

		}
	`);


	var contact_form = data.contact_section.form;

	var contact_text = data.contact_section.contact_text;

	var captchaKey = data.site.siteMetadata.captchaKey;

	return (
		<section id="contact" className="contact">
			<div className="container">

				<div className="contact-grid">

					<div className="column">
						<div className="contact-infos" >

							<h2 className="teal-wave">{contact_text.title[props.lang]}</h2>

							<div dangerouslySetInnerHTML={{ __html: contact_text.intro[props.lang] }} />

						</div>


					</div>


					<div className="column" >
						<form className="contact-form" action="https://getform.io/f/bf1d35b9-9fd4-4df3-9b1b-8388c1da1200" method="POST">
							<Pulse triggerOnce>
								<h2 className="teal-wave">{contact_form.title[props.lang]}</h2>
							</Pulse>

							<label htmlFor="tel-mail">{contact_form.form.contact[props.lang]}</label>
							<input type="text" name="tel-mail" placeholder={contact_form.form.contact[props.lang]} required />

							<label htmlFor="name">{contact_form.form.name[props.lang]}</label>
							<input type="text" name="name" placeholder={contact_form.form.name[props.lang]} required />

							<label htmlFor="project" >{contact_form.form.subject.name[props.lang]}</label>
							<textarea name="project" placeholder={contact_form.form.subject.placeholder[props.lang]} />

							<div className="GPDR">
								<input name="GPDR" type="checkbox" required />
								<label className="visible" htmlFor="GPDR">{contact_form.form.GPDR.value[props.lang]}</label>
							</div>

							<div className="g-recaptcha" data-sitekey={captchaKey}></div>

							<div style={{ textAlign: 'center' }}>
								<button type="submit">{contact_form.submit[props.lang]}</button>
							</div>
						</form>

					</div>



				</div>

			</div>


		</section>
	)

}

export default Contact;