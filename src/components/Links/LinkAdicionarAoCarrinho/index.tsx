import React from 'react'

import {
  StyleLinkAdicionarAoCarrinho as StyleCarrinho,
  StyledLinkDiv
} from './sytles'
import { cardapio } from '../../../models/ModeloCardPerfil'

export type LinkCart = {
  itensCardapio: cardapio
}

export const LinkAdicionarAoCarrinho = () => {
  return (
    <>
      <StyleCarrinho>
        {' '}
        <StyledLinkDiv>Adicionar ao carrinho</StyledLinkDiv>
      </StyleCarrinho>
    </>
  )
}
