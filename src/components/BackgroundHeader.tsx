import React from "react"
import { useLocation } from "react-router-dom"

import BackgroundHeaderHome from "@/assets/background_header-rectangle.png"
import BackgroundHeaderDefault from "@/assets/background_header-curve.png"
// todo: BackgroundHeaderDefault

const BackgroundHeader = () => {
  const page = useLocation().pathname

  // TODO: Fix Large Home Screen Image top placement/height

  return (
    <div
      className={
        "transition-top fixed left-0 -z-10 w-screen overflow-hidden " +
        (page === "/" ? "md:-top-10" : "")
      }
    >
      <img
        className={
          "transition-top overflow-hidden " +
          (page === "/"
            ? "w-screen md:h-[45vh]"
            : "top-[4rem] md:top-8 lg:-top-50 h-80 md:h-auto w-[150vw] max-w-[150vw] md:w-screen")
        }
        alt={"Page Background Header"}
        src={page === "/" ? BackgroundHeaderHome : BackgroundHeaderDefault}
      />
    </div>
  )
}

export default BackgroundHeader
