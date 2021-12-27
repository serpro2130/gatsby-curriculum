import React from "react"
import { Container, Button } from "react-bootstrap"
import CV from "../../images/cv.pdf"
import "./AboutMe.scss"

export default function AboutMe() {
  return (
    <Container className="about-me">
      <p>
        Me gusta aprender nuevas tecnologías y aplicarlas en nuevos proyectos
      </p>
      <hr />
      <a href={CV} target="_blank">
        <Button primary>Descargar CV</Button>
      </a>
    </Container>
  )
}
