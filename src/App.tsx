import React from 'react'
import { GlobalCss } from './styles'
// import { Home } from './pages/Home/Home'
import { BrowserRouter } from 'react-router-dom'
import { Rotas } from './routes'
import { Provider } from 'react-redux'
import { store } from './store'
import { Cart } from './components/Cart'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Cart />
        <GlobalCss />
        <Rotas />
      </BrowserRouter>
    </Provider>
  )
}

export default App
