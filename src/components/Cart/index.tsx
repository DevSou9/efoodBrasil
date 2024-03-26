import React from 'react'
import lixeira from '../../assets/images/lixeira.svg'
import { DivCart, StyleAside } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { abrirFecharCart } from '../../store/reducer/cartAbrirFechar'
import { removeCard } from '../../store/reducer/cart'
import { formataPreco } from '../../functionsGlobal'
import { alterarStatusEntrega } from '../../store/reducer/statusEntrega'

export const Cart = () => {
  const dispatch = useDispatch()
  const cartAbrirFechar = () => {
    dispatch(abrirFecharCart())
  }

  const abrirDivEntrega = () => {
    if (pedidosAoCart.length < 1) return
    dispatch(alterarStatusEntrega())
    cartAbrirFechar()
  }

  const pedidosAoCart = useSelector(
    (store: RootReducer) => store.dadosCartSlice.itens
  )

  const statusCart = useSelector(
    (store: RootReducer) => store.cartAbrirFecharSlice
  )

  const removerDoCart = (id: number) => {
    return () => dispatch(removeCard(id))
  }

  function somarCart() {
    const itensPreco = pedidosAoCart.map((item) => item.preco)
    const somar = itensPreco.reduce((soma, itemAtual) => {
      return (soma += itemAtual)
    }, 0)
    return formataPreco(somar)
  }
  return (
    <>
      <DivCart onClick={cartAbrirFechar} status={statusCart}>
        <StyleAside onClick={(e) => e.stopPropagation()}>
          {pedidosAoCart.length < 1 && (
            <h3 className="pAlerta">Insira um produto antes de continuar</h3>
          )}
          {pedidosAoCart.map((item) => (
            <ul key={item.id}>
              <div className="divImg">
                <img src={item.foto} alt={item.nome} />
              </div>

              <div className="divInformacao">
                <h3>{item.nome}</h3>
                <p>{formataPreco(item.preco)}</p>
                <img
                  onClick={removerDoCart(item.id)}
                  src={lixeira}
                  alt="ícone de lixeira"
                />
              </div>
            </ul>
          ))}

          <div className="divValorTotal">
            <p>Valor Total</p>
            <p>{somarCart()}</p>
          </div>

          <button type="button" onClick={abrirDivEntrega}>
            Continuar com a entrega
          </button>
        </StyleAside>
      </DivCart>
    </>
  )
}
