import styled from 'styled-components'
import heroPerfil from './../../assets/images/miniHero.svg'
import bannerPerfil from './../../assets/images/bannerPerfil.jpg'

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
export const DivBanner = styled.div`
  background-image: url(${bannerPerfil});
  width: 100%;
  height: 280px;
`
