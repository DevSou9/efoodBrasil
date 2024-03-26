import React from 'react'
import { LinkPag } from './style'

export type PropsLinkPag = {
  children: string
  rota: string
  onCLICK?: () => void
}

export const LinkPAG = ({ children, rota, onCLICK }: PropsLinkPag) => {
  return (
    <LinkPag to={rota} onClick={onCLICK}>
      {children}
    </LinkPag>
  )
}
