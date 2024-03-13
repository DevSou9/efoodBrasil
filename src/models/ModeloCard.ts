class ModeloCard {
  id: number
  capa: string
  destacado: boolean
  tipo: string
  titulo: string
  avaliacao: number
  descricao: string

  constructor(
    id: number,
    capa: string,
    destacado: boolean,
    tipo: string,
    titulo: string,
    avaliacao: number,
    descricao: string
  ) {
    this.id = id
    this.capa = capa
    this.destacado = destacado
    this.tipo = tipo
    this.titulo = titulo
    this.avaliacao = avaliacao
    this.descricao = descricao
  }
}
export default ModeloCard
