import React from "react"
import { Container, Row, Col, Image } from "react-bootstrap"
import profileImage from "../../images/avatar.jpg"
import "./Profile.scss"
import Social from "./Social"

const data = [
  {
    title: "Edad:",
    info: "44 años",
  },
  {
    title: "Dirección",
    info: "Ecuador, Quito, Pomasqui calle Tadeo Benitez N136",
  },
  {
    title: "Email",
    info: "hectoralarconguerra@gmail.com",
  },
  {
    title: "Teléfono",
    info: "+593995184426",
  },
]

export default function Profile() {
  return (
    <div className="profile">
      <div className="wallpaper" />
      <div className="dark" />
      <Container className="box">
        <Row className="info">
          <Col xs={12} md={4}>
            <Image src={profileImage} fluid />
          </Col>
          <Col xs={12} md={8} className="info__data">
            <span>HOLA!</span>
            <p>Héctor Alberto Alarcón Guerra</p>
            <p>Ingeniero en Informática</p>
            <hr />
            <div className="more-info">
              {data.map((item, index) => (
                <div key={index} className="item">
                  <p>{item.title}</p>
                  <p>{item.info}</p>
                </div>
              ))}
            </div>
          </Col>
        </Row>
        <Social />
      </Container>
    </div>
  )
}
