import styled from 'styled-components'
import hero from '../../assets/images/hero.svg'

export const DivStyle = styled.div`
  background-image: url(${hero});
  background-size: cover;
  background-repeat: no-repeat;
  height: 384px;
  display: block;
  width: 100%;

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
      h1 {
        font-size: 36px;
        font-weight: 900;
        line-height: 42px;
      }
    }
  }
`
