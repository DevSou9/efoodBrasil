import React from 'react'
import { LinkPag } from './style'

export type PropsLinkPag = {
  children: string
  rota: string
}

export const LinkPAG = ({ children, rota }: PropsLinkPag) => {
  return <LinkPag to={rota}>{children}</LinkPag>
}
