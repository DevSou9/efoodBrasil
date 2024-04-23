import styled from 'styled-components'
import hero from '../../assets/images/hero.svg'
import { breakpoints } from '../../variaveis'

export const DivStyle = styled.div`
  background-image: url(${hero});
  background-size: cover;
  background-repeat: no-repeat;
  height: 384px;
  display: block;
  width: 100%;

  @media (max-width: ${breakpoints.desktop}) {
    max-width: 1024px;
    width: 100%;
    height: 300px;
  }

  .containerHero {
    display: flex;
    justify-content: center;

    img {
      width: 128px;
      margin-top: 44px;
    }

    .divTitle {
      width: 544px;
      height: 84px;
      margin-top: 136px;
      margin-bottom: 40px;
      text-align: center;

      @media (max-width: ${breakpoints.desktop}) {
        margin-top: 44px;
      }

      h1 {
        font-size: 36px;
        font-weight: 900;
        line-height: 42px;

        @media (max-width: ${breakpoints.desktop}) {
          font-size: 30px;
          font-weight: 700;
          line-height: auto;
          margin-left: 16px;
          margin-right: 16px;
        }
      }
    }
  }
`
