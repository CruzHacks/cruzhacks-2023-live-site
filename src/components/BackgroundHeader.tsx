import React from "react"
import { useLocation } from "react-router-dom"

import BackgroundHeaderHome from "../assets/background_header-rectangle.png"
// todo: BackgroundHeaderDefault

const BackgroundHeader = () => {
  const page = useLocation().pathname

  return (
    <img
      className='transition-top lg:-top-50 absolute top-10 left-0 -z-10 w-screen overflow-hidden md:top-0'
      alt={"Page Background Header"}
      src={page === "/" ? BackgroundHeaderHome : BackgroundHeaderHome}
    />
  )
}

export default BackgroundHeader
