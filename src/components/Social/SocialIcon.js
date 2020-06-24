import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
  FaDribbble,
  FaRegEnvelope,
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter
} from 'react-icons/fa'

const Icons = {
  Dribbble: <FaDribbble />,
  Email: <FaRegEnvelope />,
  Facebook: <FaFacebookF />,
  Github: <FaGithub />,
  Instagram: <FaInstagram />,
  LinkedIn: <FaLinkedinIn />,
  Twitter: <FaTwitter />
}

export const SocialIcon = ({ href = '#', icon, ...props }) => (
  <Link
    aria-label={icon}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    {...props}
  >
    {Icons[icon]}
  </Link>
)

SocialIcon.propTypes = {
  href: PropTypes.string,
  icon: PropTypes.string
}

const Link = styled.a`
  color: ${props => props.theme.colors.secondary};
  display: flex;
  font-size: 1.875em; /* 30px */
  transition: ${props => props.theme.transitions.default};
  :hover {
    color: ${props => props.theme.colors.primary};
  }
`
