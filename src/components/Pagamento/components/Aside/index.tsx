import React from 'react'
import { DivCart, StyleAside } from './style'

type PropsAside = {
  children: JSX.Element
  status: boolean
}

export const Aside = ({ children, status }: PropsAside) => {
  return (
    <>
      <DivCart status={status} />
      <StyleAside status={status}>{children}</StyleAside>
    </>
  )
}
