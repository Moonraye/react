import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './Header.jsx'
import Info from './Info.jsx'
import Projects from './Projects.jsx'
import Contacts from './Contacts.jsx'
import Footer  from './Footer.jsx'  
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Info />
    <Projects />
    <Contacts />
    <Footer />
  </StrictMode>
)

