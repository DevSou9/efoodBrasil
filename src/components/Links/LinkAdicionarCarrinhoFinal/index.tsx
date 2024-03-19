import React from 'react'
import { StyleLink } from './styles'
import { cardapio } from '../../../models/ModeloCardPerfil'
import { useDispatch } from 'react-redux'
import { addCart } from '../../../store/reducer/cart'
import { formataPreco } from '../../../functionsGlobal'

type AddCartPops = {
  itens: cardapio
}

export const LinkAdicionarCarrinhoFinal = ({ itens }: AddCartPops) => {
  const dispatch = useDispatch()

  const addCartDados = () => {
    const dadosCardapio: cardapio = {
      foto: itens.foto,
      preco: itens.preco,
      id: itens.id,
      nome: itens.nome,
      descricao: itens.descricao,
      porcao: itens.porcao
    }

    dispatch(addCart(dadosCardapio))
  }
  return (
    <>
      <StyleLink onClick={addCartDados}>
        Adicionar ao carrinho - {formataPreco(itens.preco)}
      </StyleLink>
    </>
  )
}
