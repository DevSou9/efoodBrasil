import React from 'react'
import { ModeloCardPerfil } from '../../models/ModeloCardPerfil'
import { LinkAdicionarAoCarrinho } from '../Links/LinkAdicionarAoCarrinho'
import { StyleListagemPerfil } from './styles'

export type Props = {
  modeloCardPerfil: ModeloCardPerfil[]
}

export const ListagemPerfil = ({ modeloCardPerfil }: Props) => {
  return (
    <div className="container">
      <StyleListagemPerfil>
        {modeloCardPerfil.map((item) => (
          <ul key={item.id}>
            <img src={item.capa} alt={item.titulo} key={item.id} />
            <h4>{item.titulo}</h4>
            <p>{item.descricao}</p>
            <LinkAdicionarAoCarrinho />
          </ul>
        ))}
      </StyleListagemPerfil>
    </div>
  )
}
