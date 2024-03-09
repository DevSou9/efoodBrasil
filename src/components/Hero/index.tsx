import React from 'react'
import { DivStyle } from './styles'
import logo from '../../assets/images/logo.svg'

export const Hero = () => {
  return (
    <DivStyle>
      <div className="containerHero">
        <img src={logo} alt="logo" />
      </div>
      <div className="containerHero">
        <div className="divTitle">
          <h1>Viva experiências gastronômicas no conforto da sua casa</h1>
        </div>
      </div>
    </DivStyle>
  )
}
