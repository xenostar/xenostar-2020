import PropTypes from 'prop-types'
import { useEffect } from 'react'
import { useStoreActions } from 'easy-peasy'

export const StoreSync = ({ path }) => {
  const setCurrentPage = useStoreActions(actions => actions.page.setCurrentPage)
  const setPathName = useStoreActions(actions => actions.page.setPathName)

  useEffect(() => {
    const formattedPathName = path.replace(/\//g, '')
    setCurrentPage(formattedPathName)
    setPathName(path)
  }, [path, setCurrentPage, setPathName])

  return null
}

StoreSync.propTypes = {
  path: PropTypes.string
}
