import React from "react"
import styled from "styled-components"

import logo from "../../images/logo.png"

const Container = styled.div`
  width: 100vw;
  height: 89vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: url("/images/bg.jpg");
  background-repeat: no-repeat;
  background-size: 100vw 80vh;
  color: #ffffff;
`

const TextContainer = styled.div`
  height: 35vh;
  width: 700px;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 50px;
`

const TextLogo = styled.img`
  filter: brightness(0) invert(1);
  height: 100px;
`

const Heading = styled.div`
  font-size: 60px;
  margin-left: 20px;
  font-weight: 800;
`

const Description = styled.div`
  font-size: 22px;
`

const Graphic = styled.div`
  height: 500px;
  width: 500px;
  /* background: green; */
`

// Sun, I need you to push all your changes so that I can merge the firebase branch
// Working on live share makes more sence b/c no more merge conflicts
export default function Landing() {
  return (
    <Container>
      <div>
        <TextContainer>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <TextLogo src={logo} />
            <Heading>Delhi Public School R.K. Puram</Heading>
          </div>
          <Description>
            Ours is a co-ed day-cum-boarding school, with approximately 9500
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
