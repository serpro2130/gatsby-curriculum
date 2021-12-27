import React from "react"
import { Container } from "react-bootstrap"
import ListSkills from "../components/ListSkills/ListSkills"
import BasicLayout from "../layouts/BasicLayout"
import {
  frontendSkills,
  frontendSkillsColors,
  backendSkills,
  backendSkillsColors,
  soSkills,
  soSkillsColors,
} from "../utils/skills"
import "./skills.scss"

export default function Index() {
  return (
    <BasicLayout menuColor="#000">
      <Container className="skills">
        <div className="skills__block">
          <h2>Frontend</h2>
          <ListSkills skills={frontendSkills} colors={frontendSkillsColors} />
        </div>
        <div className="skills__block">
          <h2>Backend</h2>
          <ListSkills skills={backendSkills} colors={backendSkillsColors} />
        </div>
        <div className="skills__block">
          <h2>Sistemas Operativos</h2>
          <ListSkills skills={soSkills} colors={soSkillsColors} />
        </div>
      </Container>
    </BasicLayout>
  )
}
