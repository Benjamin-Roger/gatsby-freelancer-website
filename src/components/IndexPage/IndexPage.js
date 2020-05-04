import React from "react"

import HomeBanner from "../HomeBanner/HomeBanner.js"
import Portfolio from "../Portfolio/Portfolio.js"
import Services from "../Services/Services.js"
import Story from "../Story/Story.js"
import Technologies from "../Technologies/Technologies.js"
import Contact from "../Contact/Contact.js"

function IndexPage(props) {
  var language = props.lang

  return (
    <>
      <HomeBanner
        lang={language}
        author={props.banner.author}
        position={props.banner.position}
        buttonText={props.banner.buttonText}
        intro={props.banner.intro}
      />
      <Portfolio lang={language} />

      <Services lang={language} />

      <Story lang={language} />

      <Technologies lang={language} />

      <Contact lang={language} />
    </>
  )
}

export default IndexPage
