import React from 'react'
import { DivListagem, DivContainer } from './styles'
import ModeloCard from '../../models/ModeloCard'
import estrela from '../../assets/images/estrela.jpg'
import { LinkSaibaMais } from '../Links/LinkSaibaMais'
import { LinkDestaqueSemana } from '../Links/LinkDestaqueSemana'
import { LinkTypeDish } from '../Links/LinkTypeDish'

export type Props = {
  modeloCard: ModeloCard[]
}
export const Listagem = ({ modeloCard }: Props) => {
  return (
    <DivContainer>
      <DivListagem>
        {modeloCard.map((item) => (
          <ul key={item.id}>
            <div className="divImg">
              <img src={item.urlImg} alt={item.title} key={item.id} />
            </div>

            <div className="divTituloAvaliacao">
              <h4 className="divTitulo">{item.title}</h4>

              <div className="divNota">
                <h4>{item.nota}</h4>
                <img src={estrela} alt="Estrela de avaliação" />
              </div>
            </div>

            <div className="divP">
              <p>{item.descricao}</p>
            </div>

            {item.destaque && <LinkDestaqueSemana />}
            <LinkTypeDish>{item.typeDish}</LinkTypeDish>
            {/* <a href="#">{item.typeDish}</a> */}
            <LinkSaibaMais />
          </ul>
        ))}
      </DivListagem>
    </DivContainer>
  )
}
