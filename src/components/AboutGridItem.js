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
  box-shadow: ${props => props.theme.colors.boxShadow};
  border-radius: ${props => props.theme.layout.borderRadius};
  transition: ${props => props.theme.transitions.default};
  z-index: 10;
`
