import React from 'react'
import styled from 'styled-components'

export const Page = ({ children: content }) => (
  <StyledPage>
    {content}
  </StyledPage>
)

const StyledPage = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  p a,
  table a {
    border-bottom: 2px solid ${props => props.theme.colors.transparent};
    transition: ${props => props.theme.transitions.default};
  }
  p a:hover,
  table a:hover {
    border-bottom: 2px solid ${props => props.theme.colors.primary};
  }

  h1, h2, h3, h4, h5, h6,
  p, ol, ul, code {
    margin-bottom: ${props => props.theme.layout.margin};
  }
  *:last-child {
    margin-bottom: 0;
  }
`
