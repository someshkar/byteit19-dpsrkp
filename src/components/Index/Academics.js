import React from "react"
import styled from "styled-components"

import books from "../../images/books.png"

const Container = styled.div`
  height: 400px;
  max-width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`

const Text = styled.div`
  font-size: 50px;
`

const Description = styled.div`
  margin-top: 20px;
  font-size: 25px;
`

const Books = styled.img`
  margin-right: 200px;
  height: 300px;
`

export default function Academics() {
  return (
    <Container id="academics">
      <Books src={books} />
      <div style={{ width: "600px" }}>
        <Text>Academics</Text>
        <Description>
          D.P.S. R.K. Puram has been in the country's top senior secondary
          schools in academics. We have constantly been dominating the high
          scorers lists for decades.
        </Description>
      </div>
    </Container>
  )
}
