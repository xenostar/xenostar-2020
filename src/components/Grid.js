import styled from 'styled-components'

export const Grid = styled.div`
  display: grid;
  grid-gap: ${props => props.theme.spacing.tiny};
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  margin-bottom: ${props => props.theme.spacing.default};
  transition: ${props => props.theme.transitions.default};
  width: 100%;
`
