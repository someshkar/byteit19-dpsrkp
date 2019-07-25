import React from "react"
import styled from "styled-components"

import ndtv from "../../images/ndtv.png"
import aajtak from "../../images/aajtak.png"
import timesOfIndia from "../../images/timesofindia.png"

const Container = styled.div`
  max-width: 100vw;
  width: 60vw;
  height: 300px;
  margin-top: 100px;
`

const Heading = styled.div`
  font-size: 50px;
`

const NewsContainer = styled.div`
  margin-top: 100px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`

const NewsItem = styled.img`
  height: 50px;
  user-select: none;
  cursor: pointer;
  opacity: 0.5;
  filter: grayscale(100%);
  &:hover {
    opacity: 1;
    filter: none;
    transition: all 0.3s ease;
  }
`

export default function News() {
  return (
    <Container id="inthenews">
      <Heading>In the news</Heading>
      <NewsContainer>
        <NewsItem src={ndtv} />
        <NewsItem src={aajtak} />
        <NewsItem src={timesOfIndia} />
      </NewsContainer>
    </Container>
  )
}
