class ModeloCard {
  id: number
  urlImg: string
  destaque: boolean
  typeDish: string
  title: string
  nota: number
  descricao: string | JSX.Element

  constructor(
    id: number,
    urlImg: string,
    destaque: boolean,
    typeDish: string,
    title: string,
    nota: number,
    descricao: string
  ) {
    this.id = id
    this.urlImg = urlImg
    this.destaque = destaque
    this.typeDish = typeDish
    this.title = title
    this.nota = nota
    this.descricao = descricao
  }
}
export default ModeloCard
