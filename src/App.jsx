import React, { useEffect } from 'react'
import Home from './pages/Home'
import Footer from './components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Career from './pages/Career'
import { StickyNavbar } from './components/Navbar'
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollRestore from './components/ScrollRestore'
import AdminCareer from './pages/AdminCareer'


const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
   
    <BrowserRouter>
    <ScrollRestore/>
<StickyNavbar/>
    <Routes>
    <Route
             
            path="/"
            element={<Home />}
          />
    <Route
             
            path="/services"
            element={<Services />}
          />
    <Route
             
            path="/contact"
            element={<Contact />}
          />
    <Route
             
            path="/career"
            element={<Career />}
          />
    <Route
            path="/admin-career"
            element={<AdminCareer />}
          />
    
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App