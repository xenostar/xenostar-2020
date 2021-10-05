import PropTypes from 'prop-types'
import { StoreProvider } from 'easy-peasy'
import { HelmetProvider } from 'react-helmet-async'
import {
  StoreSync,
  SEO,
  StyleReset,
  StyleGlobal,
  TopBar,
  MobileNav
} from 'components'
import { ThemeProvider } from 'providers'
import { store } from 'utils'
import 'normalize.css'

const Layout = ({ children, path }) => (
  <StoreProvider store={store}>
    <HelmetProvider>
      <ThemeProvider>
        <StoreSync path={path} />
        <SEO />
        <StyleReset />
        <StyleGlobal />
        <TopBar path={path} />
        <MobileNav />
        {children}
      </ThemeProvider>
    </HelmetProvider>
  </StoreProvider>
)

Layout.propTypes = {
  children: PropTypes.node,
  path: PropTypes.string
}

export default Layout
