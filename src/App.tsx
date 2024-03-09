import React from 'react'
import { GlobalCss } from './styles'
// import { Home } from './pages/Home/Home'
import { BrowserRouter } from 'react-router-dom'
import { Rotas } from './routes'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <Rotas />
    </BrowserRouter>
  )
}

export default App
