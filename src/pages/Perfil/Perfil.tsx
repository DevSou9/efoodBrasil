import React from 'react'
import { HeroPerfil } from '../../components/HeroPerfil/'
// import { ModeloCardPerfil } from '../../models/ModeloCardPerfil'
// import pizza from '../../assets/images/pizza.jpg'
import { ListagemPerfil } from '../../components/ListagemPerfil'
import { Footer } from '../../components/Footer'
// import { ModalCardapio } from '../../components/ModalCardapio'

export const Perfil = () => {
  // const [divAberta, setDivAberta] = useState()

  return (
    <>
      <HeroPerfil />
      <ListagemPerfil />

      <Footer />
    </>
  )
}
