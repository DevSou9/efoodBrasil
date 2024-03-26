import React from 'react'
import { ClockLoader } from 'react-spinners'
import { Container } from './styles'
import { colors as cor } from '../../variaveis'

export const Loader = () => {
  return (
    <Container>
      <ClockLoader color={cor.corPrincipal} />
    </Container>
  )
}
