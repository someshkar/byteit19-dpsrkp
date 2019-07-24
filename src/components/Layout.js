import React from "react"
import styled from "styled-components"
import "../styles/index.css"

import Navbar from "./Navbar"

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  )
}
