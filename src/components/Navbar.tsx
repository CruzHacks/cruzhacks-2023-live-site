import React, { useState } from "react"
import { Link, useLocation } from "react-router-dom"

import CruzhacksLogo from "../assets/logo_cruzhacks-main-white.svg"
import Button from "./Button"

const Navbar: React.FC = () => {
  const page = useLocation().pathname
  const [hoverSupport, setHoverSupport] = useState(false)
  const [hoverSupportMenu, setHoverSupportMenu] = useState(false)

  const SupportMenu = (
    <div className='flex flex-col'>
      <p
        onMouseEnter={() => setHoverSupport(true)}
        onMouseLeave={() => setHoverSupport(false)}
        className={
          page.split("/")[1] === "support" ? "border-purple h-7 border-b-2" : ""
        }
      >
        Support
      </p>
      {(hoverSupport || hoverSupportMenu) && (
        <div
          onMouseEnter={() => setHoverSupportMenu(true)}
          onMouseLeave={() => setHoverSupportMenu(false)}
          className='w-[8rem] pt-[3rem] fixed'
        >
          <div className='bg-navy p-3 flex flex-col gap-2 text-sm'>
            <Link
              className='p-1 rounded-lg hover:bg-[#595973]'
              to='/support/resources-and-support'
            >
              Resources & Support
            </Link>
            <Link
              className='p-1 rounded-lg hover:bg-[#595973]'
              to='/support/faq-and-rules'
            >
              FAQ & Rules
            </Link>
          </div>
        </div>
      )}
    </div>
  )

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

        {SupportMenu}

        <Button text='Login' link='/' type='full' override='p-0' />
      </div>
    </div>
  )
}

export default Navbar
