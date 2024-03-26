import React from 'react'
import { Aside } from '../../components/Aside'
import { LinkPAG } from '../../components/LinkPag'
import { Titulo } from '../../components/Titulo'
import { StyleP } from './style'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../../../store'

export const Confirmacao = () => {
  const status = useSelector((store: RootReducer) => store.statusConcluidoSlice)

  return (
    <Aside status={status}>
      <>
        <Titulo>
          <>Pedido realizado - ORDER_ID</>
        </Titulo>

        <StyleP>
          Estamos felizes em informar que seu pedido já está em processo de
          preparação e, em breve, será entregue no endereço fornecido.
        </StyleP>

        <StyleP>
          Gostaríamos de ressaltar que nossos entregadores não estão autorizados
          a realizar cobranças extras.
        </StyleP>

        <StyleP>
          Lembre-se da importância de higienizar as mãos após o recebimento do
          pedido, garantindo assim sua segurança e bem-estar durante a refeição.
        </StyleP>

        <StyleP ultimoP={true}>
          Esperamos que desfrute de uma deliciosa e agradável experiência
          gastronômica. Bom apetite!
        </StyleP>

        <div className="divLinkConcluir">
          <LinkPAG rota="/">Concluir</LinkPAG>
        </div>
      </>
    </Aside>
  )
}
