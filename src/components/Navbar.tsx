import React, { useState } from "react"
import { Link, useLocation } from "react-router-dom"

import CruzhacksLogo from "../assets/logo_cruzhacks-main-white.svg"
import Button from "./Button"

const Navbar: React.FC = () => {
  const page = useLocation().pathname
  // const showSupport = useState(false)

  return (
    <div className='bg-navy fixed top-0 flex w-screen justify-between p-5 text-white'>
      <div className='flex grow items-center justify-center gap-3 md:justify-start'>
        <img className='h-9' src={CruzhacksLogo} alt='CruzHacks Logo' />
        <h1 className='flex gap-1 text-2xl'>
          CRUZHACKS<span className='mt-1 text-xs font-thin'>LIVE</span>
        </h1>
      </div>
      <div className='hidden grow justify-evenly md:flex'>
        <Link
          to='/'
          className={page === "/" ? "border-purple h-7 border-b-2" : ""}
        >
          Home
        </Link>
        <Link
          to='/map'
          className={page === "/map" ? "border-purple h-7 border-b-2" : ""}
        >
          Map
        </Link>

        {/* TODO: Support Should be a dropdown */}
        <div className='flex flex-col'>
          <Link to='/support/resources-and-support'>Resources & Support</Link>
          <Link to='/support/faq-and-rules'>FAQ & Rules</Link>
        </div>

        <Button text='Login' link='/' type='full' />
      </div>
    </div>
  )
}

export default Navbar
