import { useEffect } from 'react'
import { useStoreActions } from 'easy-peasy'

export const StoreSync = ({ location: { pathname } }) => {
  const setCurrentPage = useStoreActions(actions => actions.page.setCurrentPage)
  const setPathName = useStoreActions(actions => actions.page.setPathName)

  useEffect(() => {
    const formattedPathName = pathname.replace(/\//g, '')
    setCurrentPage(formattedPathName)
    setPathName(pathname)
  }, [pathname, setCurrentPage, setPathName])

  return null
}
