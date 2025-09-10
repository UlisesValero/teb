import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './lib/Router.jsx'
import DarkBgProvider from './context/DarkBg.jsx'
import './App.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DarkBgProvider>
        <RouterProvider  router={router} />
    </DarkBgProvider>
  </StrictMode>,
)
