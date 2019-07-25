import React from "react"
import styled from "styled-components"

import Layout from "../components/Layout"
import { notices } from "../util/firebase"

const Container = styled.div`
  width: 75%;
  height: 73vh;
  display: flex;
  align-items: center;
`

// const HalfWidth = styled.div`
//   width: 50%;
// `

const FormContainer = styled.div`
  padding: 0 40px;
  padding-bottom: 40px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Input = styled.input`
  width: 70%;
  max-width: 400px;
  border: 2px solid #eaeaef;
  border-radius: 3px;
  font-size: 1rem;
  padding: 10px 20px;
  transition: border-color 0.2s ease;
  margin-bottom: 20px;
  &:focus {
    border-color: #228101;
    outline: none;
  }
`

const Textarea = styled.textarea`
  width: 70%;
  max-width: 400px;
  border: 2px solid #eaeaef;
  resize: vertical;
  border-radius: 3px;
  font-size: 1rem;
  padding: 10px 20px;
  transition: border-color 0.2s ease;
  margin-bottom: 20px;
  &:focus {
    border-color: #228101;
    outline: none;
  }
`

const FormTitle = styled.div`
  font-size: 1.5rem;
  font-family: "Product Sans Bold";
  margin-bottom: 20px;
`

const Button = styled.button`
  padding: 15px 20px;
  font-size: 0.8rem;
  font-family: "Product Sans Medium";
  cursor: pointer;
  text-transform: uppercase;
  border-radius: 3px;
  background: #228101;
  color: white;
  margin: 0;
  transition: background 0.2s ease;
  &:hover {
    background: #1a6300;
  }
  &:focus {
    outline: none;
  }
`

const PushForm = ({ formTitle, onSubmit }) => {
  const [title, setTitle] = React.useState("")
  const [content, setContent] = React.useState("")

  return (
    <FormContainer>
      <FormTitle>{formTitle}</FormTitle>
      <Input
        onChange={e => setTitle(e.target.value)}
        value={title}
        placeholder="Title"
      />
      <Textarea
        onChange={e => setContent(e.target.value)}
        placeholder="Content"
        value={content}
      />
      <Button
        onClick={() => {
          onSubmit(title, content, new Date().getTime())
          setTitle("")
          setContent("")
        }}
      >
        Submit
      </Button>
    </FormContainer>
  )
}

export default () => {
  return (
    <Layout>
      <Container>
        <PushForm
          formTitle="Notices"
          onSubmit={(title, content, timestamp) =>
            notices.pushNotice(title, content, timestamp)
          }
        />
        {/* <HalfWidth>
          <PushForm
            formTitle="Updates"
            onSubmit={(title, content, timestamp) =>
              updates.pushUpdate(title, content, timestamp)
            }
          />
        </HalfWidth>
        <HalfWidth>
          <PushForm
            formTitle="Notices"
            onSubmit={(title, content, timestamp) =>
              notices.pushNotice(title, content, timestamp)
            }
          />
        </HalfWidth> */}
      </Container>
    </Layout>
  )
}
