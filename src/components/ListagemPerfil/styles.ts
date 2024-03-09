import { styled } from 'styled-components'
import { colors as cor } from '../../variaveis'

export const StyleListagemPerfil = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  color: ${cor.corSecundaria};
  margin-top: 56px;

  ul {
    padding: 8px;
    background-color: ${cor.corPrincipal};
    width: 320px;
    height: 338px;

    img {
      margin-bottom: 8px;
      height: 168px;
      display: block;
    }

    h4 {
      font-size: 16px;
      font-weight: 900;
      line-height: 18px;
    }

    p {
      font-size: 14px;
      line-height: 22px;
      margin-top: 8px;
      margin-bottom: 8px;
    }
  }
`
