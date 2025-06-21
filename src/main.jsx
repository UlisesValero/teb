import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import DarkBgProvider from './context/DarkBg.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <DarkBgProvider>
    <App />
    </DarkBgProvider>
    </BrowserRouter>
  </StrictMode>,
)
