import { styled } from 'styled-components'
import { breakpoints, colors as cor } from '../../variaveis'

export const StyleListagemPerfil = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  color: ${cor.corSecundaria};
  margin-top: 56px;

  @media (max-width: ${breakpoints.tablet}) {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 32px;
    margin-bottom: 32px;
  }

  @media ((max-width: ${breakpoints.tablet}) and (min-width: ${breakpoints.mobile})) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
    place-items: center;
  }

  ul {
    padding: 8px;
    background-color: ${cor.corPrincipal};
    width: 320px;

    img {
      margin-bottom: 8px;
      width: 100%;
      height: 168px;
      object-fit: cover;
      display: block;
    }

    button {
      border: none;
    }

    h4 {
      font-size: 16px;
      font-weight: 900;
      line-height: 18px;
      margin-bottom: 8px;
    }

    p {
      font-size: 14px;
      line-height: 22px;
      margin-top: 8px;
      margin-bottom: 8px;
    }

    @media ((max-width: ${breakpoints.tablet}) and (min-width: ${breakpoints.mobile})) {
      width: auto;

      img {
        margin-top: 16px;
        margin-bottom: 16px;
        width: 100%;
        height: 168px;
        object-fit: cover;
        display: block;
      }

      h4 {
        margin-bottom: 16px;
      }

      p {
        margin-bottom: 16px;
      }

      button {
        display: flex;
        margin: auto;
        margin-bottom: 16px;
      }
    }
  }
`
