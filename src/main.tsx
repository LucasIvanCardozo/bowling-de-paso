import './main.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Index from './Pages/index.tsx'
import Historia from './Pages/historia/index.tsx'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import Layout from './Pages/layout.tsx'
import Logros from './Pages/logros/index.tsx'
import Menu from './Pages/menu/index.tsx'
import { HelmetProvider } from 'react-helmet-async'
import { Loading } from './Pages/loading.tsx'

const router = createHashRouter([
  {
    Component: Layout,
    loader: Loading,
    children: [
      {
        index: true,
        Component: Index,
      },
      {
        path: '/historia',
        Component: Historia,
      },
      {
        path: '/logros',
        Component: Logros,
      },
      {
        path: '/menu',
        Component: Menu,
      },
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <HelmetProvider>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </HelmetProvider>
)
