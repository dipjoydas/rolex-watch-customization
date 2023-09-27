import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { SliderProvider } from './context/Slider_context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SliderProvider>
      <App />

    </SliderProvider>

  </React.StrictMode>,
)
