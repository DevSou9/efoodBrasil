import { createSlice } from '@reduxjs/toolkit'

const initialState = false

const cartAbrirFecharSlice = createSlice({
  name: 'cartAbrirFechar',
  initialState,
  reducers: {
    abrirFecharCart: (state) => {
      return (state = !state)
    }
  }
})

export const { abrirFecharCart } = cartAbrirFecharSlice.actions
export default cartAbrirFecharSlice.reducer
