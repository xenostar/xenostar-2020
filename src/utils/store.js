import { createStore, action } from 'easy-peasy'

export const store = createStore({
  page: {
    currentPage: '',
    setCurrentPage: action((state, newPage) => state.currentPage = newPage)
  },
  nav: {
    openStatus: false,
    setOpenStatus: action((state) => state.openStatus = !state.openStatus)
  }
})
