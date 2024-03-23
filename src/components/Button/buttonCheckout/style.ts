import styled from 'styled-components'
// import { PropsButtonCheckout } from '.'
import { colors as cor } from '../../../variaveis'

export const StyleButton = styled.button`
  width: 344px;
  height: 24px;
  background-color: ${cor.corSecundaria};
  color: ${cor.corPrincipal};
  font-size: 14px;
  font-weight: bold;
  line-height: 16px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
  border: none;
  cursor: pointer;
`
