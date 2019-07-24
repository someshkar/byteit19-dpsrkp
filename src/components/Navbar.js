import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import dpsLogo from "../images/logo.png"

const links = [
  {
    name: "Notices",
    to: "/notices",
  },
  {
    name: "Resources",
    to: "/resources",
  },
  {
    name: "Logo",
    to: "/",
    logo: true,
    image: dpsLogo,
  },
  {
    name: "Admission",
    to: "/admission",
  },
  {
    name: "Payment",
    to: "/payment",
  },
]

const BigContainer = styled.div`
  max-width: 100vw;
  height: 7rem;
  display: flex;
  justify-content: center;
`

const Container = styled.div`
  max-width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Item = styled.div`
  margin-left: 70px;
  margin-right: 70px;
  font-size: 20px;
  &:hover {
    color: #156501;
    transition: all 0.3s ease;
  }
`

const Logo = styled.img`
  height: 65px;
  margin-left: 80px;
  margin-right: 80px;
`

// const Underline = styled.div`
//   width: 0px;
//   height: 1px;
//   background: #000000;
//   top: 25px;
//   transition: all 0.25s ease;
//   position: relative;
//   &:hover {
//     width: 100%;
//   }
// `

export default function Navbar() {
  return (
    <BigContainer>
      <Container>
        {links.map(link =>
          link.logo ? (
            <Link to={link.to}>
              <Logo src={link.image} />
            </Link>
          ) : (
            <Link to={link.to}>
              <Item>{link.name}</Item>
            </Link>
          )
        )}
      </Container>
    </BigContainer>
  )
}
