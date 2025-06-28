import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import DarkBgProvider from './context/DarkBg.jsx'
import { RouterProvider } from 'react-router-dom'
import { router } from './lib/Router.jsx'
import './App.css'
import Layout from './components/ui/Layout.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DarkBgProvider>
      <Layout>
        <RouterProvider  router={router} />
      </Layout>
    </DarkBgProvider>
  </StrictMode>,
)
