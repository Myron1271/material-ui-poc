import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Pricing from "./components/Pricing.jsx";
import FAQ from "./components/FAQ.jsx";
import ContactForm from "./components/ContactForm.jsx"
import Footer from "./components/Footer.jsx"
import ScrollToTop from "./components/ScrollToTop.jsx";
import './App.css'
import React from "react";
import { Outlet } from "react-router-dom";

function App() {

  return (
    <>
        <div style={{overflowX: "hidden"}}>
            <Navbar/>
            <Hero/>
            <Pricing/>
            <FAQ/>
            <ContactForm/>
            <Footer/>
            <ScrollToTop />
        </div>
        <Outlet/>
    </>
  )
}

export default App
