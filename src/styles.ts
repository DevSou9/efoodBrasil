import styled, { createGlobalStyle } from 'styled-components'
import { breakpoints, colors } from './variaveis'
import { Link } from 'react-router-dom'

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
    text-decoration: none;

    button{
      cursor: pointer;
    }
  }

  body {
    background-color: ${colors.backgroundColor};
    color: ${colors.fontColor};
    margin: 0;
    padding: 0;

    .pAlerta {
    color: ${colors.corCinza};
    margin-bottom: 12px;
    font-size: 16px;
  }

  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;



  }


  .novoContainer {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media(max-width: ${breakpoints.tablet}){
      margin-bottom: 36px;
    }
    @media((max-width: ${breakpoints.tablet}) and (min-width: ${breakpoints.mobile})){
      width: 90%;
    }

  }


`
export const MixinLinks = styled(Link)`
  height: 26px;
  color: ${colors.corFontLink};
  background-color: ${colors.corPrincipal};
  font-size: 12px;
  line-height: 14px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`
