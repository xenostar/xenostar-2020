import { useMedia } from 'hooks'

export const usePrefersDarkMode = () => {
  return useMedia(['(prefers-color-scheme: dark)'], [true], false)
}
