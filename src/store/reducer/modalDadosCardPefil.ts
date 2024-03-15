import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { cardapio } from '../../models/ModeloCardPerfil'

type initialStateCardapio = {
  itens: cardapio[]
}
const initialState: initialStateCardapio = { itens: [] }

const dadosCardCardapioSlice = createSlice({
  name: 'dadosCardCardapio',
  initialState,
  reducers: {
    dadosCard: (state, action: PayloadAction<cardapio>) => {
      const item = action.payload
      state.itens.splice(0, state.itens.length)
      state.itens.push(item)
    }
  }
})

export const { dadosCard } = dadosCardCardapioSlice.actions
export default dadosCardCardapioSlice.reducer
