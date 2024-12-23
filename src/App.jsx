import React, { useEffect, useState } from 'react'
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
import NotFoundPage  from './pages/NotFoundPage'


const App = () => {
   const [isAuth, setIsAuth] = useState(false);
  useEffect(() => {
    AOS.init();
    const authStatus = localStorage.getItem("isAuth");
    if (authStatus === "true") {
      setIsAuth(true);
    }
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
            element= {<AdminCareer auth={isAuth} setIsAuth={setIsAuth}/>}
          />
    <Route
            path="*"
            element= {<NotFoundPage/>}
          />
    
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App