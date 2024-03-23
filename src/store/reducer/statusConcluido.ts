import { createSlice } from '@reduxjs/toolkit'

const initialState = false

const statusConcluidoSlice = createSlice({
  name: 'statusConcluido',
  initialState,
  reducers: {
    alterarStatusConcluido: (state) => (state = !state)
  }
})

export const { alterarStatusConcluido } = statusConcluidoSlice.actions
export default statusConcluidoSlice.reducer
