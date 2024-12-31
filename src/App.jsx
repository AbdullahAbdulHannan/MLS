import React, { Suspense, useEffect, useState } from 'react'

import Footer from './components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { StickyNavbar } from './components/Navbar'
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollRestore from './components/ScrollRestore'
const Home = React.lazy(() => import('./pages/Home'));
const Services = React.lazy(() => import('./pages/Services'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Career = React.lazy(() => import('./pages/Career'));
const AdminCareer = React.lazy(() => import('./pages/AdminCareer'));
const NotFoundPage = React.lazy(() => import('./pages/NotFoundPage'));


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
<Suspense fallback={<div>Loading...</div>}>
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
    </Suspense>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App