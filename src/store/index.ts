import { configureStore } from '@reduxjs/toolkit'
import modalCardapioSlice from './reducer/modalCardapio'

export const store = configureStore({
  reducer: {
    modalCardapioSliceStore: modalCardapioSlice
  }
})

export type RootReducer = ReturnType<typeof store.getState>
