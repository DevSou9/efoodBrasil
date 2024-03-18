import React from 'react'
import { StyleHeroPerfil, DivBanner } from './styles'
import logo from '../../assets/images/logo.svg'
import { Link, useParams } from 'react-router-dom'
import { useGetRestauranteQuery } from '../../service/api'

export const HeroPerfil = () => {
  const { id } = useParams()
  const { data, isLoading: loading } = useGetRestauranteQuery(id!)
  const titulo = data?.titulo
  const capa = data?.capa
  const tipo = data?.tipo || ''

  if (loading) {
    return <h3>Carregando...</h3>
  }

  if (titulo && capa && tipo) {
    return (
      <>
        <StyleHeroPerfil>
          <div className="divHero container">
            <p>Restaurantes</p>
            <Link to="/">
              <img src={logo} alt="logo efood" />
            </Link>
            <p>0 produto(s) no carrinho</p>
          </div>
        </StyleHeroPerfil>

        <DivBanner foto={capa}>
          <div className="container divBanner">
            <div className="pTipo">
              {tipo.replace(/^\p{L}/u, (l: string) => l.toUpperCase())}
            </div>

            <div className="pTitulo">
              {' '}
              <p>{titulo}</p>
            </div>
          </div>
        </DivBanner>
      </>
    )
  }

  return <></>
}
