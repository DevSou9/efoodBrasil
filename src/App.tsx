import React from 'react'
import { GlobalCss } from './styles'
import { BrowserRouter } from 'react-router-dom'
import { Rotas } from './routes'
import { Provider } from 'react-redux'
import { store } from './store'
import { Cart } from './components/Cart'
import { Entrega } from './components/Pagamento/containers/Entrega'
import { Pagamento } from './components/Pagamento/containers/Pagamento'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Cart />
        <Entrega />
        <Pagamento />
        <GlobalCss />
        <Rotas />
      </BrowserRouter>
    </Provider>
  )
}

export default App
