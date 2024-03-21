import styled from 'styled-components'
import { colors as cor } from '../../../../variaveis'

type PropsP = {
  ultimoP?: boolean
}

export const StyleP = styled.p<PropsP>`
  color: ${cor.corSecundaria};
  font-size: 14px;
  line-height: 22px;
  font-weight: 400;
  margin-bottom: ${(props) => (props.ultimoP ? '24px' : '30px')};
`
