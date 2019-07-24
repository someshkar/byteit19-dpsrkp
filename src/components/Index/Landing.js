import React from "react"
import styled from "styled-components"

import Ticker from "./Ticker"

import logo from "../../images/logo.png"

const Container = styled.div`
  width: 100vw;
  height: 89vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: url("/images/bg.jpg.bak");
  background-repeat: no-repeat;
  background-size: 100vw 89vh;
  color: #ffffff;
`

const TextContainer = styled.div`
  height: 26vh;
  width: 700px;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 50px;
  transform: translateY(-90px);
`

const TextLogo = styled.img`
  filter: brightness(0) invert(1);
  height: 140px;
`

const Heading = styled.div`
  font-size: 60px;
  margin-left: 20px;
  font-weight: 800;
`

const Description = styled.div`
  margin-top: 25px;
  font-size: 30px;
`

const Graphic = styled.div`
  height: 500px;
  width: 500px;
  /* background: green; */
`

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
            India’s number one day-cum-boarding school (2018-19) with
            approximately 9500 students enrolled.
          </Description>
        </TextContainer>
        <Ticker />
      </div>
      <div>
        <Graphic />
      </div>
    </Container>
  )
}
