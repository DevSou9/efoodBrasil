import React from 'react'
import { StyleHeroPerfil, DivBanner } from './styles'
import logo from '../../assets/images/logo.svg'
import { Link, useParams } from 'react-router-dom'
import { useGetRestauranteQuery } from '../../service/api'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { abrirFecharCart } from '../../store/reducer/cartAbrirFechar'

export const HeroPerfil = () => {
  const dispatch = useDispatch()
  const cartAbrirFechar = () => {
    dispatch(abrirFecharCart())
  }

  const { id } = useParams()
  const { data, isLoading: loading } = useGetRestauranteQuery(id!)
  const titulo = data?.titulo
  const capa = data?.capa
  const tipo = data?.tipo || ''

  const listaCart = useSelector(
    (store: RootReducer) => store.dadosCartSlice.itens
  )

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
            <p className="pCartHero" onClick={cartAbrirFechar}>
              {listaCart.length} produto(s) no carrinho
            </p>
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
