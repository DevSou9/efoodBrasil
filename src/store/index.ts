import { configureStore } from '@reduxjs/toolkit'
import modalCardapioSlice from './reducer/modalCardapio'
import dadosCardCardapioSlice from './reducer/modalDadosCardPefil'

export const store = configureStore({
  reducer: {
    modalCardapioSliceStore: modalCardapioSlice,
    dadosCardCardapioSliceStore: dadosCardCardapioSlice
  }
})

export type RootReducer = ReturnType<typeof store.getState>
