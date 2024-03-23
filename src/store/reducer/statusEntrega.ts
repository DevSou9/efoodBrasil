import { createSlice } from '@reduxjs/toolkit'

const initialState = false

const statusEntregaSlice = createSlice({
  name: 'statusEntrega',
  initialState,
  reducers: {
    alterarStatusEntrega: (state) => (state = !state)
  }
})

export const { alterarStatusEntrega } = statusEntregaSlice.actions
export default statusEntregaSlice.reducer
