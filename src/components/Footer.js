import React from "react"
import styled from "styled-components"

const Container = styled.div`
  max-width: 100vw;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Text = styled.div`
  font-size: 15px;
  font-family: "Product Sans Light";
`

export default function Footer() {
  return (
    <Container>
      <Text>
        Made with <span style={{ color: "red" }}>&lt;3</span> by Exun Clan
      </Text>
    </Container>
  )
}
