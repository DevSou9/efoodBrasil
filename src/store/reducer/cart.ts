import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { cardapio } from '../../models/ModeloCardPerfil'

type initialStateCardapio = {
  itens: cardapio[]
}
const initialState: initialStateCardapio = { itens: [] }

const dadosCartSlice = createSlice({
  name: 'dadosCardCardapio',
  initialState,
  reducers: {
    listCard: (state, action: PayloadAction<cardapio>) => {
      const item = action.payload
      state.itens.splice(0, state.itens.length)
      state.itens.push(item)
    },
    addCart: (state, action: PayloadAction<cardapio>) => {
      if (!state.itens.find((item) => item.id === action.payload.id)) {
        state.itens.push(action.payload)
        return
      }
      alert('O prato já foi inserido no carrinho')
    },
    removeCard: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((item) => item.id !== action.payload)
    },
    clear: (state) => {
      state.itens = []
    }
  }
})

export const { addCart, listCard, removeCard, clear } = dadosCartSlice.actions
export default dadosCartSlice.reducer
