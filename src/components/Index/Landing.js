import React from "react"
import styled from "styled-components"

const Container = styled.div`
  max-width: 100vw;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
`

const TextContainer = styled.div`
  height: 40vh;
  width: 500px;
  margin-left: 50px;
`

const Heading = styled.h1`
  font-size: 50px;
`

const Description = styled.div`
  font-size: 25px;
  color: #343d32;
`

const Graphic = styled.div`
  height: 500px;
  width: 500px;
  background: green;
`

export default function Landing() {
  return (
    <Container>
      <div>
        <TextContainer>
          <Heading>Delhi Public School R.K. Puram</Heading>
          <Description>
            The number one day-cum-boarding school (2018-2019) in India.
          </Description>
        </TextContainer>
      </div>
      <div>
        <Graphic />
      </div>
    </Container>
  )
}
