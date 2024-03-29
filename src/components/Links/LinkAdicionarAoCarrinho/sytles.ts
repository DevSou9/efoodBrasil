import styled from 'styled-components'
// import { Link } from 'react-router-dom'
import { colors as cor } from '../../../variaveis'

export const StyledLinkDiv = styled.div`
  width: 304px;
  background-color: ${cor.corSecundaria};
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

export const StyleLinkAdicionarAoCarrinho = styled.div`
  font-size: 14px;
  font-weight: bold;
  line-height: 16px;
  text-decoration: none;
  color: ${cor.corPrincipal};
  cursor: pointer;
`
