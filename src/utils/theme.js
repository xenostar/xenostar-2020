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
    theme: {
      color: '0.3s color ease',
      background: '0.3s background ease',
      backgroundColor: '0.3s background-color ease',
      link: '0.2s background ease-out'
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
      default: 'rgba(24, 26, 27, 1)',
      footer: 'rgba(27, 30, 31, 1)',
      oneDarkPro: 'rgba(40, 44, 52, 1)',
      topBar: 'rgba(24, 26, 27, 0.95)'
    },
    common: {
      black: 'rgba(0, 0, 0, 1)',
      white: 'rgba(255, 255, 255, 1)',
      transparent: 'rgba(0, 0, 0, 0)'
    },
    text: {
      primary: '#e8e6e3',
      secondary: 'rgba(153, 153, 153, 1)',
      tertiary: 'rgba(34, 34, 34, 1)'
    },
    primary: '#90c7a8',
    secondary: 'rgba(34, 34, 34, 1)',
    tertiary: 'rgba(35, 33, 33, 1)',
    gradient:
      'linear-gradient(to right, rgba(51, 100, 79, 1), rgba(34, 68, 53, 1))',
    lightGreen: 'rgba(34, 68, 53, 1)',
    lightGrey: 'rgba(153, 153, 153, 1)',
    boxShadow: {
      default: '0 10px 20px -5px rgba(0, 0, 0, 1)',
      topBar: '0 0 8px rgba(0, 0, 0, 0.4)'
    }
  }
}

export const lightTheme = {
  ...theme,
  palette: {
    background: {
      default: 'rgba(255, 255, 255, 1)',
      footer: 'rgba(249, 249, 249, 1)',
      oneDarkPro: 'rgba(40, 44, 52, 1)',
      topBar: 'rgba(255, 255, 255, 0.95)'
    },
    common: {
      black: 'rgba(0, 0, 0, 1)',
      white: 'rgba(255, 255, 255, 1)',
      transparent: 'rgba(0, 0, 0, 0)'
    },
    text: {
      primary: 'rgba(34, 34, 34, 1)',
      secondary: 'rgba(153, 153, 153, 1)',
      tertiary: 'rgba(34, 34, 34, 1)'
    },
    primary: '#90c7a8',
    secondary: 'rgba(34, 34, 34, 1)',
    tertiary: 'rgba(35, 33, 33, 1)',
    gradient: 'linear-gradient(to right, #90c7a8, rgba(199, 227, 211, 1))',
    lightGreen: 'rgba(199, 227, 211, 1)',
    lightGrey: 'rgba(153, 153, 153, 1)',
    boxShadow: {
      default: '0 10px 20px -10px rgba(0, 0, 0, 1)',
      topBar: '0 0 8px rgba(0, 0, 0, 0.1)'
    }
  }
}
