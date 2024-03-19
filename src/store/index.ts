import { configureStore } from '@reduxjs/toolkit'
import modalCardapioSlice from './reducer/modalCardapio'
import dadosCardCardapioSlice from './reducer/modalDadosCardPefil'
import api from '../service/api'
import dadosCartSlice from './reducer/cart'
import cartAbrirFecharSlice from './reducer/cartAbrirFechar'

export const store = configureStore({
  reducer: {
    modalCardapioSliceStore: modalCardapioSlice,
    dadosCardCardapioSliceStore: dadosCardCardapioSlice,
    dadosCartSlice,
    cartAbrirFecharSlice,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
