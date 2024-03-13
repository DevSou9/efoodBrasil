import React from 'react'
import { Hero } from '../../components/Hero'
import { Listagem } from '../../components/Listagem'
// import ModeloCard from '../../models/ModeloCard'
// import sushi from './../../assets/images/opc1.jpg'
import { Footer } from '../../components/Footer'
// import trattoria from './../../assets/images/trattoria.jpg'

// export const opcoes: ModeloCard[] = [
//   {
//     id: 1,
//     urlImg: sushi,
//     destaque: true,
//     typeDish: 'Japonesa',
//     title: 'Hioki Sushi',
//     nota: 4.9,
//     descricao: (
//       <>
//         <p>
//           Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis
//           frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega
//           rápida, embalagens cuidadosas e qualidade garantida. Experimente o
//           Japão sem sair do lar com nosso delivery!
//         </p>
//       </>
//     )
//   },
//   {
//     id: 2,
//     urlImg: trattoria,
//     destaque: true,
//     typeDish: 'Italiana',
//     title: 'La Dolce Vita Trattoria',
//     nota: 4.9,
//     descricao:
//       'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
//   },
//   {
//     id: 3,
//     urlImg: sushi,
//     destaque: true,
//     typeDish: 'Italiana',
//     title: 'Hioki Sushi',
//     nota: 4.9,
//     descricao:
//       'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!'
//   },
//   {
//     id: 4,
//     urlImg: trattoria,
//     destaque: true,
//     typeDish: 'Italiana',
//     title: 'Hioki Sushi',
//     nota: 4.9,
//     descricao:
//       'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
//   },
//   {
//     id: 5,
//     urlImg: sushi,
//     destaque: true,
//     typeDish: 'Italiana',
//     title: 'Hioki Sushi',
//     nota: 4.9,
//     descricao:
//       'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!'
//   },
//   {
//     id: 6,
//     urlImg: trattoria,
//     destaque: true,
//     typeDish: 'Italiana',
//     title: 'Hioki Sushi',
//     nota: 4.9,
//     descricao:
//       'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
//   }
// ]

export const Home = () => {
  return (
    <>
      <Hero />
      <Listagem />
      <Footer />
    </>
  )
}
