import React from 'react'
import { createRoot } from 'react-dom/client';
import Welcome from './App.jsx'

const root = createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    {/* As I understand; JSX Expressions too works as a value" */}
    <Welcome nameValue={<p>JSX Expression</p>}/>
  </React.StrictMode>,
)
