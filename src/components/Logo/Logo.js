import React from 'react'
import styled from 'styled-components'
import { useStoreState } from 'easy-peasy'
import AniLink_ from 'gatsby-plugin-transition-link/AniLink'

export const Logo = () => {
  const currentPage = useStoreState(state => state.page.currentPage)

  return (
    <StyledLogo>
      <AniLink cover direction="left" bg="#90c7a8" to="/">
        <div>
          X<span>S</span>
        </div>
      </AniLink>
      {currentPage}
    </StyledLogo>
  )
}

const StyledLogo = styled.div`
  display: inline-flex;
  align-items: center;
`
const AniLink = styled(AniLink_)`
  background-color: #232121;
  border-radius: ${props => props.theme.layout.borderRadius};
  color: ${props => props.theme.colors.white};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: ${props => props.theme.fonts.bebasNeue};
  font-size: 3.75em; /* 60px */
  height: 5rem; /* 80px */
  line-height: 1;
  pointer-events: auto;
  transition: ${props => props.theme.transitions.default};
  width: 5rem; /* 80px */

  :hover {
    opacity: 0.75;
  }

  div {
    padding-top: 0.4375rem; /* 7px */
  }
  span {
    color: ${props => props.theme.colors.primary};
  }
`
