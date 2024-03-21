import styled from 'styled-components'
import { colors as cor } from '../../../../variaveis'

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

export const StyleAside = styled.aside<PropsStatusCart>`
  max-width: 360px;
  width: 100%;
  height: 100%;
  background-color: ${cor.corPrincipal};
  padding: 32px 8px 0 8px;
  z-index: 3;
  position: fixed;
  top: 0;
  right: 0;
  display: ${(props) => (props.status ? 'flex' : 'none')};
  flex-direction: column;
`
