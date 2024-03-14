import React from 'react'
import { StyleLink } from './styles'
import { PropsLinkCarrinhoFinal } from '../../../models/ModeloLinkCarrinhoFinal'

export const LinkAdicionarCarrinhoFinal = ({
  valor
}: PropsLinkCarrinhoFinal) => {
  return (
    <>
      <StyleLink>Adicionar ao carrinho - R$ {valor}</StyleLink>
    </>
  )
}
