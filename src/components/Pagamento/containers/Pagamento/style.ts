import styled from 'styled-components'
import { colors as cor } from '../../../../variaveis'
export const StyleForm = styled.form`
  .divInput {
    display: grid;
    grid-template-columns: auto auto;
    column-gap: 32px;
  }

  .divInputNCartao {
    display: grid;
    grid-template-columns: auto auto;
    column-gap: 30px;
  }

  .divLinkPAG {
    margin-top: 16px;
  }

  small {
    color: ${cor.corCinza};
    margin-bottom: 8px;
    display: flex;
    font-size: 14px;
  }

  .smallInline {
  }
`
