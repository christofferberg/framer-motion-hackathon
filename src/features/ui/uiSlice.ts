import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { useTypedSelector } from '@app/store/store'

type ModalViewTypes = 'hackathon_brief'

interface UIState {
  displayMainMenu: boolean
  displayModal: boolean
  displaySidebar: boolean
  modalView: ModalViewTypes
}

const initialState: UIState = {
  displayMainMenu: false,
  displayModal: false,
  displaySidebar: false,
  modalView: 'hackathon_brief',
}

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    openMainMenu: (state) => {
      state.displayMainMenu = true
    },
    closeMainMenu: (state) => {
      state.displayMainMenu = false
    },
    toggleMainMenu: (state) => {
      state.displayMainMenu = !state.displayMainMenu
    },
    openModal: (state, action: PayloadAction<ModalViewTypes | undefined>) => {
      const { payload } = action

      if (payload) {
        state.modalView = payload
      }

      state.displayModal = true
    },
    closeModal: (state) => {
      state.displayModal = false
    },
    setModalView: (state, action: PayloadAction<ModalViewTypes>) => {
      state.modalView = action.payload
    },
    openSidebar: (state) => {
      state.displaySidebar = true
    },
    closeSidebar: (state) => {
      state.displaySidebar = false
    },
    toggleSidebar: (state) => {
      state.displaySidebar = !state.displaySidebar
    },
  },
})

// Actions
export const {
  closeMainMenu,
  closeModal,
  closeSidebar,
  openMainMenu,
  openModal,
  openSidebar,
  setModalView,
  toggleMainMenu,
  toggleSidebar,
} = uiSlice.actions

// Selector hooks
export const useUI = (): UIState => useTypedSelector((state) => state.ui)

export default uiSlice.reducer
