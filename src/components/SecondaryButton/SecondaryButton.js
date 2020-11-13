import React from "react"
import "./SecondaryButton.scss"

function SecondaryButton(props) {
  return (
    <div className="secondary-button-wrapper">
      <a
        className="secondary-button"
        title={props.children}
        alt={props.children}
        href={props.href}
      >
        {props.children}
      </a>
    </div>
  )
}

export default SecondaryButton
