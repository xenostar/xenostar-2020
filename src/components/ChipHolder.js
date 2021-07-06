import styled from 'styled-components'
import { Row as Row_ } from 'components'

export const ChipHolder = ({ children }) => (
  <StyledChipHolder>
    <Row align="center" justify="flex-start">
      {children}
    </Row>
  </StyledChipHolder>
)

const StyledChipHolder = styled.div`
  display: flex;
  margin-top: ${({ theme }) => theme.spacing.default};
  width: 100%;
`
const Row = styled(Row_)`
  margin-top: -${({ theme }) => theme.spacing.tiny};
`
