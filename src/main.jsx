import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { GlobalStyles } from './styles/global.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
)
