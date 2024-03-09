import React from 'react'
import {
  StyleLinkAdicionarAoCarrinho as StyleCarrinho,
  StyledLinkDiv
} from './sytles'

export const LinkAdicionarAoCarrinho = () => {
  return (
    <StyleCarrinho to="/perfil">
      {' '}
      <StyledLinkDiv>Adicionar ao carrinho</StyledLinkDiv>
    </StyleCarrinho>
  )
}
