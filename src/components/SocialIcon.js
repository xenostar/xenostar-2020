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
    rel="noopener noreferrer"
    target="_blank"
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
  color: ${({ theme }) => theme.palette.secondary};
  display: flex;
  font-size: 1.875em; /* 30px */
  transition: ${({ theme }) => theme.transition.default};
  :hover {
    color: ${({ theme }) => theme.palette.primary};
  }
`
