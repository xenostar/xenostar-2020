import { useEffect } from 'react'
// import { useLocation } from 'react-router-dom'

export const Focus = () => {
  // const { pathname } = useLocation()

  useEffect(() => {
    window.focus()
    console.log("Window focused.")
    // window.scrollTo(0,0)
    // window.scrollTo({ behavior: 'smooth', top: 0 })
    // window.scrollTo({ behavior: 'smooth', top: myRef.current.offsetTop })
  }, [])

  return null
}
