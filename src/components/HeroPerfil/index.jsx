import React from 'react'
import { StyleHeroPerfil, DivBanner } from './styles'
import logo from '../../assets/images/logo.svg'
import { Link } from 'react-router-dom'

export const HeroPerfil = () => {
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
      <DivBanner />
    </>
  )
}
