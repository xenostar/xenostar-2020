import styled, { keyframes } from 'styled-components'
import { Row, Col as Col_, Typography as Typography_, Social } from 'components'
import { FaHeart as FaHeart_ } from 'react-icons/fa'
import { media } from 'utils'

export const Footer = () => (
  <StyledFooter>
    <Row>
      <Col width="49%">
        <Typography as="p" size="h5">
          Built with <FaHeart /> by Xenostar.
        </Typography>
      </Col>
      <Col width="49%" align="flex-end" justify="space-between">
        <Social />
      </Col>
    </Row>
  </StyledFooter>
)

const StyledFooter = styled.footer`
  background-color: #f9f9f9;
  display: flex;
  justify-content: center;
  margin-top: auto;
  padding-top: ${({ theme }) => theme.spacing.big};
  padding-right: ${({ theme }) => theme.spacing.default};
  padding-bottom: ${({ theme }) => theme.spacing.default};
  padding-left: ${({ theme }) => theme.spacing.default};
`
const Col = styled(Col_)`
  ${media.tablet`
    align-items: center;
    width: 100%;
  `}
`
const Typography = styled(Typography_)`
  align-items: center;
  display: flex;
`
const HeartBeat = keyframes`
  0% { transform: scale(1); }
  5% { transform: scale(1.1); }
  10% { transform: scale(1); }
  15% { transform: scale(1.2); }
  50% { transform: scale(1); }
  100% { transform: scale(1); }
`
const FaHeart = styled(FaHeart_)`
  cursor: none;
  margin: 0 ${({ theme }) => theme.shape.borderRadius.default};
  transition: ${({ theme }) => theme.transition.default};
  ${Typography}:hover & {
    animation: ${HeartBeat} 2.5s infinite;
    color: ${({ theme }) => theme.palette.primary};
  }
`
