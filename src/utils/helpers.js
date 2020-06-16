import { css } from 'styled-components'
import { routes, theme } from 'utils'

/**
 * What kind of sub page are we on?
 * @param {*} path Current page path supplied from Gatsby.
 * @param {*} route The route you're trying to match to.
 */
export const isSubPage = (path, route) => {
  const pageParams = getPageParams(path)
  return pageParams[0] === routes[route.substr(1)].substr(1) && pageParams[1]
}

/**
 * Break down URLs into easy to parse chunks, removes initial slash.
 * @param {*} path Accepts a path in the format of '/blog/test-post'.
 */
export const getPageParams = path => path.substr(1).split('/')

/**
 * Generate a random integer, geez man.
 * @param {Number} min A minimum number range.
 * @param {Number} max A maximum number range.
 */
export const getRandomInt = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  //The maximum is exclusive and the minimum is inclusive
  return Math.floor(Math.random() * (max - min)) + min
}

/**
 * Iterate through the sizes and create a media query.
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
