import React from "react"
import styled from "styled-components"
import Slider from "react-slick"

import updates from "../../data/updates.json"

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
}

const Container = styled.div`
  height: 230px;
  width: 100vw;
  margin-top: 31px;
  left: -1px;
  position: absolute;
`

const Green = styled.div`
  width: 60%;
  height: 50%;
  background-color: #567e01;
  position: absolute;
  bottom: 0;
  left: 0;
`

const Grey = styled.div`
  width: 70%;
  height: 100%;
  position: absolute;
  bottom: 0;
  right: 0;
  background: url("/images/grey.svg");
  background-repeat: no-repeat;
  background-size: 100% 130%;
`

const ActualTicker = styled(Slider)`
  top: 80px;
  left: 500px;
  width: 40vw;
  color: #000000;
  text-align: right;
`

const Update = styled.div``

const UpdateHeading = styled.div`
  font-size: 30px;
  margin-bottom: 5px;
  color: #5f5c5c;
`

const UpdateContent = styled.div`
  font-size: 22px;
  margin-bottom: 10px;
  color: #5f5c5c;
`

export default function Ticker() {
  return (
    <Container>
      <Green />
      <Grey>
        <ActualTicker {...sliderSettings}>
          {updates.map(update => (
            <Update>
              <UpdateHeading>{update.title}</UpdateHeading>
              <UpdateContent>{update.content}</UpdateContent>
            </Update>
          ))}
        </ActualTicker>
      </Grey>
    </Container>
  )
}
