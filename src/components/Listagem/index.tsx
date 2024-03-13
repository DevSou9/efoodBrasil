import React, { useEffect, useState } from 'react'
import { DivListagem, DivContainer } from './styles'
import ModeloCard from '../../models/ModeloCard'
import estrela from '../../assets/images/estrela.jpg'
import { LinkSaibaMais } from '../Links/LinkSaibaMais'
import { LinkDestaqueSemana } from '../Links/LinkDestaqueSemana'
import { LinkTypeDish } from '../Links/LinkTypeDish'

export type Props = {
  modeloCard: ModeloCard[]
}

export const Listagem = () => {
  const [produtos, setProdutos] = useState<ModeloCard[]>([])

  async function foods() {
    const food = await fetch(
      'https://fake-api-tau.vercel.app/api/efood/restaurantes'
    )
    const foodJson = await food.json()
    setProdutos(foodJson)
  }

  useEffect(() => {
    foods()
  }, [])

  function redutor(descricao: string) {
    if (descricao.length > 248) {
      return descricao.slice(0, 245) + '...'
    }
  }

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

              <LinkSaibaMais />
            </ul>
          ))}
      </DivListagem>
    </DivContainer>
  )
}
