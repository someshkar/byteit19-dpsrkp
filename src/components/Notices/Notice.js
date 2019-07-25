import React from "react"
import styled from "styled-components"
import moment from "moment"

const Container = styled.div`
  display: flex;
  width: 105%;
  margin-left: -25%;
  padding: 30px;
  margin: 50px 0;
  &:first-child {
    margin-top: 0;
  }
`

const TickContainer = styled.div`
  height: 100%;
  width: 5vw;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`

const Tick = styled.div`
  height: 4.3rem;
  width: 0.6vw;
  background: #228101;
  border-radius: 100px;
`

const NoticeContainer = styled.div`
  flex: 1;
  height: 100%;
`

const Title = styled.div`
  font-size: 2rem;
  line-height: 2.7rem;
  font-family: "Product Sans Bold";
  margin-bottom: 10px;
`

const Timestamp = styled.div`
  font-size: 0.85rem;
  line-height: 1.3rem;
  color: #444;
  font-family: "Product Sans Light";
`

const Content = styled.div`
  font-size: 1.2rem;
  line-height: 1.9rem;
  margin-top: 30px;
  width: 80%;
`

const formatDate = ts => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ]

  const dt = new Date(ts)
  return `${`${dt.getHours()}`.padStart(
    2,
    "0"
  )}:${`${dt.getMinutes()}`.padStart(2, "0")} ${
    days[dt.getDay()]
  }, ${dt.getDate()} ${months[dt.getMonth()]} ${dt.getFullYear()}`
}

export default ({ title, content, timestamp }) => {
  return (
    <Container>
      <TickContainer>
        <Tick />
      </TickContainer>
      <NoticeContainer>
        <div>
          <Title>{title}</Title>
          <Timestamp>{formatDate(timestamp)}</Timestamp>
          {/* <Timestamp>{timestamp}</Timestamp> */}
        </div>
        <Content>{content}</Content>
      </NoticeContainer>
    </Container>
  )
}
