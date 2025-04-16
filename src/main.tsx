import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserView, MobileView } from 'react-device-detect'
import MobileApp from './mobileApp.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserView>
      <App />
    </BrowserView>
    <MobileView>
      <MobileApp />
    </MobileView>
  </StrictMode>,
)
