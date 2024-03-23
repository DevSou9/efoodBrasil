import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type Delivery = {
  delivery: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: string
      number: number
      complement: string
    }
  }
}
export type initialStateDelivery = {
  enderecoUsuario: Delivery[]
}

const initialState: initialStateDelivery = { enderecoUsuario: [] }

export const CheckoutTempEntregaSlice = createSlice({
  name: 'CheckoutTempEntrega',
  initialState,
  reducers: {
    addEndereco: (state, action: PayloadAction<Delivery>) => {
      state.enderecoUsuario.splice(0, state.enderecoUsuario.length)
      state.enderecoUsuario.push(action.payload)
      return
    }
  }
})

export const { addEndereco } = CheckoutTempEntregaSlice.actions
export default CheckoutTempEntregaSlice.reducer
