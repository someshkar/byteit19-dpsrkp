import React from "react"
import styled from "styled-components"
import AnchorLink from "react-anchor-link-smooth-scroll"

const links = [
  {
    name: "International Admissions",
    to: "#intladm",
  },
  {
    name: "Achievements",
    to: "#achievements",
  },
  {
    name: "Academics",
    to: "#academics",
  },
  {
    name: "In The News",
    to: "#inthenews",
  },
]

const BiggerContainer = styled.div`
  width: 80vw;
  display: flex;
  justify-content: space-around;
  margin-top: 150px;
  margin-bottom: 100px;
`

const Text = styled.div`
  font-size: 50px;
  width: 550px;
`

const Description = styled.div`
  margin-top: 30px;
  font-size: 25px;
`

const LinksContainer = styled.div`
  width: 350px;
  height: 320px;
  border: 2px solid #e7e7e7;
  padding: 30px;
  border-radius: 20px;
`

const QuickLinks = styled.ul``

const QuickLink = styled.li`
  font-size: 25px;
  margin-top: 30px;
`

const A = styled(AnchorLink)`
  color: #000;
  &:hover {
    color: #156501;
    transition: all 0.3s ease;
  }
`

export default function Links() {
  return (
    <BiggerContainer>
      <div>
        <Text>
          <div>Service Before Self</div>
          <Description>
            Our mission is to nurture our students to realize their own
            potential and identify and achieve their goals in an environment of
            rich tutelage, joyful and harmonious learning while keeping alive
            the spirit of togetherness and ‘Service Before Self’.
          </Description>
        </Text>
      </div>
      <div>
        <LinksContainer>
          <Text>Quick links</Text>
          <QuickLinks>
            {links.map(link => (
              <QuickLink>
                <A href={link.to}>{link.name}</A>
              </QuickLink>
            ))}
          </QuickLinks>
        </LinksContainer>
      </div>
    </BiggerContainer>
  )
}
