import React from "react"
import { useStaticQuery } from "gatsby"
import PrimaryButton from "../PrimaryButton/PrimaryButton.js"
import PortfolioCard from "./PortfolioCard.js"
import "./Portfolio.scss"

import { Fade } from "react-awesome-reveal"

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
  `)

  const section = data.portfolio.section
  const projects = data.portfolio.projects

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <h2 className="red-wave">{section.title[props.lang]}</h2>

        <Fade direction="top" className="portfolio-grid" triggerOnce cascade damping=".5">
          {projects.map((project, i) => (
            <div>
              <PortfolioCard key={i} lang={props.lang} content={project} />
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

export default Portfolio
