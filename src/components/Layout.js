import React from "react"
import styled from "styled-components"
import "../styles/index.css"

import Navbar from "./Navbar"
import Footer from "./Footer"

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: "100vw",
        }}
      >
        {children}
      </div>
      <Footer />
    </div>
  )
}
