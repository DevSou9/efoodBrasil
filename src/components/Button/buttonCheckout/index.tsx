import React from 'react'
import { StyleButton } from './style'

export type PropsButtonCheckout = {
  children: string
  onClick?: () => void
  type?: 'submit' | 'reset' | 'button' | undefined
}

export const Button = ({ children, type, onClick }: PropsButtonCheckout) => {
  return (
    <StyleButton onClick={onClick} type={type}>
      {children}
    </StyleButton>
  )
}
