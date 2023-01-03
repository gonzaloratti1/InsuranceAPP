import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { CotizadorProvider } from './context/CotizadorProvider'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CotizadorProvider>
        <App/>
    </CotizadorProvider>
  </React.StrictMode>
)
