import React from "react"
import styled from "styled-components"

import { updates } from "../../util/firebase"

const BiggerContainer = styled.div`
  width: 80vw;
  display: flex;
  justify-content: space-around;
  margin-bottom: 100px;
`

const Container = styled.div`
  max-height: 600px;
  overflow-x: hidden;
  overflow-x: auto;
  width: 40vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    width: 10px;
    background: #dadada;
    cursor: pointer;
    border-radius: 5px;
  }
  &::-webkit-scrollbar-track {
    background: none;
  }
`

const Update = styled.div`
  height: 150px;
  padding: 20px;
  width: 90%;
  border: 2px solid #e7e7e7;
  color: #343d32;
  border-radius: 20px;
  margin-top: 30px;
`

const Title = styled.div`
  font-size: 40px;
`

const Description = styled.div`
  font-size: 25px;
`

const Heading = styled.h1`
  font-size: 50px;
`

const Subheading = styled.div`
  font-size: 30px;
  color: #343d32;
`

export default function Updates() {
  const [updatesArr, setUpdates] = React.useState([])

  React.useEffect(() => {
    updates.onUpdateAdded(newUpdate =>
      setUpdates(
        updatesArr.concat(newUpdate).sort((a, b) => a.timestamp > b.timestamp)
      )
    )
  }, [])

  return (
    <BiggerContainer>
      <Container>
        {updatesArr.map(update => (
          <Update>
            <Title>{update.title}</Title>
            <Description>{update.content}</Description>
          </Update>
        ))}
      </Container>
      <div style={{ height: "40vw", width: "500px", marginRight: "50px" }}>
        <Heading>Updates</Heading>
        <Subheading>
          See live updates about the school, as things keep happening.
        </Subheading>
      </div>
    </BiggerContainer>
  )
}
