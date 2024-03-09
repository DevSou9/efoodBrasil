import ModeloCard from './ModeloCard'

export type ModeloCardPerfil = Omit<
  ModeloCard,
  'destaque' | 'typeDish' | 'nota'
>
