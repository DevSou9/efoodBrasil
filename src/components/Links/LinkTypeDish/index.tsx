import React from 'react'
import { StyleLinkTypeDish } from './styles'

export type PropsLink = {
  children: string
}

export const LinkTypeDish = ({ children }: PropsLink) => {
  return <StyleLinkTypeDish to="/#">{children}</StyleLinkTypeDish>
}
