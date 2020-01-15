// import React, { useEffect } from 'react'
import React from 'react'
// import { useStoreActions } from 'easy-peasy'
import { Page, Section, Row, Footer } from 'components'

export default props => {
  // const setCurrentPage = useStoreActions(actions => actions.page.setCurrentPage)

  // useEffect(() => {
  //   console.log("Index props", props)
  // }, [props])

  return (
    <Page>
      <Section>
        <Row>
          <h1>
            My name is Bryan Leewood and this is my personal portfolio. I have
            been designing and developing web pages for nearly ten years.
            Creating beautiful, elegant web applications is my passion. Browse
            my portfolio and learn more about who I am and what I do.
          </h1>
          <p>
            Quis proident sit laboris in laboris aliquip consequat ad ad ex
            nostrud et commodo magna. Amet cillum incididunt anim laborum enim.
            Duis tempor ipsum cillum non. Deserunt consequat ut exercitation in
            dolore. Lorem cillum dolore aute excepteur fugiat aliqua sunt sit
            tempor ea eu.
          </p>
        </Row>
      </Section>
      <Footer />
    </Page>
  )
}
