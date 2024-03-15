import styled from 'styled-components'
import heroPerfil from './../../assets/images/miniHero.svg'
import { colors as cor } from '../../variaveis'

export type PropsBannerPerfil = {
  foto: string
}

export const StyleHeroPerfil = styled.div`
  background-image: url(${heroPerfil});
  height: 186px;
  font-size: 18px;
  padding-top: 64px;

  .divHero {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`
export const DivBanner = styled.div<PropsBannerPerfil>`
  width: 100%;
  height: 280px;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${(props) => props.foto});
  color: ${cor.corBranca};

  .divBanner {
    position: relative;

    .pTipo {
      position: absolute;
      top: 24px;
    }

    .pTitulo {
      position: absolute;
      top: 215px;
    }
  }
`
