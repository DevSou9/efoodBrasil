import React, { useEffect, useState } from 'react'
import { StyleHeroPerfil, DivBanner } from './styles'
import logo from '../../assets/images/logo.svg'
import { Link, useParams } from 'react-router-dom'

export const HeroPerfil = () => {
  const [restaurante, setRestaurante] = useState('')

  const { id } = useParams()

  useEffect(() => {
    async function getDados() {
      const dados = await fetch(
        `https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`
      )
      const { capa } = await dados.json()

      setRestaurante(capa)
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

      <DivBanner foto={restaurante} />
    </>
  )
}
