import { theme } from 'utils'
import { css } from 'styled-components'
import { routes } from 'utils'

export const isBlogPost = path => {
  const pageParams = getPageParams(path)
  return pageParams[0] === routes.blog.substr(1) && pageParams[1]
}

export const getPageParams = path => path.substr(1).split('/')

export const getRandomInt = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  //The maximum is exclusive and the minimum is inclusive
  return Math.floor(Math.random() * (max - min)) + min
}

/**
 * Iterate through the sizes and create a media template
 */
export const media = Object.keys(theme.breakpoints).reduce(
  (accumulator, label) => {
    // use em in breakpoints to work properly cross-browser and support users
    // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
    const emSize = theme.breakpoints[label] / 16
    accumulator[label] = (...args) => css`
      @media (max-width: ${emSize}em) {
        ${css(...args)}
      }
    `
    return accumulator
  },
  {}
)
