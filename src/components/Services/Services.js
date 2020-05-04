import React from "react"
import { useStaticQuery } from "gatsby"
import PrimaryButton from "../PrimaryButton/PrimaryButton.js"
import "./Services.scss"

import { Fade } from "react-awesome-reveal"

// Single Service component

function ServiceCard(props) {
  var cardData = props.content

  return (
    <div className={"card " + cardData.class}>
      <div className="logo-wrapper">
        <img
          className="card-logo"
          title={cardData.title}
          alt=""
          src={cardData.image.href}
        />
      </div>

      <div className="description">
        <h3>{cardData.title[props.lang]}</h3>

        <ul>
          {cardData.subservices[props.lang].map(subservice => (
            <li key={subservice}>{subservice}</li>
          ))}
        </ul>
      </div>

      <div className="technologies">
        {cardData.technologies.map(technology => (
          <div key={technology.title} className="technology">
            <img
              src={technology.logo}
              title={technology.title}
              alt={technology.title}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

// Service section component

function Services(props) {
  const data = useStaticQuery(graphql`
    query ServicesQuery {
      services: servicesJson {
        services {
          title {
            fr
            en
          }
          technologies {
            title
            logo
          }
          subservices {
            fr
            en
          }
          image {
            href
          }
          class
        }
        section {
          title {
            fr
            en
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
  `)

  //   Name variables
  const section = data.services.section
  const services = data.services.services

  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="red-wave">{section.title[props.lang]}</h2>

        <div dangerouslySetInnerHTML={{ __html: section.intro[props.lang] }} />

        <Fade
          className="services-grid"
          direction="top"
          cascade
          damping=".7"
          duration="700"
        >
          {services.map(item => (
            <div key={item.title[props.lang]} className="card-wrapper">
              <ServiceCard lang={props.lang} content={item} />
            </div>
          ))}
        </Fade>

        <PrimaryButton align="center" href="#contact">
          {section.buttonTextCTA[props.lang]}
        </PrimaryButton>
      </div>
    </section>
  )
}

export default Services
