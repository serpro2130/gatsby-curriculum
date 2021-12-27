import React from "react"
import IcTwitter from "../../../images/icons/twitter.svg"
import IcFacebook from "../../../images/icons/facebook.svg"
import IcWeb from "../../../images/icons/web.svg"
import IcInstagram from "../../../images/icons/instagram.svg"
import IcLinkedin from "../../../images/icons/linkedin.svg"

import "./Social.scss"

const socialMedia = [
  {
    icon: <IcTwitter />,
    link: "https://twitter.com/Alarcon21Hector",
  },
  {
    icon: <IcFacebook />,
    link: "https://www.facebook.com/hector.alarcon.9421",
  },
  {
    icon: <IcWeb />,
    link: "https://haaldeen.mitiendanikken.com/",
  },
  {
    icon: <IcInstagram />,
    link: "https://www.instagram.com/haaldeen/",
  },
  {
    icon: <IcLinkedin />,
    link: "https://www.linkedin.com/in/hector-alarcon-guerra-37537656/",
  },
]

export default function Social() {
  return (
    <div className="social">
      {socialMedia.map((social, index) => (
        <a
          key={index}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
        >
          {social.icon}
        </a>
      ))}
    </div>
  )
}
