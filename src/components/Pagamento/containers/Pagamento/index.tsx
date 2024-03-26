import React, { useEffect } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { Aside } from '../../components/Aside'
import { Input } from '../../components/Input'
import { LinkPAG } from '../../components/LinkPag'
import { StyleForm } from './style'
import { Titulo } from '../../components/Titulo'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../../../store'
import { somarValorCompra } from '../../../../functionsGlobal'
import { Button } from '../../../Button/buttonCheckout'
import { useCompraMutation } from '../../../../service/api'
import { StyleP } from './style'
import { alterarStautsPagamento } from '../../../../store/reducer/statusPagamento'
import { alterarStatusEntrega } from '../../../../store/reducer/statusEntrega'
import { clear } from '../../../../store/reducer/cart'

export const Pagamento = () => {
  const status = useSelector((store: RootReducer) => store.statusPagamentoSlice)

  const dispatch = useDispatch()

  const alterarStatusPagamento = () => {
    dispatch(alterarStautsPagamento())
  }

  type TypeIdPrecoCart = {
    id: number
    price: number
  }

  const voltarParaEndereco = () => {
    dispatch(alterarStautsPagamento())
    dispatch(alterarStatusEntrega())
  }

  const dadosCart = useSelector(
    (store: RootReducer) => store.dadosCartSlice.itens
  )

  function idPrecoCart() {
    const arrayPrecoId: TypeIdPrecoCart[] = []
    dadosCart.map((item) => {
      arrayPrecoId.push({ id: item.id, price: item.preco })
    })
    return arrayPrecoId
  }

  const [compra, { data, isSuccess, isLoading }] = useCompraMutation()

  const dadosDeEntrega = useSelector(
    (store: RootReducer) => store.CheckoutTempEntregaSlice.enderecoUsuario[0]
  )

  const form = useFormik({
    initialValues: {
      nome: '',
      numeroCartao: '',
      cvv: '',
      mesVenc: '',
      anoVenc: ''
    },
    validationSchema: Yup.object({
      nome: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      numeroCartao: Yup.string().required('O campo é obrigatório'),
      cvv: Yup.string()
        .min(3, 'O CVV possui 3 dígitos')
        .max(3, '-O CVV possui 3 dígitos')

        .required('O campo é obrigatório'),
      mesVenc: Yup.string()
        .min(2, 'Necessário 2 dígitos')
        .max(2, 'Necessário 2 dígitos')
        .required('O campo é obrigatório'),
      anoVenc: Yup.string()
        .min(4, 'Necessário digitar uma data válida de 4 dígitos')
        .max(4, 'Necessário digitar uma data válida de 4 dígitos')
        .required('O campo é obrigatório')
    }),
    onSubmit: async (values) => {
      try {
        await compra({
          products: idPrecoCart(),
          delivery: {
            receiver: dadosDeEntrega.delivery.receiver,
            address: {
              description: dadosDeEntrega.delivery.address.description,
              city: dadosDeEntrega.delivery.address.city,
              zipCode: dadosDeEntrega.delivery.address.zipCode,
              number: dadosDeEntrega.delivery.address.number,
              complement: dadosDeEntrega.delivery.address.complement
            }
          },
          payment: {
            card: {
              name: values.nome,
              number: values.numeroCartao,
              code: Number(values.cvv),
              expires: {
                month: Number(values.mesVenc),
                year: Number(values.anoVenc)
              }
            }
          }
        })
      } catch {
        alert('Erro ao finalizar pagamento')
      }
    }
  })

  const valorCompra = useSelector(
    (store: RootReducer) => store.dadosCartSlice.itens
  )

  const verificadorErro = (nome: string) => {
    const touched = nome in form.touched
    const errors = nome in form.errors
    const temErros = touched && errors

    return temErros
  }

  useEffect(() => {
    if (isSuccess) {
      dispatch(clear())
    }
  }, [isSuccess, dispatch])

  return (
    <Aside status={status}>
      <>
        {isSuccess ? (
          <>
            <Titulo>
              <>Pedido realizado - {data?.orderId}</>
            </Titulo>

            <StyleP>
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
            </StyleP>

            <StyleP>
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras.
            </StyleP>

            <StyleP>
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição.
            </StyleP>

            <StyleP ultimoP={true}>
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </StyleP>

            <div className="divLinkConcluir">
              <LinkPAG onCLICK={alterarStatusPagamento} rota="/">
                Concluir
              </LinkPAG>
            </div>
          </>
        ) : (
          <form onSubmit={form.handleSubmit}>
            <Titulo>
              <>Pagamento - Valor a pagar {somarValorCompra(valorCompra)}</>
            </Titulo>
            <StyleForm>
              <Input
                width={'100%'}
                textoLabel={'Nome no cartão'}
                labelId={'nome'}
                id={'nome'}
                name={'nome'}
                value={form.values.nome}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                type={'text'}
                classNAME={verificadorErro('nome') ? 'error' : ''}
              />

              <div className="divInputNCartao">
                <Input
                  width={'228px'}
                  textoLabel={'Número do cartão'}
                  labelId={'numeroCartao'}
                  id={'numeroCartao'}
                  name={'numeroCartao'}
                  value={form.values.numeroCartao}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  type={'text'}
                  classNAME={verificadorErro('numeroCartao') ? 'error' : ''}
                  mask="9999 9999 9999 9999"
                />

                <Input
                  width={'86px'}
                  textoLabel={'CVV'}
                  labelId={'cvv'}
                  id={'cvv'}
                  name={'cvv'}
                  value={form.values.cvv}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  type={'text'}
                  classNAME={verificadorErro('cvv') ? 'error' : ''}
                  mask="999"
                />
              </div>

              <div className="divInput">
                <Input
                  width={'155px'}
                  textoLabel={'Mês de vencimento'}
                  labelId={'mesVenc'}
                  id={'mesVenc'}
                  name={'mesVenc'}
                  value={form.values.mesVenc}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  type={'text'}
                  classNAME={verificadorErro('mesVenc') ? 'error' : ''}
                  mask="99"
                />

                <Input
                  width={'155px'}
                  textoLabel={'Ano de vencimento'}
                  labelId={'anoVenc'}
                  id={'anoVenc'}
                  name={'anoVenc'}
                  value={form.values.anoVenc}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  type={'text'}
                  classNAME={verificadorErro('anoVenc') ? 'error' : ''}
                  mask="9999"
                />
              </div>

              <div className="divLinkPAG">
                <Button
                  type={'submit'}
                  onClick={form.handleSubmit}
                  disebled={isLoading}
                >
                  {isLoading ? 'Finalizando compra...' : 'Finalizar pagamento'}
                </Button>

                <LinkPAG onCLICK={voltarParaEndereco} rota="">
                  Voltar para a edição de endereço
                </LinkPAG>
              </div>
            </StyleForm>
          </form>
        )}
      </>
    </Aside>
  )
}
