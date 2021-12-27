import React from "react"
import AboutMe from "../components/AboutMe/AboutMe"
import Profile from "../components/Profile/Profile"
import BasicLayout from "../layouts/BasicLayout"
import "./index.scss"

export default function Index() {
  return (
    <BasicLayout>
      <Profile />
      <AboutMe />
    </BasicLayout>
  )
}
