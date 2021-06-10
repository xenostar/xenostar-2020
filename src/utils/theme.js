export const theme = {
  breakpoints: {
    ultrawide: 1920,
    desktop: 1200,
    tablet: 960,
    phablet: 720,
    phone: 480
  },
  colors: {
    // primary: '#90c7a8',
    // gradient: 'linear-gradient(to right, #ec56f4, #90c7a8)',
    // primary: '#90c7a8',
    // gradient: 'linear-gradient(to right, #49a19a, #90c7a8)',
    // primary: '#90c7a8',
    // gradient: 'linear-gradient(to right, #379189, #90c7a8)',
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
    background: {
      default: 'rgba(255, 255, 255, 1)', // #fff
      oneDarkPro: 'rgba(40, 44, 52, 1)' // #282c34
    },
    common: {
      black: 'rgba(0, 0, 0, 1)', // #000
      white: 'rgba(255, 255, 255, 1)' // #fff
    },
    primary: '#90c7a8',
    secondary: 'rgba(34, 34, 34, 1)', // #222
    tertiary: 'rgba(35, 33, 33, 1)', // #232121
    gradient: 'linear-gradient(to right, #90c7a8, #c7e3d3)',
    lightGreen: 'rgba(199, 227, 211, 1)', // #c7e3d3
    lightGrey: 'rgba(153, 153, 153, 1)', // #999
    transparent: 'rgba(0, 0, 0, 0)', // Transparent
    boxShadow: '0 10px 20px -10px rgba(0, 0, 0, 1)',
    oneDarkPro: 'rgba(171, 178, 191, 1)' //#abb2bf
  },
  fonts: {
    defaultLineHeight: '1.5',
    defaultSize: '1.25em',
    defaultStyle: 'normal',
    defaultWeight: '400',
    h1Size: '5em',
    h2Size: '2.5em',
    h3Size: '2em',
    h4Size: '1.5em',
    h5Size: '1.25em',
    h6Size: '1em',
    defaults: {
      lineHeight: 1.5,
      size: '1.25em',
      style: 'normal',
      weight: 400
    },
    family: {
      bebasNeue: `'Bebas Neue', cursive`,
      montserrat: `'Montserrat', sans-serif`,
      openSans: `'Open Sans', sans-serif`
    },
    size: {
      h1: '5em',
      h2: '2.5em',
      h3: '2em',
      h4: '1.5em',
      h5: '1.25em',
      h6: '1em'
    },
    weight: {
      regular: 400,
      semiBold: 600,
      bold: 700,
      extraBold: 800,
      blackBold: 900
    }
  },
  layout: {
    maxWidth: '60vw',
    maxWidthFixed: '56.25em', // 900px
    maxWidthFixedUltrawide: '76em', // 1216px
    topBar: '6px'
  },
  shape: {
    borderRadius: {
      small: '1px',
      default: '6px'
    }
  },
  spacing: {
    micro: '0.3125rem', // 5px,
    tiny: '0.625rem', // 10px,
    small: '0.9375rem', // 15px
    default: '1.875rem', // 30px,
    big: '3.75rem', // 60px,
    huge: '5.625rem', // 90px
    giant: '7.5rem' // 120px
  },
  transforms: {
    active: 'translateY(3px)'
  },
  transitions: {
    durations: {
      fast: '0.2s',
      default: '0.3s',
      slow: '0.4s'
    },
    easing: {
      default: 'ease'
    },
    fast: '0.2s all ease',
    default: '0.3s all ease',
    slow: '0.4s all ease'
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
