import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Testimonials from './components/Testimonials.jsx'
import Options from './components/Options.jsx'
import Newsletter from './components/Newsletter.jsx'
import Booking from './components/Booking.jsx'
import Packages from './components/Packages.jsx'
import Experience from './components/Experience.jsx'
import Footer from './components/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Hero />
    <Testimonials />
    <Options />
    <Booking />
    <Packages />
    <Experience />
    <Newsletter />
    <Footer />
  </StrictMode>,
)
