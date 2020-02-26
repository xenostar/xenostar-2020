// import React, { useState, useEffect } from 'react'
import React from 'react'
import styled from 'styled-components'
// import PropTypes from 'prop-types'
// import { Anchor } from 'components'

const Post = ({ data }) => {
  return (
    <StyledPost>
      <p>A Post</p>
    </StyledPost>
  )
}

const StyledPost = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${props => props.theme.layout.paddingHuge};
  :first-child {
    margin-top: 0;
  }
`

export default Post
