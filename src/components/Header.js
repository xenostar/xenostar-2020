import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Row, Col as Col_, Typography } from 'components'
import { media } from 'utils'

export const Header = ({
  introText = 'Lorem Ipsum',
  title = 'Lorem Ipsum'
}) => (
  <StyledHeader>
    <Row>
      <Col>
        <Title as="h1" size="h1">
          {title}
        </Title>
        <Typography as="h2" size="h3">
          {introText}
        </Typography>
      </Col>
    </Row>
  </StyledHeader>
)

Header.propTypes = {
  introText: PropTypes.string,
  title: PropTypes.string
}

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  padding-top: 9.125rem; /* 146px */
  padding-right: ${props => props.theme.spacing.default};
  padding-left: ${props => props.theme.spacing.default};
`
const Col = styled(Col_)`
  margin-bottom: 0;
`
const Title = styled(Typography)`
  span {
    color: ${props => props.theme.colors.primary};
  }
  ${media.tablet`
    font-size: 10.5vw;
  `}
`
