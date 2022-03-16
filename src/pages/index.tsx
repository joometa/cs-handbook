import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { GlobalStyle, Footer } from '@components/Common'
import { Introduction } from '@components/Main'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const IndexPage: FunctionComponent = function () {
  return (
    <Container>
      <GlobalStyle />
      <Introduction />
      <Footer />
    </Container>
  )
}

export default IndexPage
