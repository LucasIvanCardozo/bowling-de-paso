import './main.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Index from './Pages/index.tsx'
import Historia from './Pages/historia/index.tsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from './Pages/Layout.tsx'
import Logros from './Pages/logros/index.tsx'
import Menu from './Pages/menu/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Index />} />
          <Route path="/historia" element={<Historia />} />
          <Route path="/logros" element={<Logros />} />
          <Route path="/menu" element={<Menu />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
