import { useEffect } from 'react'
import { useStoreActions } from 'easy-peasy'

export const StoreSync = ({ location }) => {
  const setCurrentPage = useStoreActions(actions => actions.page.setCurrentPage)

  useEffect(() => {
    const formattedPathName = location.pathname.replace(/\//g, '')
    setCurrentPage(formattedPathName)
  }, [location, setCurrentPage])

  return null
}
