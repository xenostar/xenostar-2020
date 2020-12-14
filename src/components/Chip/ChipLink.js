import React from 'react'
import PropTypes from 'prop-types'
import { Chip } from 'components'
import { FaLink } from 'react-icons/fa'

export const ChipLink = ({ href = '/' }) => (
  <Chip
    as="a"
    href={href}
    icon={<FaLink />}
    rel="noopener noreferrer"
    target="_blank"
    text={href}
  />
)

ChipLink.propTypes = {
  href: PropTypes.string
}
