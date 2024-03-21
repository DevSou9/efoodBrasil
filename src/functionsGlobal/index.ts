import { cardapio } from '../models/ModeloCardPerfil'
export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

export const somarValorCompra = (valorCompra: cardapio[]) => {
  const precoValorCompra = valorCompra.map((item) => item.preco)
  const somarPrecoValorCompra = precoValorCompra.reduce((somar, atual) => {
    return (somar += atual)
  }, 0)
  const realSomarPrecoValorCompra = formataPreco(somarPrecoValorCompra)

  return realSomarPrecoValorCompra
}
