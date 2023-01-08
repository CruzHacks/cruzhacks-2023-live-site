import React from "react"
import { useLocation } from "react-router-dom"

import BackgroundHeaderHome from "../assets/background_header-rectangle.png"
// todo: BackgroundHeaderDefault

const BackgroundHeader = () => {
  const page = useLocation().pathname

  return (
    <img
      className='absolute transition-top top-10 md:top-0 lg:-top-50 left-0 -z-10 w-screen'
      alt={"Page Background Header"}
      src={page === "/" ? BackgroundHeaderHome : BackgroundHeaderHome}
    />
  )
}

export default BackgroundHeader
