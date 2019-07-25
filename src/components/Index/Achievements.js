import React from "react"
import styled from "styled-components"

import Achievement from "./Achievement"

import xinoImg from "../../images/xino.jpg"

const achievements = [
  {
    title: "XINO 2019",
    image: xinoImg,
    by: "Exun Clan",
  },
  {
    title: "XINO 2019",
    image: xinoImg,
    by: "Exun Clan",
  },
  {
    title: "XINO 2019",
    image: xinoImg,
    by: "Exun Clan",
  },
  {
    title: "XINO 2019",
    image: xinoImg,
    by: "Exun Clan",
  },
]

const Container = styled.div`
  height: 600px;
  width: 65vw;
  padding-top: 50px;
`

const AchievementsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`

const Heading = styled.div`
  font-size: 50px;
  margin-bottom: 30px;
`

export default function Achievements() {
  return (
    <Container id="achievements">
      <Heading>Achievements</Heading>
      <AchievementsContainer>
        {achievements.map(achievement => (
          <Achievement {...achievement} />
        ))}
      </AchievementsContainer>
    </Container>
  )
}
