import { createSlice } from '@reduxjs/toolkit'

const initialState = false

const modalCardapioSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    abrirFechar: (state) => {
      state = !state
      return state
    }
  }
})

export const { abrirFechar } = modalCardapioSlice.actions
export default modalCardapioSlice.reducer
