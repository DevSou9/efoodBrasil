import { cardapio } from './ModeloCardPerfil'
class ModeloCard {
  id: number
  capa: string
  destacado: boolean
  tipo: string
  titulo: string
  avaliacao: number
  descricao: string
  cardapio?: cardapio[]

  constructor(
    id: number,
    capa: string,
    destacado: boolean,
    tipo: string,
    titulo: string,
    avaliacao: number,
    descricao: string,
    cardapio?: cardapio[]
  ) {
    this.id = id
    this.capa = capa
    this.destacado = destacado
    this.tipo = tipo
    this.titulo = titulo
    this.avaliacao = avaliacao
    this.descricao = descricao
    this.cardapio = cardapio
  }
}
export default ModeloCard
