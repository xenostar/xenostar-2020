import PropTypes from 'prop-types'
import styled from 'styled-components'

export const Page = ({ children }) => <StyledPage>{children}</StyledPage>

Page.propTypes = {
  children: PropTypes.node
}

const StyledPage = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  z-index: 1;

  h1 a,
  h2 a,
  h3 a,
  h4 a,
  h5 a,
  h6 a,
  p a,
  li a {
    background-image: ${({ theme }) => theme.palette.gradient},
      linear-gradient(
        ${({ theme }) => theme.palette.lightGreen},
        ${({ theme }) => theme.palette.lightGreen}
      );
    background-position: bottom 0% left;
    background-repeat: no-repeat;
    background-size: 0 30%, 100% 30%;
    border-radius: ${({ theme }) => theme.shape.borderRadius.small};
    transition: 0.2s background ease-out;
    :hover {
      background-size: 100% 30%, 100% 30%;
    }
  }

  p a,
  li a {
    font-weight: ${({ theme }) => theme.fonts.weight.bold};
  }
`
