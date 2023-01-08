import React from "react"
import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Home from "./views/Home"

const { VITE_APP_TITLE } = import.meta.env

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
