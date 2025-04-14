import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Navbar from "./components/Navbar.jsx";
import './App.css'
import React from "react";
import { Outlet } from "react-router-dom";

function App() {

  return (
    <>
        <Navbar />
        <Outlet />
    </>
  )
}

export default App
