import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Aside } from '../../components/Aside'
import { Input } from '../../components/Input'
import { LinkPAG } from '../../components/LinkPag'
import { StyleForm } from './style'
import { Titulo } from '../../components/Titulo'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../../../store'
import { somarValorCompra } from '../../../../functionsGlobal'
import { Button } from '../../../Button/buttonCheckout'

export const Pagamento = () => {
  const status = useSelector((store: RootReducer) => store.statusPagamentoSlice)

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
      numeroCartao: Yup.number().required('O campo é obrigatório'),
      cvv: Yup.number()
        .min(3, 'O CVV possui 3 dígitos')
        .max(3, 'O CVV possui 3 dígitos')
        .required('O campo é obrigatório'),
      mesVenc: Yup.number()
        .min(3, 'Necessário 2 dígitos')
        .max(3, 'Necessário 2 dígitos')
        .required('O campo é obrigatório'),
      anoVenc: Yup.number()
        .min(3, 'Necessário 4 dígitos')
        .max(3, 'Necessário 2 dígitos')
        .required('O campo é obrigatório')
    }),
    onSubmit: (values) => {
      console.log(values)
    }
  })

  const valorCompra = useSelector(
    (store: RootReducer) => store.dadosCartSlice.itens
  )

  const verificadorErro = (nome: string, msg?: string) => {
    const touched = nome in form.touched
    const errors = nome in form.errors
    if (touched && errors) return msg
  }

  return (
    <Aside status={status}>
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
          />
          <small className="primeiroSmall">
            {verificadorErro('nome', form.errors.nome)}
          </small>
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
            />
            <small>
              {verificadorErro('numeroCartao', form.errors.numeroCartao)}
            </small>
            <small>{verificadorErro('cvv', form.errors.cvv)}</small>
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
            />
            <small>{verificadorErro('mesVenc', form.errors.mesVenc)}</small>
            <small>{verificadorErro('anoVenc', form.errors.anoVenc)}</small>
          </div>

          <div className="divLinkPAG">
            <Button type={'button'}>Finalizar pagamento</Button>
            {/* <button type="submit">Finalizar pagamento</button> */}
            {/* <LinkPAG rota="">Finalizar pagamento</LinkPAG> */}
            <LinkPAG rota="">Voltar para a edição de endereço</LinkPAG>
          </div>
        </StyleForm>
      </form>
    </Aside>
  )
}
