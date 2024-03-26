import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
// import { useCompraMutation } from '../../../../service/api'
import { Aside } from '../../components/Aside'
import { Input } from '../../components/Input'
import { LinkPAG } from '../../components/LinkPag'
import { StyleForm } from './style'
import { Titulo } from '../../components/Titulo'
import { Button } from '../../../Button/buttonCheckout'
import { useDispatch, useSelector } from 'react-redux'
import { addEndereco } from '../../../../store/reducer/checkoutTempEndereco'
import { RootReducer } from '../../../../store'
import { alterarStautsPagamento } from '../../../../store/reducer/statusPagamento'
import { alterarStatusEntrega } from '../../../../store/reducer/statusEntrega'
import { abrirFecharCart } from '../../../../store/reducer/cartAbrirFechar'

export const Entrega = () => {
  const statusEntrega = useSelector(
    (store: RootReducer) => store.statusEntregaSlice
  )

  const [campoPreenchido, setCampoPreenchido] = useState(false)
  // const todosCamposVazios = Object.values(form.values).every(
  //   (value) => !value
  // )
  // if (todosCamposVazios) {
  //   setCampoPreenchido(true)
  // } else {
  //   setCampoPreenchido(false)
  // }

  const dispatch = useDispatch()

  const [dados, setDados] = useState('')

  useEffect(() => {
    setDados(dados)
  }, [])

  const form = useFormik({
    initialValues: {
      nome: '',
      endereco: '',
      cidade: '',
      cep: '',
      numeroEndereco: '',
      complementoEndereco: ''
    },
    validationSchema: Yup.object({
      nome: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      endereco: Yup.string().required('O campo é obrigatório'),
      cidade: Yup.string().required('O campo é obrigatório'),
      cep: Yup.string().required('O campo é obrigatório'),
      numeroEndereco: Yup.string().required('O campo é obrigatório')
    }),
    onSubmit: () => {}
  })

  const alterarStatusPagamentoNaPagina = () =>
    dispatch(alterarStautsPagamento())

  const alterarStatusEntregaNaPagina = () => dispatch(alterarStatusEntrega())

  const enderecoParaEntrega = () => {
    if (
      form.values.nome === '' ||
      form.values.endereco === '' ||
      form.values.cidade === '' ||
      form.values.cep === '' ||
      form.values.numeroEndereco === ''
    ) {
      setCampoPreenchido(true)
      return
    }
    setCampoPreenchido(false)
    dispatch(
      addEndereco({
        delivery: {
          receiver: form.values.nome,
          address: {
            description: form.values.endereco,
            city: form.values.cidade,
            zipCode: form.values.cep,
            number: Number(form.values.numeroEndereco),
            complement: form.values.complementoEndereco
          }
        }
      })
    )
    alterarStatusEntregaNaPagina()
    alterarStatusPagamentoNaPagina()
  }

  const voltarAoCart = () => {
    dispatch(alterarStatusEntrega())
    dispatch(abrirFecharCart())
  }

  const verificadorErro = (nome: string) => {
    const touched = nome in form.touched
    const errors = nome in form.errors
    const temErros = touched && errors

    return temErros
  }

  return (
    <Aside status={statusEntrega}>
      <form onSubmit={form.handleSubmit}>
        <Titulo>Entrega</Titulo>
        {campoPreenchido && <h3 className="pAlerta">Preencha os campos</h3>}
        <StyleForm>
          <Input
            width={'100%'}
            textoLabel={'Quem irá receber'}
            labelId={'nome'}
            id="nome"
            name="nome"
            value={form.values.nome}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            classNAME={verificadorErro('nome') ? 'error' : ''}
          />

          <Input
            width={'100%'}
            textoLabel={'Endereço'}
            labelId={'endereco'}
            id="endereco"
            name="endereco"
            value={form.values.endereco}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            classNAME={verificadorErro('endereco') ? 'error' : ''}
          />

          <Input
            width={'100%'}
            textoLabel={'Cidade'}
            labelId={'cidade'}
            id="cidade"
            name="cidade"
            value={form.values.cidade}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            classNAME={verificadorErro('cidade') ? 'error' : ''}
          />

          <div className="divInput">
            <Input
              width={'155px'}
              textoLabel={'CEP'}
              labelId={'cep'}
              id="cep"
              name="cep"
              value={form.values.cep}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              classNAME={verificadorErro('cep') ? 'error' : ''}
            />

            <Input
              width={'155px'}
              textoLabel={'Número'}
              labelId={'numeroEndereco'}
              id="numeroEndereco"
              name="numeroEndereco"
              value={form.values.numeroEndereco}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              classNAME={verificadorErro('numeroEndereco') ? 'error' : ''}
            />
          </div>

          <Input
            width={'100%'}
            textoLabel={'Complemento (opcional)'}
            labelId={'complementoEndereco'}
            id="complementoEndereco"
            name="complementoEndereco"
            value={form.values.complementoEndereco}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            classNAME={verificadorErro('complementoEndereco') ? 'error' : ''}
          />

          <div className="divLinkPAG">
            <Button onClick={() => enderecoParaEntrega()} type="button">
              Continuar com o pagamento
            </Button>

            <LinkPAG onCLICK={voltarAoCart} rota="">
              Voltar para o carrinho
            </LinkPAG>
          </div>
        </StyleForm>
      </form>
    </Aside>
  )
}
