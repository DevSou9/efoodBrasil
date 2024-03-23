import { createSlice } from '@reduxjs/toolkit'

const initialState = false

const statusPagamentoSlice = createSlice({
  name: 'statusPagamento',
  initialState,
  reducers: {
    alterarStautsPagamento: (state) => (state = !state)
  }
})

export const { alterarStautsPagamento } = statusPagamentoSlice.actions
export default statusPagamentoSlice.reducer
