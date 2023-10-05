import React from 'react'
import { createRoot } from 'react-dom/client';
import Welcome from './App.jsx'

const root = createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    {/* It just displays the "Hello," */}
    <Welcome/>
  </React.StrictMode>,
)
