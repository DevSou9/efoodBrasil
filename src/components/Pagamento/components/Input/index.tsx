import React from 'react'
import { StyleInput, StyleLabel, StyleContainerInput } from './style'
import { PropsInput } from './style'

export const Input = ({
  width,
  type,
  labelId,
  textoLabel,
  id,
  name,
  onChange,
  onBlur
}: PropsInput) => {
  return (
    <StyleContainerInput>
      <StyleLabel htmlFor={labelId}>{textoLabel}</StyleLabel>
      <StyleInput
        id={id}
        width={width}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        type={type}
      />
    </StyleContainerInput>
  )
}
