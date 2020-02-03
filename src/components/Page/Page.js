import React from 'react'
import styled from 'styled-components'

export const Page = ({ children }) => (
  <StyledPage>
    {children}
  </StyledPage>
)

const StyledPage = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  * a {
    background-image: linear-gradient(
      ${props => props.theme.colors.lightBlue},
      ${props => props.theme.colors.lightBlue}
    );
    background-position: bottom left;
    background-repeat: no-repeat;
    background-size: 100% 35%;
    border-radius: ${props => props.theme.layout.borderRadiusSmall};
    padding: 0 2px;
    transition: ${props => props.theme.transitions.fast};
  }
  * a:hover {
    background-size: 100% 100%;
  }

  p a {
    font-weight: ${props => props.theme.fonts.bold};
  }

  h1, h2, h3, h4, h5, h6,
  p, ol, ul, code {
    margin-bottom: ${props => props.theme.layout.margin};
  }
  *:last-child {
    margin-bottom: 0;
  }
`
