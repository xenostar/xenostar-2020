import { createStore, action } from 'easy-peasy'

export const store = createStore({
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
    openNav: action((state) => {
      state.isNavOpen = true
    }),
    closeNav: action((state) => {
      state.isNavOpen = false
    })
  }
})
