import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
  Row,
  Col as Col_,
  Typography,
  BlogDate,
  BlogShare as BlogShare_
} from 'components'
import { media } from 'utils'

export const HeaderPost = ({
  date = 'Date',
  introText = 'Lorem Ipsum',
  path = '',
  title = 'Lorem Ipsum'
}) => (
  <StyledHeaderPost>
    <Row>
      <Col>
        <Title as="h1" size="h2" mb>
          {title}
        </Title>
        <Meta>
          <BlogDate>{date}</BlogDate>
          <BlogShare path={path} />
        </Meta>
        <IntroText as="h2" size="h5">
          {introText}
        </IntroText>
      </Col>
    </Row>
  </StyledHeaderPost>
)

HeaderPost.propTypes = {
  date: PropTypes.string,
  introText: PropTypes.string,
  path: PropTypes.string,
  title: PropTypes.string
}

const StyledHeaderPost = styled.header`
  display: flex;
  justify-content: center;
  padding-top: 9.125rem; /* 146px */
  padding-right: ${({ theme }) => theme.spacing.default};
  padding-left: ${({ theme }) => theme.spacing.default};
`
const Col = styled(Col_)`
  margin-bottom: 0;
`
const Title = styled(Typography)`
  ${media.tablet`
    font-size: 10.5vw;
  `}
`
const Meta = styled.div`
  display: flex;
  margin-bottom: ${({ theme }) => theme.spacing.default};
  width: 100%;
`
const BlogShare = styled(BlogShare_)`
  border-left: 1px solid #ddd;
  margin-left: ${({ theme }) => theme.spacing.small};
  padding-left: ${({ theme }) => theme.spacing.small};
`
const IntroText = styled(Typography)`
  color: ${({ theme }) => theme.palette.primary};
`
