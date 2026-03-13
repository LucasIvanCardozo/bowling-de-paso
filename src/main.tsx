import './main.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Index from './pages/index.tsx';
import Historia from './pages/historia/index.tsx';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import Layout from './pages/layout.tsx';
// import Logros from './pages/logros/index.tsx'
// import Menu from './pages/menu/index.tsx'
import { HelmetProvider } from 'react-helmet-async';

const router = createHashRouter([
  {
    Component: Layout,
    children: [
      {
        index: true,
        Component: Index,
      },
      {
        path: '/historia',
        Component: Historia,
      },
      // {
      //   path: '/logros',
      //   Component: Logros,
      // },
      // {
      //   path: '/menu',
      //   Component: Menu,
      // },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <HelmetProvider>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </HelmetProvider>,
);
