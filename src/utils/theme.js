export const theme = {
  colors: {
    // primary: '#90c7a8',
    // gradient: 'linear-gradient(to right, #ec56f4, #90c7a8)',
    // primary: '#90c7a8',
    // gradient: 'linear-gradient(to right, #49a19a, #90c7a8)',
    // primary: '#90c7a8',
    // gradient: 'linear-gradient(to right, #379189, #90c7a8)',
    primary: '#90c7a8',
    gradient: 'linear-gradient(to right, #90c7a8, #c7e3d3)',
    // primary: '#90c7a8',
    // gradient: 'linear-gradient(to right, #8764b2, #90c7a8)',
    // primary: '#90c7a8',
    // gradient: 'linear-gradient(to right, #6f43a4, #90c7a8)',
    // primary: '#00cdac',
    // gradient: 'linear-gradient(to right, #02aab0, #00cdac)',
    // primary: '#43cea2',
    // gradient: 'linear-gradient(to right, #185a9d, #43cea2)',
    // primary: '#5b86e5',
    // gradient: 'linear-gradient(to right, #36d1dc, #5b86e5)',
    secondary: 'rgb(34, 34, 34, 1)', // #222
    tertiary: 'rgba(35, 33, 33, 1)', // #232121
    lightBlue: 'rgba(199, 227, 211, 1)', // #c7e3d3
    background: 'rgba(255, 255, 255, 1)', // #fff
    lightGrey: 'rgba(153, 153, 153, 1)', // #999
    transparent: 'rgba(0, 0, 0, 0)', // Transparent
    white: 'rgba(255, 255, 255, 1)', // #fff
    black: 'rgba(0, 0, 0, 1)', // #000
    boxShadow: '0 10px 20px -10px rgba(0, 0, 0, 1)'
  },
  fonts: {
    bebasNeue: `'Bebas Neue', cursive`,
    openSans: `'Open Sans', sans-serif`,
    montserrat: `'Montserrat', sans-serif`,
    boldSemi: '600',
    bold: '700',
    boldExtra: '800',
    boldBlack: '900',
    defaultLineHeight: '1.5',
    defaultSize: '1.25em',
    defaultStyle: 'normal',
    defaultWeight: '400',
    h1Size: '5em',
    h2Size: '2.5em',
    h3Size: '2em',
    h4Size: '1.5em',
    h5Size: '1.25em',
    h6Size: '1em'
  },
  transforms: {
    active: 'translateY(3px)'
  },
  transitions: {
    default: '0.3s all ease',
    fast: '0.2s all ease',
    slow: '0.4s all ease'
  },
  layout: {
    borderRadius: '6px',
    borderRadiusSmall: '1px',
    maxWidth: '60vw',
    maxWidthFixed: '62.5rem', // 1000px
    spacingTiny: '0.625rem', // 10px
    spacingSmall: '0.9375rem', // 15px
    spacing: '1.875rem', // 30px
    spacingBig: '3.75rem', // 60px
    spacingHuge: '5.625rem', // 90px
    spacingGiant: '7.5rem', // 120px
    topBar: '6px'
  },
  breakpoints: {
    desktop: 1200,
    tablet: 960,
    phone: 480
  },
  zIndex: {
    mobileStepper: 1000,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500
  }
}
