import React from "react"
import { Link } from "gatsby"
import { Container } from "react-bootstrap"
import "./Menu.scss"

export default function Menu(props) {
  const { menuColor } = props
  return (
    <header
      className="menu"
      style={{ backgroundColor: menuColor || "transparent" }}
    >
      <Container>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/skills">Skills</Link>
          </li>
          <li>
            <Link to="/projects">Proyectos</Link>
          </li>
        </ul>
      </Container>
    </header>
  )
}
