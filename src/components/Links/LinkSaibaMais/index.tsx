import React from 'react'
import { StyleLink } from './styles'

type PropsLinkSaibaMais = {
  id: number
}

export const LinkSaibaMais = ({ id }: PropsLinkSaibaMais) => {
  return <StyleLink to={`/perfil/${id}`}>Saiba Mais</StyleLink>
}
