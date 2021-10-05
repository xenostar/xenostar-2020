import { useStoreActions, useStoreState } from 'easy-peasy'

export const ThemeToggler = () => {
  const isDarkMode = useStoreState(state => state.theme.isDarkMode)
  const toggleDarkMode = useStoreActions(
    actions => actions.theme.toggleDarkMode
  )

  const handleToggleDarkMode = () => {
    toggleDarkMode()
  }

  return <div onClick={handleToggleDarkMode}>{isDarkMode ? 'L' : 'D'}</div>
}
