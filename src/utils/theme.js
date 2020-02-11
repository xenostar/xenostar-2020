export const theme = {
  colors: {
    primary: 'rgb(144, 199, 168, 1)', // #90c7a8
    secondary: 'rgb(34, 34, 34, 1)', // #222
    tertiary: 'rgba(35, 33, 33, 1)', // #232121
    lightBlue: 'rgba(199, 227, 211, 1)', // #C7e3d3
    background: 'rgba(255, 255, 255, 1)', // #fff
    transparent: 'rgba(0, 0, 0, 0)', // Transparent
    white: 'rgba(255, 255, 255, 1)', // #fff
    black: 'rgba(0, 0, 0, 1)', // #000
  },
  fonts: {
    bebasNeue: `'Bebas Neue', cursive`,
    openSans: `'Open Sans', sans-serif`,
    ubuntu: `'Ubuntu', sans-serif`,
    montserrat: `'Montserrat', sans-serif`,
    lineHeight: '1.5',
    boldSemi: '600',
    bold: '700',
    boldExtra: '800',
    boldBlack: '900',
    defaultSize: '1.25em',
    defaultStyle: 'normal',
    defaultWeight: '400',
  },
  transforms: {
    active: 'translateY(3px)',
  },
  transitions: {
    default: '0.3s all ease',
    fast: '0.2s all ease',
    slow: '0.4s all ease',
  },
  layout: {
    // borderRadius: '0',
    borderRadius: '6px',
    borderRadiusSmall: '1px',
    maxWidth: '60vw',
    maxWidthFixed: '62.5rem', // 1000px
    padding: '1.875rem', // 30px
    paddingBig: '3.75rem', // 60px
    paddingHuge: '5.625rem', // 90px
    paddingGiant: '7.5rem', // 120px
    margin: '1.875rem', // 30px
    marginBig: '3.75rem', // 60px
    marginHuge: '5.625rem', // 90px
    marginGiant: '7.5rem', // 120px
    topBar: '5px'
  },
  breakpoints: {
    desktop: 1200,
    tablet: 960,
    phone: 480
  }
}
