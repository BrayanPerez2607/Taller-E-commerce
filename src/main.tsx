import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { FetchProducts } from './components/FetchProducts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FetchProducts />
  </StrictMode>,
)
