import React from "react"
import { useLocation } from "react-router-dom"

import BackgroundHeaderHome from "../assets/background_header-rectangle.png"
// todo: BackgroundHeaderDefault

const BackgroundHeader = () => {
  const page = useLocation().pathname

  return (
    <img
      className='absolute top-10 md:top-0 lg:-top-50 xl:-top-60 left-0 w-screen -z-10'
      src={page === "/" ? BackgroundHeaderHome : BackgroundHeaderHome}
    />
  )
}

export default BackgroundHeader
