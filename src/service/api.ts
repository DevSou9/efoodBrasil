import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { cardapio } from '../models/ModeloCardPerfil'
import ModeloCard from '../models/ModeloCard'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood/restaurantes'
  }),
  endpoints: (builder) => ({
    getDestaqueEfood: builder.query<cardapio, void>({
      query: () => 'destaque'
    }),

    getCardapioRestaurante: builder.query<ModeloCard, string>({
      query: (id) => `/${id}`
    }),

    getRestaurante: builder.query<ModeloCard, string>({
      query: (id) => `/${id}`
    }),

    getTodosRestaurantes: builder.query<ModeloCard[], void>({
      query: () => ''
    })
  })
})

export const {
  useGetDestaqueEfoodQuery,
  useGetRestauranteQuery,
  useGetTodosRestaurantesQuery,
  useGetCardapioRestauranteQuery
} = api
export default api
