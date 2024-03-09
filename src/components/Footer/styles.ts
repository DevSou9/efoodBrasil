import styled from 'styled-components'
import { colors as cor } from '../../variaveis'

export const StyleFooter = styled.footer`
  width: 100%;
  height: 298px;
  background-color: ${cor.corSecundaria};
  margin-top: 120px;
  div {
    margin-left: auto;
    margin-right: auto;
  }
  .divLogo {
    width: 125px;
    display: flex;
    justify-content: center;
  }
  .divRedeSociais {
    width: 88px;
    height: 24px;
    margin-top: 32px;
    display: flex;
    justify-content: space-between;
  }
  .divP {
    width: 480px;
    height: 24px;
    font-size: 10px;
    line-height: 12px;
    text-align: center;
    margin: 80px auto 40px auto;
  }
  .divContainerFooter {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    padding-top: 40px;
    height: 298px;
  }
`
