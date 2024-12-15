import React from 'react'
import Home from './components/Home'
import Footer from './components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Services from './components/Services'
import Contact from './components/Contact'
import Career from './components/Career'
import { StickyNavbar } from './components/Navbar'

const App = () => {
  return (
    <>
   
    <BrowserRouter>
<StickyNavbar/>
    <Routes>
    <Route
            exact
            path="/"
            element={<Home />}
          />
    <Route
            exact
            path="/services"
            element={<Services />}
          />
    <Route
            exact
            path="/contact"
            element={<Contact />}
          />
    <Route
            exact
            path="/career"
            element={<Career />}
          />
    
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App