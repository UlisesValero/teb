import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import ServiceDetail from './components/pages/ServiceDetail'
import NotFound from './components/pages/NotFoundPage'

export const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/servicios", element: <App /> },
  { path: "/contacto", element: <App /> },
  { path: "/servicio/:id", element: <ServiceDetail /> },
  { path: "*", element: <NotFound /> }
])
