import React from 'react'
import { GlobalCss } from './styles'
// import { Home } from './pages/Home/Home'
import { BrowserRouter } from 'react-router-dom'
import { Rotas } from './routes'
import { Provider } from 'react-redux'
import { store } from './store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <Rotas />
      </BrowserRouter>
    </Provider>
  )
}

export default App
