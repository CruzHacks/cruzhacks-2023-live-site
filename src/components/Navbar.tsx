import React from "react"
import { Link, useLocation } from "react-router-dom"

import CruzhacksLogo from "../assets/logo_cruzhacks-main-white.svg"

const Navbar: React.FC = () => {
  const page = useLocation().pathname

  console.log(page)

  return (
    <div className='fixed p-5 top-0 flex w-screen justify-between bg-navy text-white'>
      <div className='grow flex gap-3 items-center justify-center md:justify-start'>
        <img className='h-9' src={CruzhacksLogo} />
        <h1 className='flex gap-1 text-2xl'>
          CRUZHACKS<span className='text-xs mt-1 font-thin'>LIVE</span>
        </h1>
      </div>
      <div className='grow hidden md:flex justify-evenly'>
        <Link
          to='/'
          className={page === "/" ? "border-purple border-b-2 h-7" : ""}
        >
          Home
        </Link>
        <Link
          to='/map'
          className={page === "/map" ? "border-purple border-b-2 h-7" : ""}
        >
          Map
        </Link>

        {/* TODO: Support Should be a dropdown */}
        <div className='flex flex-col'>
          <Link to='/support/resources-and-support'>Resources & Support</Link>
          <Link to='/support/faq-and-rules'>FAQ & Rules</Link>
        </div>

        <a href='/'>Login</a>
      </div>
    </div>
  )
}

export default Navbar
