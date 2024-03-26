import React from 'react'
import { StyleButton } from './style'

export type PropsButtonCheckout = {
  children: string
  onClick?: () => void
  type?: 'submit' | 'reset' | 'button' | undefined
  disebled?: boolean
}

export const Button = ({
  children,
  type,
  onClick,
  disebled
}: PropsButtonCheckout) => {
  return (
    <StyleButton onClick={onClick} type={type} disabled={disebled}>
      {children}
    </StyleButton>
  )
}
