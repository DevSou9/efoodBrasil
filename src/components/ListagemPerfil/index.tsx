import React from 'react'
import { useParams } from 'react-router-dom'
import { cardapio } from '../../models/ModeloCardPerfil'
import { LinkAdicionarAoCarrinho } from '../Links/LinkAdicionarAoCarrinho'
import { StyleListagemPerfil } from './styles'
import { ModalCardapio } from '../ModalCardapio'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { abrirFechar } from '../../store/reducer/modalCardapio'
import { dadosCard } from '../../store/reducer/modalDadosCardPefil'
import { useGetCardapioRestauranteQuery } from '../../service/api'
import { Loader } from '../Loader'

export const ListagemPerfil = () => {
  const { id } = useParams()

  const { data, isLoading } = useGetCardapioRestauranteQuery(id!)
  const produtos = data?.cardapio

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

  function redutor(descricao: string) {
    if (descricao.length > 128) {
      return descricao.slice(0, 125) + '...'
    }
  }
  if (isLoading) {
    return <Loader />
  }
  if (produtos) {
    return (
      <div id="idContainer" className="novoContainer">
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
  return <></>
}
