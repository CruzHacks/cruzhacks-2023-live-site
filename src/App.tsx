import React, { useState } from "react"
import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import FAQ from "./views/FAQ"
import Home from "./views/Home"
import Map from "./views/Map"
import Resources from "./views/Resources"
import { Announcement } from "./views/Home/Notifications"
import { styled } from "@mui/material"
import AnnouncementListener from "./components/AnnouncementListener"
import { SnackbarProvider } from "notistack"

const StyledSnackbarProvider = styled(SnackbarProvider)`
  &.SnackbarItem-contentRoot {
    background-color: #1b1b37;
  }
`

const App: React.FC = () => {
  const [updates, setUpdates] = useState<Announcement[]>([])

  return (
    <StyledSnackbarProvider maxSnack={3}>
      {/* Background Color z-index Fix (for header images*/}
      <div className='bg-gray fixed -z-50 h-screen w-screen'></div>

      <AnnouncementListener updates={updates} setUpdates={setUpdates} />
      <div>
        <Navbar />
        <div className='mx-auto max-w-screen-md p-10'>
          <Routes>
            <Route path='/' element={<Home announcements={updates} />} />
            <Route path='/support/resources-and-support' element={<Resources />} />
            <Route path='/support/faq-and-rules' element={<FAQ />} />
            <Route path='/map' element={<Map />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </StyledSnackbarProvider>
  )
}

export default App
