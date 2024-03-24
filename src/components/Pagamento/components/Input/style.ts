import styled from 'styled-components'
import { colors as cor } from '../../../../variaveis'
import React from 'react'

export type PropsInput = {
  width: string
  type?: 'text' | 'number' | undefined
  labelId?: string
  textoLabel?: string
  id?: string
  name?: string
  value?: string | number
  onChange: (evento?: React.ChangeEvent<Element> | undefined) => void
  onBlur: (
    evento?: React.FocusEvent<HTMLInputElement, Element> | undefined
  ) => void
  verificaErroInput?: () => void
}

export const StyleContainerInput = styled.div`
  display: flex;
  flex-direction: column;
`

export const StyleInput = styled.input<PropsInput>`
  width: ${(props) => props.width};
  height: 32px;
  padding: 8px;
  background-color: ${cor.corSecundaria};

  font-size: 14px;
  font-weight: bold;
  line-height: 16px;
  color: ${cor.corCinza};
  border: 1px solid ${cor.corSecundaria};
  margin-bottom: 8px;
`
export const StyleLabel = styled.label`
  font-size: 14px;
  font-weight: bold;
  line-height: 16px;
  color: ${cor.corSecundaria};
  margin-bottom: 8px;
`
