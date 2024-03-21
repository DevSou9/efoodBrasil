import React from 'react'
import { StyleTitulo } from './style'

type propsTitulo = {
  children: string | JSX.Element
}

export const Titulo = ({ children }: propsTitulo) => {
  return <StyleTitulo>{children}</StyleTitulo>
}
