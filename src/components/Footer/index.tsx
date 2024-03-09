import React from 'react'
import { StyleFooter } from './styles'
import logo from '../../assets/images/logo.svg'
import insta from '../../assets/images/insta.svg'
import face from '../../assets/images/face.svg'
import twitter from '../../assets/images/twitter.png'

export const Footer = () => {
  return (
    <StyleFooter>
      <div className="divContainerFooter">
        <div className="divLogo">
          <img src={logo} alt="Logo efood" />
        </div>

        <div className="divRedeSociais">
          <img src={insta} alt="Logo Insta" />
          <img src={face} alt="Logo face" />
          <img src={twitter} alt="Logo twitter" />
        </div>

        <div className="divP">
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade dos produtos é toda do
          estabelecimento contratado.{' '}
        </div>
      </div>
    </StyleFooter>
  )
}
