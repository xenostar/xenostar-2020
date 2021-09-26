export const theme = {
  breakpoints: {
    ultrawide: 1920,
    desktop: 1200,
    tablet: 960,
    phablet: 720,
    phone: 480
  },
  fonts: {
    defaults: {
      lineHeight: 1.6,
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
      default: '6px',
      large: '12px'
    }
  },
  spacing: {
    atom: '0.125rem', // 2px,
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
  transition: {
    duration: {
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

export const darkTheme = {
  ...theme,
  palette: {
    background: {
      default: '#181a1b', // #181a1b
      oneDarkPro: 'rgba(40, 44, 52, 1)' // #282c34
    },
    common: {
      black: 'rgba(0, 0, 0, 1)', // #000
      white: 'rgba(255, 255, 255, 1)', // #fff
      transparent: 'rgba(0, 0, 0, 0)' // Transparent
    },
    text: {
      primary: '#e8e6e3', // #e8e6e3
      secondary: 'rgba(153, 153, 153, 1)', // #999
      tertiary: 'rgba(34, 34, 34, 1)' // #222
    },
    primary: '#90c7a8',
    secondary: 'rgba(34, 34, 34, 1)', // #222
    tertiary: 'rgba(35, 33, 33, 1)', // #232121
    gradient: 'linear-gradient(to right, rgb(51, 100, 79), rgb(34, 68, 53))',
    lightGreen: 'rgb(34, 68, 53)', // #c7e3d3
    lightGrey: 'rgba(153, 153, 153, 1)', // #999
    boxShadow: '0 10px 20px -10px rgba(0, 0, 0, 1)'
  }
}

// linear-gradient(to right, rgb(51, 100, 79), rgb(34, 68, 53)), linear-gradient(rgb(34, 68, 53), rgb(34, 68, 53))

export const lightTheme = {
  ...theme,
  palette: {
    background: {
      default: 'rgba(255, 255, 255, 1)', // #fff
      oneDarkPro: 'rgba(40, 44, 52, 1)' // #282c34
    },
    common: {
      black: 'rgba(0, 0, 0, 1)', // #000
      white: 'rgba(255, 255, 255, 1)', // #fff
      transparent: 'rgba(0, 0, 0, 0)' // Transparent
    },
    text: {
      primary: 'rgba(34, 34, 34, 1)', // #222
      secondary: 'rgba(153, 153, 153, 1)', // #999
      tertiary: 'rgba(34, 34, 34, 1)' // #222
    },
    primary: '#90c7a8',
    secondary: 'rgba(34, 34, 34, 1)', // #222
    tertiary: 'rgba(35, 33, 33, 1)', // #232121
    gradient: 'linear-gradient(to right, #90c7a8, #c7e3d3)',
    lightGreen: 'rgba(199, 227, 211, 1)', // #c7e3d3
    lightGrey: 'rgba(153, 153, 153, 1)', // #999
    boxShadow: '0 10px 20px -10px rgba(0, 0, 0, 1)'
  }
}
