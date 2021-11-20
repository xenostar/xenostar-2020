import { useStoreActions, useStoreState } from 'easy-peasy'

export const useDarkMode = () => {
  const isDarkMode = useStoreState(state => state.theme.isDarkMode)
  const toggleDarkMode = useStoreActions(
    actions => actions.theme.toggleDarkMode
  )

  const handleToggleDarkMode = () => {
    toggleDarkMode()
  }

  return [isDarkMode, handleToggleDarkMode]
}
