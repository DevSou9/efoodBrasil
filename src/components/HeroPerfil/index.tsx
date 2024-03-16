import React, { useEffect, useState } from 'react'
import { StyleHeroPerfil, DivBanner } from './styles'
import logo from '../../assets/images/logo.svg'
import { Link, useParams } from 'react-router-dom'

export const HeroPerfil = () => {
  const [restaurante, setRestaurante] = useState('')
  const [titulo, setTitulo] = useState('')
  const [tipo, setTipo] = useState('')

  const { id } = useParams()

  useEffect(() => {
    async function getDados() {
      const dados = await fetch(
        `https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`
      )
      const { capa, titulo, tipo } = await dados.json()

      setRestaurante(capa)
      setTitulo(titulo)
      setTipo(tipo)
    }
    getDados()
  }, [id])

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

      <DivBanner foto={restaurante}>
        <div className="container divBanner">
          <div className="pTipo">
            <p>{tipo.replace(/^\w/, (l) => l.toUpperCase())}</p>
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
