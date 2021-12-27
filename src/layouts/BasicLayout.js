import React from "react"
import Menu from "../components/Menu/Menu"

export default function BasicLayout(props) {
  const { children, menuColor } = props

  return (
    <>
      <Menu menuColor={menuColor} />
      {children}
    </>
  )
}
