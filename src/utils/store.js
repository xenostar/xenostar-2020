import { action, createStore } from 'easy-peasy'

export const store = createStore({
  theme: {
    isDarkMode: false,
    toggleDarkMode: action((state, isEnabled = null) => {
      state.isDarkMode = isEnabled ? isEnabled : !state.isDarkMode
    })
  },
  page: {
    currentPage: '',
    setCurrentPage: action((state, newPage) => {
      state.currentPage = newPage
    }),
    pathName: '',
    setPathName: action((state, newPathName) => {
      state.pathName = newPathName
    })
  },
  nav: {
    isNavOpen: false,
    openNav: action(state => {
      state.isNavOpen = true
    }),
    closeNav: action(state => {
      state.isNavOpen = false
    })
  }
})
