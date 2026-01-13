import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'

const storedTheme = (() => {
  try {
    return localStorage.getItem('theme')
  } catch {
    return null
  }
})()
const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false
const initialDark = storedTheme ? storedTheme === 'dark' : prefersDark
document.documentElement.classList.toggle('dark', initialDark)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
