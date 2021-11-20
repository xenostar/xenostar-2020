import { useEffect } from 'react'
import { useStoreActions, useStoreState } from 'easy-peasy'

import { usePrefersDarkMode } from 'hooks'

export const useDarkMode = () => {
  const theme = useStoreState(state => state.theme.theme)
  const setTheme = useStoreActions(actions => actions.theme.setTheme)
  const isDarkModePreferred = usePrefersDarkMode()
  const isDarkMode = theme === 'dark'

  const handleToggleTheme = () => {
    const mode = theme === 'dark' ? 'light' : 'dark'
    window.localStorage.setItem('theme', mode)
    setTheme(mode)
  }

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme')
    const preference = localTheme
      ? localTheme
      : isDarkModePreferred
      ? 'dark'
      : 'light'

    setTheme(preference)
  }, [setTheme, isDarkModePreferred])

  return { handleToggleTheme, isDarkMode, theme }
}
