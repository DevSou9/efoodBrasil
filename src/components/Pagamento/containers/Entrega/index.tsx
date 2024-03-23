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

export const Entrega = () => {
  const status = true
  const dispatch = useDispatch()
  // const verificardorDeErro = (name: string) =>{
  //   const touched = name in form.touched
  //   const errors = name in form.errors
  //   cont temErro = touched && errors
  //   return temErro
  // }
  const [dados, setDados] = useState('')

  const dadosParaConsole = useSelector((store: RootReducer) =>
    JSON.stringify(store.CheckoutTempEntregaSlice.enderecoUsuario)
  )
  useEffect(() => {
    setDados(dados)
  }, [])
  const getErroMsg = (name: string, message?: string) => {
    const touched = name in form.touched
    const errors = name in form.errors

    if (touched && errors) return message
  }

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

  const enderecoParaEntrega = () => {
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
  }

  const verStado = () => {
    console.log(dadosParaConsole)
  }

  return (
    <Aside status={status}>
      <form onSubmit={form.handleSubmit}>
        <Titulo>Entrega</Titulo>
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
          />
          <small>{getErroMsg('nome', form.errors.nome)}</small>
          <Input
            width={'100%'}
            textoLabel={'Endereço'}
            labelId={'endereco'}
            id="endereco"
            name="endereco"
            value={form.values.endereco}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
          <small>{getErroMsg('endereco', form.errors.endereco)}</small>

          <Input
            width={'100%'}
            textoLabel={'Cidade'}
            labelId={'cidade'}
            id="cidade"
            name="cidade"
            value={form.values.cidade}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
          <small>{getErroMsg('cidade', form.errors.cidade)}</small>

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
            />
            <small className="smallInline">
              {getErroMsg('cep', form.errors.cep)}
            </small>
            <small className="smallInline">
              {getErroMsg('numeroEndereco', form.errors.numeroEndereco)}
            </small>
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
          />

          <div className="divLinkPAG">
            {/* <button onClick={() => enderecoParaEntrega()} type="button">
              ++++++++++
            </button> */}
            <button type="button" onClick={verStado}>
              VER no Console
            </button>

            <Button onClick={() => enderecoParaEntrega()} type="button">
              Continuar com o pagamento
            </Button>

            {/* <LinkPAG rota="">Continuar com o pagamento</LinkPAG> */}

            <LinkPAG rota="">Voltar para o carrinho</LinkPAG>
          </div>
        </StyleForm>
      </form>
    </Aside>
  )
}
