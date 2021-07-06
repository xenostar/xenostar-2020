import styled from 'styled-components'

export const Grid = styled.div`
  display: grid;
  grid-gap: ${({ theme }) => theme.spacing.tiny};
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  margin-bottom: ${({ theme }) => theme.spacing.default};
  transition: ${({ theme }) => theme.transition.default};
  width: 100%;
`
