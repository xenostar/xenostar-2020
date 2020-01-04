import React from 'react'
import styled from 'styled-components'
import { Link, useStaticQuery, graphql } from 'gatsby'


export const Header = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            subtitle
          }
        }
      }
    `
  )

  return (
    <StyledHeader>
      <Link to="/">
        <h1>{data.site.siteMetadata.title}<span>{data.site.siteMetadata.subtitle}</span></h1>
      </Link>
    </StyledHeader>
  )
}

const StyledHeader = styled.div`
  margin-bottom: 80px;
  margin-top: 80px;

  a {
    align-items: center;
    display: block;
  }
  h1 {
    color: #000;
    font-family: 'Permanent Marker', cursive;
    font-size: 8em;
    line-height: 1;
    text-align: center;
    user-select: none;
  }
  span {
    color: #fff;
    /* text-shadow: 0 0 300px rgba(0,0,0,0.5); */
    text-shadow: 0 0 2px 0px red;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    transition: all 2s ease;
  }
  &:hover span {
    color: #000;
  }
`
