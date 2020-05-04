import React from "react"
import "./PrimaryButton.scss"
import scrollTo from "gatsby-plugin-smoothscroll"

function PrimaryButton(props) {
  return (
    <div className="primary-button-wrapper" style={{ textAlign: props.align }}>
      <a
        className="primary-button"
        title={props.children}
        alt={props.children}
        onClick={() => scrollTo(props.href)}
      >
        {props.children}
      </a>
    </div>
  )
}

export default PrimaryButton
