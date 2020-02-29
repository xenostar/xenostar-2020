import styled from 'styled-components'

export const Section = styled.section`
  display: flex;
  justify-content: center;
  padding-top: ${props => props.theme.layout.spacingHuge};
  padding-right: ${props => props.theme.layout.spacing};
  padding-bottom: ${props => props.theme.layout.spacingBig};
  padding-left: ${props => props.theme.layout.spacing};
  width: 100%;
`
