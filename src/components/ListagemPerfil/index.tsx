import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { cardapio } from '../../models/ModeloCardPerfil'
import { LinkAdicionarAoCarrinho } from '../Links/LinkAdicionarAoCarrinho'
import { StyleListagemPerfil } from './styles'
import { ModalCardapio } from '../ModalCardapio'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { abrirFechar } from '../../store/reducer/modalCardapio'
import { dadosCard } from '../../store/reducer/modalDadosCardPefil'

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

  const divModalAbrirInserir = (
    foto: string,
    preco: number,
    id: number,
    nome: string,
    descricao: string,
    porcao: string
  ) => {
    dispatch(abrirFechar())
    const dadosCardapio: cardapio = {
      foto: foto,
      preco: preco,
      id: id,
      nome: nome,
      descricao: descricao,
      porcao: porcao
    }

    dispatch(dadosCard(dadosCardapio))
  }

  useEffect(() => {
    foods()
  })

  function redutor(descricao: string) {
    if (descricao.length > 132) {
      return descricao.slice(0, 129) + '...'
    }
  }
  // const cardap: cardapio = {
  //   id: 0,
  //   nome: '',
  //   foto: '',
  //   preco: 0,
  //   descricao: '',
  //   porcao: ''
  // }
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

              <button
                type="button"
                onClick={() =>
                  divModalAbrirInserir(
                    item.foto,
                    item.preco,
                    item.id,
                    item.nome,
                    item.descricao,
                    item.porcao
                  )
                }
              >
                <LinkAdicionarAoCarrinho />
              </button>
            </ul>
          </>
        ))}
      </StyleListagemPerfil>
    </div>
  )
}
