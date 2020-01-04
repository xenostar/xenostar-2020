import React from 'react'
import styled from 'styled-components'
import { Link, useStaticQuery, graphql } from 'gatsby'

export const Header = () => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          subTitle
        }
      }
    }
  `)

  return (
    <StyledHeader>
      <Link to="/">
        <h1>
          {site.siteMetadata.title}
          <span>{site.siteMetadata.subTitle}</span>
        </h1>
      </Link>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
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
    color: #ED5429;
    /* text-shadow: 0 0 300px rgba(0,0,0,0.5); */
    /* text-shadow: -1px 0 #ED5429, 0 1px #ED5429, 1px 0 #ED5429, 0 -1px #ED5429; */
    transition: all 0.3s ease;
  }
  &:hover span {
    color: #fff;
    text-shadow: -1px 0 #ED5429, 0 1px #ED5429, 1px 0 #ED5429, 0 -1px #ED5429;
  }
`
