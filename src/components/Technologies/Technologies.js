import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import "./Technologies.scss"
import { Fade } from "react-awesome-reveal"

// Single Technology Card component

function TechnologyCard(props) {
  var cardData = props.content

  return (
    <div className="card">
      <div className="column card-wrapper">
        <img
          className="card-picture"
          title={cardData.title}
          alt=""
          src={cardData.image.href}
        />
      </div>

      <div className="column description">
        <h3>{cardData.category}</h3>
        <p>{cardData.text[props.lang]}</p>
      </div>
    </div>
  )
}

// Secondary technologies dropdown component

class TechnologiesDropdown extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      open: false,
    }

    this.openBlock = this.openBlock.bind(this)
  }

  openBlock() {
    this.setState({
      open: !this.state.open,
    })
  }

  render() {
    return (
      <div className="dropdown-wrapper">
        <div className="dropdown">
          <button onClick={this.openBlock} className="dropbtn" href="#">
            <span>{this.props.context.title[this.props.lang]}</span>
            <div className={"chevron " + (this.state.open ? "show" : "")}>
              <img alt="" src="/images/chevron.svg" />
            </div>
          </button>
        </div>
        <div
          id="dropdownTechnologies"
          className={"dropdown-content  " + (this.state.open ? "show" : "")}
        >
          <ul>
            {this.props.context.technologies.map((item, i) => (
              <li key={i}>
                <strong>{item.category[this.props.lang]}</strong>
                {item.technology}
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

// Technologies section component

function Technologies(props) {
  const data = useStaticQuery(graphql`
    query TechnologyQuery {
      technologies: technologiesJson {
        title {
          fr
          en
        }
        secondary_technologies {
          title {
            fr
            en
          }
          technologies {
            technology
            category {
              fr
              en
            }
          }
        }
        primary_technologies {
          technologies {
            text {
              fr
              en
            }
            image {
              href
            }
            title
          }
        }
      }
    }
  `)

  const primary_technologies = data.technologies.primary_technologies
  const title = data.technologies.title
  const secondary_technologies = data.technologies.secondary_technologies

  return (
    <section id="technologies" className="technologies">
      <div className="container">
        <h2 className="red-wave">{title[props.lang]}</h2>

        <Fade className="technologies-grid" direction="top" cascade>
          {primary_technologies.technologies.map(item => (
            <div key={item.title} className="card">
              <TechnologyCard lang={props.lang} content={item} />
            </div>
          ))}
        </Fade>

        <TechnologiesDropdown
          lang={props.lang}
          context={secondary_technologies}
        />
      </div>
    </section>
  )
}

export default Technologies
