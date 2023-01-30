import React, { useEffect, useState } from "react"
import { Route, Routes } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import FAQ from "./views/FAQ"
import Home from "./views/Home"
import Map from "./views/Map"
import Resources from "./views/Resources"
import { onValue, ref } from "firebase/database"
import { Announcement } from "./views/Home/Notifications"
import { rtdb } from "./utils/firebase"

import "react-toastify/dist/ReactToastify.css"

const notify = (message: Announcement) => {
  toast(`Live Update: "${message.body}"`)
}

function App() {
  const [updates, setUpdates] = useState([])

  // Update announcements
  useEffect(() => {
    const announcements = ref(rtdb, "Announcements")
    return onValue(announcements, snapshot => {
      const data = snapshot.val()

      if (snapshot.exists()) {
        const _updates: any = Object.values(data).reverse()
        setUpdates(_updates)

        notify(_updates[0])
      }
    })
  }, [])

  return (
    <>
      {/* Background Color z-index Fix (for header images*/}
      <div className='fixed -z-50 h-screen w-screen bg-gray'></div>

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

      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
        className='mt-20'
      />
    </>
  )
}

export default App
