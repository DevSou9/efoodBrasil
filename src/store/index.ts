import { configureStore } from '@reduxjs/toolkit'
import modalCardapioSlice from './reducer/modalCardapio'
import dadosCardCardapioSlice from './reducer/modalDadosCardPefil'
import api from '../service/api'

export const store = configureStore({
  reducer: {
    modalCardapioSliceStore: modalCardapioSlice,
    dadosCardCardapioSliceStore: dadosCardCardapioSlice,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
