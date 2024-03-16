import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { Perfil } from './pages/Perfil/Perfil'
import ScrollToTop from './service/ScrollToTop'

export const Rotas = () => (
  <>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/perfil/:id" element={<Perfil />} />
    </Routes>
  </>
)
