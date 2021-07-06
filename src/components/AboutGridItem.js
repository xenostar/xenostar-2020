import PropTypes from 'prop-types'
import styled from 'styled-components'
import Img from 'gatsby-image'

export const AboutGridItem = ({ image: { fluid, alt = '', title = '' } }) => (
  <StyledAboutGridItem>
    <Image fluid={fluid} alt={alt} title={title} />
  </StyledAboutGridItem>
)

AboutGridItem.propTypes = {
  image: PropTypes.exact({
    fluid: PropTypes.object,
    alt: PropTypes.string,
    title: PropTypes.string
  }).isRequired
}

const StyledAboutGridItem = styled.div`
  display: block;
  width: 100%;
`
const Image = styled(Img)`
  box-shadow: ${({ theme }) => theme.palette.boxShadow};
  border-radius: ${({ theme }) => theme.shape.borderRadius.default};
  transition: ${({ theme }) => theme.transition.default};
  z-index: 10;
`
