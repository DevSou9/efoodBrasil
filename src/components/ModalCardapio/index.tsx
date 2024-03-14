import React from 'react'
import { StyleModalCardapio, StyleModalContent } from './styles'
import fechar from '../../assets/images/fechar.png'
import pizza from '../../assets/images/pizza.jpg'
import { LinkAdicionarCarrinhoFinal } from '../Links/LinkAdicionarCarrinhoFinal'
import { useDispatch } from 'react-redux'
import { abrirFechar } from '../../store/reducer/modalCardapio'

const name = 'Teste'
export const ModalCardapio = () => {
  const dispatch = useDispatch()

  const abrirFecharModal = () => {
    dispatch(abrirFechar())
  }

  return (
    <>
      <StyleModalCardapio onClick={abrirFecharModal}></StyleModalCardapio>
      <StyleModalContent>
        <div>
          <img className="imgProduto" src={pizza} />
        </div>

        <div>
          <header>
            <h4>{name}</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
              perferendis veritatis nesciunt illum molestias. Maxime adipisci
              dolorum deserunt, perspiciatis aliquid explicabo voluptatibus quam
              et laborum ratione dolorem fugit, eaque laudantium.
            </p>
            <img
              className="imgFechar"
              src={fechar}
              alt="Ícone de fechar"
              onClick={abrirFecharModal}
            />
          </header>
          <LinkAdicionarCarrinhoFinal valor={50} />
        </div>
      </StyleModalContent>
    </>
  )
}
