import PropTypes from 'prop-types'
import styled from 'styled-components'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Anchor as Anchor_ } from 'components'
import { media, routes } from 'utils'

export const PortfolioGridItem = ({
  area = false,
  image: { gatsbyImageData, alt = '', title = '' },
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
      <Image image={gatsbyImageData} alt={alt} title={title} />
      <Name>{name}</Name>
    </Anchor>
  </StyledPortfolioGridItem>
)

PortfolioGridItem.propTypes = {
  area: PropTypes.bool,
  image: PropTypes.exact({
    gatsbyImageData: PropTypes.object,
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
  transition: ${({ theme }) => theme.transition.default};
  :active {
    transform: ${({ theme }) => theme.transforms.active};
  }
`
const Name = styled.div`
  font-family: ${({ theme }) => theme.fonts.family.bebasNeue};
  font-size: 1.2em;
  position: absolute;
  bottom: 100%;
  left: 100%;
  line-height: 28px;
  opacity: 0;
  pointer-events: none;
  transform: translateY(-6px) rotate(90deg) translateZ(0);
  transform-origin: bottom left;
  transition: ${({ theme }) => theme.transition.default};
  white-space: nowrap;
  z-index: 20;
  ${Anchor}:hover & {
    opacity: 1;
    transform: translateY(0px) rotate(90deg) translateZ(0);
  }
`
const Image = styled(GatsbyImage)`
  border-radius: ${({ theme }) => theme.shape.borderRadius.default};
  transition: ${({ theme }) => theme.transition.default};
  z-index: 10;
  :hover {
    box-shadow: ${({ theme }) => theme.palette.boxShadow.default};
  }
`
