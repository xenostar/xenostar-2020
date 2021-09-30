import PropTypes from 'prop-types'
import styled from 'styled-components'
import { GatsbyImage } from 'gatsby-plugin-image'

export const ProjectItem = ({
  image: { gatsbyImageData, alt = '', title = '' }
}) => (
  <StyledProjectItem>
    <Image image={gatsbyImageData} alt={alt} title={title} />
  </StyledProjectItem>
)

ProjectItem.propTypes = {
  image: PropTypes.exact({
    gatsbyImageData: PropTypes.object,
    alt: PropTypes.string,
    title: PropTypes.string
  }).isRequired
}

const StyledProjectItem = styled.div`
  display: block;
  width: 100%;
`
const Image = styled(GatsbyImage)`
  box-shadow: ${({ theme }) => theme.palette.boxShadow.default};
  border-radius: ${({ theme }) => theme.shape.borderRadius.default};
  transition: ${({ theme }) => theme.transition.default};
  z-index: 10;
`
