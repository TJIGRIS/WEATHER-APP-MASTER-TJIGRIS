import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { WeatherContextProvider } from './context/WeatherContexProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <WeatherContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </WeatherContextProvider>
)
