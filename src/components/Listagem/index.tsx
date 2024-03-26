import React from 'react'
import { DivListagem, DivContainer } from './styles'
import ModeloCard from '../../models/ModeloCard'
import estrela from '../../assets/images/estrela.jpg'
import { LinkSaibaMais } from '../Links/LinkSaibaMais'
import { LinkDestaqueSemana } from '../Links/LinkDestaqueSemana'
import { LinkTypeDish } from '../Links/LinkTypeDish'
import { useGetTodosRestaurantesQuery } from '../../service/api'
import { Loader } from '../Loader'

export type Props = {
  modeloCard: ModeloCard[]
}

export const Listagem = () => {
  const { data: produtos, isLoading } = useGetTodosRestaurantesQuery()

  if (isLoading) {
    return <Loader />
  }

  function redutor(descricao: string) {
    if (descricao.length > 248) {
      return descricao.slice(0, 245) + '...'
    }
  }
  if (produtos) {
    return (
      <DivContainer>
        <DivListagem>
          {produtos.length > 0 &&
            produtos.map((item) => (
              <ul key={item.id}>
                <div className="divImg">
                  <img src={item.capa} alt={item.titulo} key={item.id} />
                </div>

                <div className="divTituloAvaliacao">
                  <h4 className="divTitulo">{item.titulo}</h4>

                  <div className="divNota">
                    <h4>{item.avaliacao}</h4>
                    <img src={estrela} alt="Estrela de avaliação" />
                  </div>
                </div>

                <div className="divP">
                  <p>{redutor(item.descricao)}</p>
                </div>

                {item.destacado && <LinkDestaqueSemana />}
                <LinkTypeDish>{item.tipo}</LinkTypeDish>
                <LinkSaibaMais id={item.id} />
              </ul>
            ))}
        </DivListagem>
      </DivContainer>
    )
  }
  return <></>
}
