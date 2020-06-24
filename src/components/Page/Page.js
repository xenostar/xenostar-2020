import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export const Page = ({ children }) => <StyledPage>{children}</StyledPage>

Page.propTypes = {
  children: PropTypes.node
}

const StyledPage = styled.main`
  background-color: ${props => props.theme.colors.white};
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  z-index: 1;

  h1 a,
  h2 a,
  h3 a,
  h4 a,
  h5 a,
  h6 a,
  p a {
    background-image: ${props => props.theme.colors.gradient},
      linear-gradient(
        ${props => props.theme.colors.lightBlue},
        ${props => props.theme.colors.lightBlue}
      );
    background-position: bottom 0% left;
    background-repeat: no-repeat;
    background-size: 0 30%, 100% 30%;
    border-radius: ${props => props.theme.layout.borderRadiusSmall};
    transition: 0.2s background ease-out;
  }

  h1 a:hover,
  h2 a:hover,
  h3 a:hover,
  h4 a:hover,
  h5 a:hover,
  h6 a:hover,
  p a:hover {
    background-size: 100% 30%, 100% 30%;
  }

  p a {
    font-weight: ${props => props.theme.fonts.bold};
  }
`
