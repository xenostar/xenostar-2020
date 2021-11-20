import { useEffect } from 'react'
import { useStoreActions, useStoreState } from 'easy-peasy'

import { useLocalStorage, usePrefersDarkMode } from 'hooks'

export const useDarkMode = () => {
  const theme = useStoreState(state => state.theme.theme)
  const setTheme = useStoreActions(actions => actions.theme.setTheme)
  const [localTheme, setLocalTheme] = useLocalStorage('theme')
  const isDarkModePreferred = usePrefersDarkMode()
  const isDarkMode = theme === 'dark'

  const handleToggleTheme = () => {
    const mode = theme === 'dark' ? 'light' : 'dark'
    setLocalTheme(mode)
    setTheme(mode)
  }

  useEffect(() => {
    const preference = localTheme
      ? localTheme
      : isDarkModePreferred
      ? 'dark'
      : 'light'

    setTheme(preference)
  }, [isDarkModePreferred, setTheme, localTheme])

  return { handleToggleTheme, isDarkMode, theme }
}
