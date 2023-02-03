import React from "react"
import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import FAQ from "./views/FAQ"
import Home from "./views/Home"
import Map from "./views/Map"
import Resources from "./views/Resources"
import useAnnoucements from "./hooks/useAnnouncements"

const App: React.FC = () => {
  const announcements = useAnnoucements()

  return (
    <>
      {/* Background Color z-index Fix (for header images) */}
      <div className='bg-gray fixed -z-50 h-screen w-screen'></div>

      <div>
        <Navbar />
        <div className='mx-auto max-w-screen-md p-10'>
          <Routes>
            <Route path='/' element={<Home announcements={announcements} />} />
            <Route path='/support/resources-and-support' element={<Resources />} />
            <Route path='/support/faq-and-rules' element={<FAQ />} />
            <Route path='/map' element={<Map />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
