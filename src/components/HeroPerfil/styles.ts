import styled from 'styled-components'
import heroPerfil from './../../assets/images/miniHero.svg'
import { breakpoints, colors as cor } from '../../variaveis'

export type PropsBannerPerfil = {
  foto: string
}

export const StyleHeroPerfil = styled.div`
  background-image: url(${heroPerfil});
  height: 186px;
  font-size: 18px;
  padding-top: 64px;

  @media (max-width: ${breakpoints.tablet}) {
    padding-top: 32px;

    p {
      margin-bottom: 12px;
    }
    img {
      margin-bottom: 9px;
    }
  }

  .divHero {
    display: flex;
    justify-content: space-between;
    align-items: center;

    font-weight: 900;

    @media (max-width: ${breakpoints.tablet}) {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      width: 90%;
    }

    @media ((max-width: ${breakpoints.tablet})) and (min-width: ${breakpoints.mobile}) {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-items: center;
      width: 90%;

      p {
        margin-bottom: 0;
      }
      img {
        margin-bottom: 0;
      }
    }
  }

  .pCartHero {
    cursor: pointer;
  }
`
export const DivBanner = styled.div<PropsBannerPerfil>`
  width: 100%;
  height: 280px;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${(props) => props.foto});
  color: ${cor.corBranca};
  position: relative;

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 280px;
    background-color: rgba(0, 0, 0, 0.7);
    content: '';
  }

  .divBanner {
    position: relative;

    @media (max-width: ${breakpoints.tablet}) {
      max-width: 80%;
      display: flex;
      justify-content: center;
    }

    @media ((max-width: ${breakpoints.tablet})) and (min-width: ${breakpoints.mobile}) {
      max-width: 90%;
    }

    .pTipo {
      position: absolute;
      top: 24px;
      z-index: 1;
      font-size: 32px;
      font-weight: 100;

      @media (max-width: ${breakpoints.tablet}) {
        font-size: 26px;
      }
    }

    .pTitulo {
      position: absolute;
      top: 215px;
      z-index: 1;
      font-size: 32px;
      font-weight: 900;

      @media (max-width: ${breakpoints.tablet}) {
        font-size: 26px;
      }
    }
  }
`
