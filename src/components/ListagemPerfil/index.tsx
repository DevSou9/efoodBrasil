import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { cardapio } from '../../models/ModeloCardPerfil'
import { LinkAdicionarAoCarrinho } from '../Links/LinkAdicionarAoCarrinho'
import { StyleListagemPerfil } from './styles'

export const ListagemPerfil = () => {
  const { id } = useParams()

  const [produtos, setProdutos] = useState<cardapio[]>([])

  async function foods() {
    const food = await fetch(
      `https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`
    )
    const foodJson = await food.json()
    setProdutos(foodJson.cardapio)
  }

  useEffect(() => {
    foods()
  }, [])

  function redutor(descricao: string) {
    if (descricao.length > 132) {
      return descricao.slice(0, 129) + '...'
    }
  }

  return (
    <div className="container">
      <StyleListagemPerfil>
        {produtos.map((item) => (
          <ul key={item.id}>
            <img src={item.foto} alt={item.nome} key={item.id} />
            <h4>{item.nome}</h4>
            <p>{redutor(item.descricao)}</p>
            <LinkAdicionarAoCarrinho />
          </ul>
        ))}
      </StyleListagemPerfil>
    </div>
  )
}
