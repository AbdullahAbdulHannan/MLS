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
import AdminCareerPage from './pages/AdminCareer'

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
    <Route
            exact
            path="/admin-career"
            element={<AdminCareerPage />}
          />
    
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App