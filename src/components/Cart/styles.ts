import styled from 'styled-components'
import { colors as cor } from '../../variaveis'

type PropsStatusCart = {
  status: boolean
}

export const DivCart = styled.div<PropsStatusCart>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: ${(props) => (props.status ? 'flex' : 'none')};

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
  }

  z-index: 2;
`

export const StyleAside = styled.aside`
  max-width: 360px;
  width: 100%;
  height: 100%;
  background-color: ${cor.corPrincipal};
  padding: 32px 8px 0 8px;
  z-index: 3;

  ul {
    background-color: ${cor.corSecundaria};
    display: grid;
    grid-template-columns: 80px auto;
    padding: 8px;
    position: relative;
    margin-bottom: 16px;

    h3 {
      font-size: 18px;
      margin-bottom: 16px;
      font-weight: 900;
    }

    p {
      font-size: 14px;
    }

    .divInformacao {
      margin-left: 8px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      img {
        width: 16px;
        height: 16px;
        object-fit: cover;
        position: absolute;
        bottom: 8px;
        right: 8px;
      }
    }

    .divImg {
      width: 80px;
      height: 80px;

      img {
        width: 80px;
        height: 80px;
        object-fit: cover;
      }
    }
  }

  .divValorTotal {
    margin-top: 40px;
    margin-bottom: 16px;
    color: ${cor.corSecundaria};
    font-size: 14px;
    font-weight: bold;

    display: flex;
    justify-content: space-between;
  }

  button {
    display: block;
    width: 100%;
    height: 24px;
    background-color: ${cor.corSecundaria};
    color: ${cor.corPrincipal};
    border: none;
    font-size: 14px;
    font-weight: bold;
  }
`
