import PropTypes from 'prop-types'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { Anchor as Anchor_ } from 'components'
import { media, routes } from 'utils'

export const PortfolioGridItem = ({
  area = false,
  featuredImage: { fluid, alt = '', title = '' },
  name = 'Portfolio Item Name',
  number,
  slug = ''
}) => (
  <StyledPortfolioGridItem
    area={area}
    number={'a' + (number + 1)}
    className={'a' + number}
  >
    <Anchor to={routes.portfolio.url + '/' + slug}>
      <Image fluid={fluid} alt={alt} title={title} />
      <Name>{name}</Name>
    </Anchor>
  </StyledPortfolioGridItem>
)

PortfolioGridItem.propTypes = {
  area: PropTypes.bool,
  featuredImage: PropTypes.exact({
    fluid: PropTypes.object,
    alt: PropTypes.string,
    title: PropTypes.string
  }),
  name: PropTypes.string,
  number: PropTypes.number,
  slug: PropTypes.string
}

const StyledPortfolioGridItem = styled.div`
  display: block;
  grid-area: ${({ area, number }) => (area ? number : '')};
  ${media.tablet`
    grid-area: auto;
  `}
`
const Anchor = styled(Anchor_)`
  display: block;
  position: relative;
  transition: ${props => props.theme.transition.default};
  :active {
    transform: ${props => props.theme.transforms.active};
  }
`
const Name = styled.div`
  font-family: ${props => props.theme.fonts.family.bebasNeue};
  font-size: 1.2em;
  position: absolute;
  bottom: 100%;
  left: 100%;
  line-height: 28px;
  opacity: 0;
  pointer-events: none;
  transform: translateY(-6px) rotate(90deg) translateZ(0);
  transform-origin: bottom left;
  transition: ${props => props.theme.transition.default};
  white-space: nowrap;
  z-index: 20;
  ${Anchor}:hover & {
    opacity: 1;
    transform: translateY(0px) rotate(90deg) translateZ(0);
  }
`
const Image = styled(Img)`
  border-radius: ${props => props.theme.shape.borderRadius.default};
  transition: ${props => props.theme.transition.default};
  :hover {
    box-shadow: ${props => props.theme.palette.boxShadow};
    z-index: 10;
  }
`
