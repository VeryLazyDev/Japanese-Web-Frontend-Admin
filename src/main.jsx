import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import Providers from './components/providers'
import { RouterProvider } from 'react-router-dom'
import router from './app/routes/route'



createRoot(document.getElementById('root')).render(
 <Providers>
  <RouterProvider router={router} />
 </Providers>
)
