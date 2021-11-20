import { useStoreActions, useStoreState } from 'easy-peasy'

export const useDarkMode = () => {
  const isDarkMode = useStoreState(state => state.theme.isDarkMode)
  const toggleDarkMode = useStoreActions(
    actions => actions.theme.toggleDarkMode
  )

  const handleToggleDarkMode = () => {
    // window.localStorage.setItem('theme', mode)
    toggleDarkMode()
  }

  // useEffect(() => {
  //   effect
  //   return () => {
  //     cleanup
  //   }
  // }, [input])

  return [isDarkMode, handleToggleDarkMode]
}
