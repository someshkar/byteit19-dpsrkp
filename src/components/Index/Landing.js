import React from "react"
import styled from "styled-components"

const Container = styled.div`
  width: 80vw;
  height: 89vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
`

const TextContainer = styled.div`
  height: 40vh;
  width: 500px;
`

const Heading = styled.h1`
  font-size: 50px;
`

const Description = styled.div`
  font-size: 22px;
  color: #343d32;
`

const Graphic = styled.div`
  height: 500px;
  width: 500px;
  background: green;
`

const Button = styled.div``

export default function Landing() {
  return (
    <Container>
      <div>
        <TextContainer>
          <Heading>Delhi Public School R.K. Puram</Heading>
          <Description>
            Ours is a co-ed day-cum-boarding school, with approximately 9,500
            students on its rolls. These children, in the junior and senior
            branches, study in the three different campuses at East of Kailash,
            Vasant Vihar and R.K. Puram.
          </Description>
        </TextContainer>
      </div>
      <div>
        <Graphic />
      </div>
    </Container>
  )
}
