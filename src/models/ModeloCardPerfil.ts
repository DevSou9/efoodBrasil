export type cardapio = {
  id: number
  nome: string
  foto: string
  preco?: number
  descricao: string
  porcao?: string
}

// export type ModeloCardPerfil = Omit<
//   ModeloCard,
//   'destaque' | 'typeDish' | 'nota'
// >
