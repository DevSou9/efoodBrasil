import styled from 'styled-components'
import { colors as cor } from '../../variaveis'
import { breakpoints } from '../../variaveis'

export const DivContainer = styled.div`
  max-width: 1024px;
  margin: 80px auto 120px auto;
  display: flex;
  justify-content: space-around;

  @media (max-width: ${breakpoints.desktop}) {
    margin: 40px auto 120px auto;
  }
`

export const DivListagem = styled.div`
  display: grid;
  row-gap: 48px;
  column-gap: 80px;
  grid-template-columns: 1fr 1fr;
  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr;
    row-gap: 40px;
  }

  ul {
    margin: 0;
    padding: 0;
    width: 472px;
    height: 398px;
    background-color: ${cor.fundoCard};
    position: relative;
    font-size: 18px;
    border: 1px solid ${cor.corPrincipal};
    border-top: none;

    @media (max-width: ${breakpoints.tablet}) {
      max-width: 80%;
      margin-left: auto;
      margin-right: auto;
      width: 100%;
      height: auto;
    }
  }

  .divImg {
    width: 100%;
  }

  .divImg img {
    width: 100%;
    height: 217px;
    object-fit: cover;
    display: block;
  }

  .divTituloAvaliacao {
    display: flex;
    justify-content: space-between;
    .divTitulo {
      margin-left: 8px;
      margin-top: 8px;
      line-height: 22px;
      width: auto;
    }

    .divNota {
      display: flex;
      align-items: center;
      width: 55px;
      margin-right: 8px;

      img {
        margin-left: 8px;
        margin-right: 8px;
        width: 21px;
        height: 21px;
      }
    }
  }

  .divP {
    margin-left: 8px;
    margin-right: 8px;
    margin-top: 16px;
    padding: 0;
    width: 456px;
    height: 88px;

    @media (max-width: ${breakpoints.tablet}) {
      max-width: 90%;
      width: 100%;
      text-align: left;
    }

    p {
      font-size: 14px;
      line-height: 22px;
    }
  }
  .divDestaque {
    display: inline-block;
  }
`
