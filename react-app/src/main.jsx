/*
  main.jsx — React Entry Point
  ============================
  This is the very first JavaScript file the browser runs.
  Its only job is to "mount" the React app onto the HTML page.

  The index.html file (in the project root) has a <div id="root"></div>.
  React takes over that div and renders everything inside it.

  StrictMode is a React development tool: it intentionally runs certain
  code twice to help you catch bugs early. It has no effect in production.

  BrowserRouter (from React Router) enables client-side navigation —
  clicking links updates the URL without reloading the whole page.
*/

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'          // global CSS (colors, typography, layout)
import App from './App.jsx'   // our root component

// Find the #root div in index.html and attach React to it
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* BrowserRouter wraps the whole app so any component can use
        routing hooks like useNavigate, useLocation, etc. */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)
