import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { WheatherApp } from './WheatherApp'
import './Styles/weatherStyles.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WheatherApp />
  </StrictMode>,
)
