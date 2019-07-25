import React from "react"
import styled from "styled-components"

const borderRadius = "20px"

const Container = styled.div`
  height: 350px;
  width: 300px;
  border-radius: ${borderRadius};
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
  user-select: none;
  cursor: pointer;
  margin-left: 30px;
  &:hover {
    box-shadow: 0 5px 7px rgba(0, 0, 0, 0.1);
    transform: translateY(-1px);
    transition: all 0.3s ease;
  }
`

const Image = styled.img`
  border-top-left-radius: ${borderRadius};
  border-top-right-radius: ${borderRadius};
  max-height: 50%;
  width: 100%;
`

const Title = styled.div`
  font-family: "Gotham Bold", sans-serif;
  color: #193158;
  font-size: 22px;
  margin-top: 20px;
`

const Byline = styled.div`
  font-weight: 300;
  margin-top: 30px;
  font-size: 18px;
`

export default function PostItem({ image, title, by }) {
  return (
    <Container>
      <Image src={image} />
      <div style={{ padding: "25px" }}>
        <div
          style={{
            textTransform: "uppercase",
            color: "#33439B",
            letterSpacing: "3px",
            fontSize: "12px",
          }}
        >
          Featured
        </div>
        <Title>{title}</Title>
        <Byline>By {by}</Byline>
      </div>
    </Container>
  )
}
