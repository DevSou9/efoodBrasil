import styled from 'styled-components'
import { colors as cor } from '../../variaveis'

export const StyleModalCardapio = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1;
`

export const StyleModalContent = styled.div`
  width: 1024px;
  height: 344px;
  position: relative;
  z-index: 2;
  background-color: ${cor.corPrincipal};
  padding: 32px;
  display: grid;
  grid-template-columns: auto auto;
  color: ${cor.corSecundaria};

  header {
    display: flex;
    justify-content: space-between;

    h4 {
      font-size: 18px;
      font-weight: bold;
    }
  }

  .imgFechar {
    width: 16px;
    height: 16px;
    cursor: pointer;
  }

  .imgProduto {
    display: block;
    width: 280px;
    height: 280px;
    object-fit: cover;
  }
`
