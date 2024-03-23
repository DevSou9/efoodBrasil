import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { cardapio } from '../models/ModeloCardPerfil'
import ModeloCard from '../models/ModeloCard'

type Product = {
  id: number
  price: number
}

type dadosParaRequisicao = {
  products: Product[]

  // products: [
  //   {
  //     id: 1
  //     price: 0
  //   }
  // ]
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
  payment: {
    card: {
      name: string
      number: string
      code: number
      expires: {
        month: number
        year: number
      }
    }
  }
}

type respostaRequisicao = {
  orderId: string
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood/'
  }),
  endpoints: (builder) => ({
    getDestaqueEfood: builder.query<cardapio, void>({
      query: () => 'restaurantes/destaque'
    }),

    getCardapioRestaurante: builder.query<ModeloCard, string>({
      query: (id) => `restaurantes/${id}`
    }),

    getRestaurante: builder.query<ModeloCard, string>({
      query: (id) => `restaurantes/${id}`
    }),

    getTodosRestaurantes: builder.query<ModeloCard[], void>({
      query: () => 'restaurantes'
    }),
    compra: builder.mutation<respostaRequisicao, dadosParaRequisicao>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    })
  })
})

export const {
  useGetDestaqueEfoodQuery,
  useGetRestauranteQuery,
  useGetTodosRestaurantesQuery,
  useGetCardapioRestauranteQuery,
  useCompraMutation
} = api
export default api
