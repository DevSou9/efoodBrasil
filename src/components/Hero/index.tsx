import React from 'react'
import { DivStyle } from './styles'
import logo from '../../assets/images/logo.svg'

export const Hero = () => {
  return (
    <DivStyle>
      <div className="containerHero">
        <h1>
          <img src={logo} alt="EFOOD" />
        </h1>
      </div>
      <div className="containerHero">
        <div className="divTitle">
          <h1>Viva experiências gastronômicas no conforto da sua casa</h1>
        </div>
      </div>
    </DivStyle>
  )
}
