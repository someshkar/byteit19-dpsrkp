import React from "react"
import styled from "styled-components"

import Notice from "./Notice"
import { notices } from "../../util/firebase"

const Container = styled.div`
  width: 60%;
  height: 73vh;
  min-width: 500px;
`

const Heading = styled.div`
  text-align: center;
  font-weight: 600;
  font-family: "Product Sans Bold";
  color: #228101;
  font-size: 3rem;
  margin: 40px 0;
`

// class Notices extends React.Components {
//   constructor() {
//     super()
//     this.state = {
//       notices: [],
//     }
//   }

//   componentWillMount() {
//     notices.onNoticeAdded(newNotice => {
//       this.setState(ps => ({ notices: [...ps.notices, newNotice] }))
//     })
//   }

//   render() {
//     return (
//       <Container>
//         <Heading>Notices and Updates</Heading>
//         {this.state.notices.map(({ title, content, timestamp }) => (
//           <Notice
//             title={title}
//             content={content}
//             timestamp={timestamp}
//             key={timestamp}
//           />
//         ))}
//       </Container>
//     )
//   }
// }

export default () => {
  const [noticesArr, setNoticesArr] = React.useState([])
  React.useEffect(() => {
    notices.onNoticeAdded(newNotice => {
      // const na = [...noticesArr, newNotice]
      setNoticesArr([...noticesArr, newNotice])
      // Send push notification here
    })
  }, [])

  return (
    <Container>
      <Heading>Notices and Updates</Heading>
      {noticesArr.map(({ title, content, timestamp }) => (
        <Notice
          title={title}
          content={content}
          timestamp={timestamp}
          key={timestamp}
        />
      ))}
    </Container>
  )
}
