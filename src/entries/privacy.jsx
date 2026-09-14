import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Page from '../pages/Privacy.jsx'
import '../styles.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Page />
  </StrictMode>,
)
