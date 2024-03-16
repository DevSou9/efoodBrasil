import React from 'react'
import { StyleModalCardapio, StyleModalContent } from './styles'
import fechar from '../../assets/images/fechar.png'
import { LinkAdicionarCarrinhoFinal } from '../Links/LinkAdicionarCarrinhoFinal'
import { useDispatch, useSelector } from 'react-redux'
import { abrirFechar } from '../../store/reducer/modalCardapio'
import { RootReducer } from '../../store'

export const ModalCardapio = () => {
  const dadosCardapio = useSelector(
    (store: RootReducer) => store.dadosCardCardapioSliceStore.itens
  )

  const dispatch = useDispatch()

  const abrirFecharModal = () => {
    dispatch(abrirFechar())
  }

  return (
    <>
      <StyleModalCardapio onClick={abrirFecharModal}></StyleModalCardapio>
      <StyleModalContent>
        <div>
          <img className="imgProduto" src={dadosCardapio[0].foto} />
        </div>

        <div>
          <header>
            <div className="informacao">
              <h4>{dadosCardapio[0].nome}</h4>
              <p>{dadosCardapio[0].descricao}</p>
              <br />
              <div>
                <p className="pPocao">Porção: {dadosCardapio[0].porcao}</p>
              </div>
            </div>

            <div className="divFechar">
              <img
                className="imgFechar"
                src={fechar}
                alt="Ícone de fechar"
                onClick={abrirFecharModal}
              />
            </div>
          </header>
          <LinkAdicionarCarrinhoFinal valor={dadosCardapio[0].preco} />
        </div>
      </StyleModalContent>
    </>
  )
}
