import React from "react"
import styled from "styled-components"

import earth from "../../images/earth.gif"
import chart from "../../images/admissions.png"

const Container = styled.div`
  height: 700px;
  max-width: 100vw;
  margin-top: 100px;
  margin-bottom: 100px;
`

const DataContainer = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`

const Heading = styled.div`
  font-size: 50px;
`

const Earth = styled.img``

const Chart = styled.img``

export default function IntlAdmn() {
  return (
    <Container id="intladm">
      <Heading>International Admissions</Heading>
      <DataContainer>
        <Chart src={chart} />
        <Earth src={earth} />
      </DataContainer>
    </Container>
  )
}
