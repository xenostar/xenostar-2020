import PropTypes from 'prop-types'
import styled from 'styled-components'
import Img from 'gatsby-image'

export const ProjectItem = ({ image: { fluid, alt = '', title = '' } }) => (
  <StyledProjectItem>
    <Image fluid={fluid} alt={alt} title={title} />
  </StyledProjectItem>
)

ProjectItem.propTypes = {
  image: PropTypes.exact({
    fluid: PropTypes.object,
    alt: PropTypes.string,
    title: PropTypes.string
  }).isRequired
}

const StyledProjectItem = styled.div`
  display: block;
  width: 100%;
`
const Image = styled(Img)`
  box-shadow: ${props => props.theme.colors.boxShadow};
  border-radius: ${props => props.theme.shape.borderRadius.default};
  transition: ${props => props.theme.transitions.default};
  z-index: 10;
`
