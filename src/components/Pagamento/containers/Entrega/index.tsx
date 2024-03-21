import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Aside } from '../../components/Aside'
import { Input } from '../../components/Input'
import { LinkPAG } from '../../components/LinkPag'
import { StyleForm } from './style'
import { Titulo } from '../../components/Titulo'

export const Entrega = () => {
  const status = true

  // const verificardorDeErro = (name: string) =>{
  //   const touched = name in form.touched
  //   const errors = name in form.errors
  //   cont temErro = touched && errors
  //   return temErro
  // }

  const getErroMsg = (name: string, message?: string) => {
    const touched = name in form.touched
    const errors = name in form.errors

    if (touched && errors) return message
  }

  const form = useFormik({
    initialValues: {
      nome: 'a',
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
    onSubmit: (values) => {
      console.log(values)
    }
  })

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
            <button type="submit">Submit test </button>
            <LinkPAG rota="">Continuar com o pagamento</LinkPAG>

            <LinkPAG rota="">Voltar para o carrinho</LinkPAG>
          </div>
        </StyleForm>
      </form>
    </Aside>
  )
}
