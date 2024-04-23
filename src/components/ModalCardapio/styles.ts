import styled from 'styled-components'
import { breakpoints, colors as cor } from '../../variaveis'

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
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  background-color: ${cor.corPrincipal};
  padding: 32px;
  display: grid;
  grid-template-columns: auto auto;
  gap: 24px;
  color: ${cor.corSecundaria};

  @media ((max-width: ${breakpoints.tablet})) and (min-width: ${breakpoints.mobile}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;
    width: 100%;
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: auto;
    width: 100%;
  }

  header {
    display: flex;

    h4 {
      font-size: 18px;
      font-weight: 900;
      margin-bottom: 16px;

      @media (max-width: ${breakpoints.tablet}) {
        text-align: center;
      }
    }

    p {
      font-size: 14px;
      line-height: 22px;
    }

    .pPocao {
      margin-bottom: 16px;

      @media (max-width: ${breakpoints.tablet}) {
        text-align: center;
      }
    }
  }

  .divAddCarrinho {
    @media (max-width: ${breakpoints.tablet}) {
      display: flex;
      justify-content: center;
    }
  }

  .imgFechar {
    width: 16px;
    height: 16px;
    cursor: pointer;
    position: absolute;
    top: 8px;
    right: 8px;

    @media ((max-width: ${breakpoints.tablet}) and (min-width: ${breakpoints.mobile})) {
      top: 16px;
      right: 16px;
    }
  }

  .imgResponsivo {
    display: flex;
    width: 100%;
    justify-content: center;
  }

  .imgProduto {
    display: block;
    width: 280px;
    height: 280px;
    object-fit: cover;

    @media (max-width: ${breakpoints.tablet}) {
      display: flex;
      width: 60%;
      height: 60%;
      object-fit: cover;
    }

    @media ((max-width: ${breakpoints.tablet})) and (min-width: ${breakpoints.mobile}) {
      display: flex;
      width: 30%;
      height: 30%;
      object-fit: cover;
    }
  }
`
