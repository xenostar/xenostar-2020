import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { SocialIcon as SocialIcon_ } from 'components'
import { useSocialInfo } from 'hooks'

export const Social = props => {
  const { items } = useSocialInfo()

  return (
    <StyledSocial {...props}>
      {items.map((data, i) => (
        <SocialIcon
          key={i}
          href={data.url}
          icon={data.profileType}
        />
      ))}
    </StyledSocial>
  )
}

Social.propTypes = {
  children: PropTypes.any,
}

const StyledSocial = styled.div`
  display: inline-flex;
`
const SocialIcon = styled(SocialIcon_)`
  margin-left: ${props => props.theme.layout.spacing};
  :first-child {
    margin-left: 0;
  }
`
