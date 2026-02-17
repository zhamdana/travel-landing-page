import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './components/Navbar.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Testimonials from './components/Testimonials.jsx'
import Options from './components/Options.jsx'
import Newsletter from './components/Newsletter.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Hero />
    <Testimonials />
    <Options />
    <Newsletter />
  </StrictMode>,
)
