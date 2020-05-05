import React from "react"
import "./SocialBar.scss"

function SocialBar() {
  return (
    <div className="social-logos">
      <a
        rel="noopener noreferrer"
        alt="LinkedIn"
        href="https://www.linkedin.com/in/benjamin-roger-8ab67120/"
        title="LinkedIn"
      >
        <img alt="" src="/images/linkedin.svg" />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        alt="Whatsapp"
        href="https://wa.me/33658351332"
        title="Whatsapp"
      >
        <img alt="" src="/images/whatsapp.svg" />
      </a>
      <a
        rel="noopener noreferrer"
        alt="Twitter"
        href="https://twitter.com/BenjRoger"
        title="Twitter"
      >
        <img alt="" src="/images/twitter.svg" />
      </a>
      <a
        rel="noopener noreferrer"
        alt="Github"
        href="https://github.com/Benjamin-Roger"
        title="Github"
      >
        <img alt="" src="/images/github.svg" />
      </a>
    </div>
  )
}
export default SocialBar
