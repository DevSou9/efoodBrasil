import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { cardapio } from '../../models/ModeloCardPerfil'
import { LinkAdicionarAoCarrinho } from '../Links/LinkAdicionarAoCarrinho'
import { StyleListagemPerfil } from './styles'
import { ModalCardapio } from '../ModalCardapio'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { abrirFechar } from '../../store/reducer/modalCardapio'

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

  const statusAbrirFechar = useSelector(
    (state: RootReducer) => state.modalCardapioSliceStore
  )
  const dispatch = useDispatch()

  const divModalAbrir = () => {
    dispatch(abrirFechar())
  }

  useEffect(() => {
    foods()
  })

  function redutor(descricao: string) {
    if (descricao.length > 132) {
      return descricao.slice(0, 129) + '...'
    }
  }

  return (
    <div className="container">
      {statusAbrirFechar && <ModalCardapio />}
      <StyleListagemPerfil>
        {produtos.map((item) => (
          <>
            <ul key={item.id}>
              <img src={item.foto} alt={item.nome} key={item.id} />
              <h4>{item.nome}</h4>
              <p>{redutor(item.descricao)}</p>

              <button type="button" onClick={() => divModalAbrir()}>
                <LinkAdicionarAoCarrinho />
              </button>
            </ul>
          </>
        ))}
      </StyleListagemPerfil>
    </div>
  )
}
