import React, { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react"
import CruzhacksLogo from "../assets/logo_cruzhacks-main-white.svg"
import Button from "./Button"

const Navbar: React.FC = () => {
  const page = useLocation().pathname
  const [hoverSupport, setHoverSupport] = useState(false)
  const [hoverSupportMenu, setHoverSupportMenu] = useState(false)
  const { isAuthenticated, loginWithRedirect } = useAuth0()

  const SupportMenu = (
    <div className='flex flex-col'>
      <p
        onMouseEnter={() => setHoverSupport(true)}
        onMouseLeave={() => setHoverSupport(false)}
        className={
          "border-b-2 " +
          (page.split("/")[1] === "support" ? "border-purple" : "border-navy")
        }
      >
        Support
      </p>
      {(hoverSupport || hoverSupportMenu) && (
        <div
          onMouseEnter={() => setHoverSupportMenu(true)}
          onMouseLeave={() => setHoverSupportMenu(false)}
          className='fixed -ml-5 w-[8rem] pt-[3rem]'
        >
          <div className='bg-navy flex flex-col gap-2 rounded-lg p-3 text-sm'>
            <Link
              className='rounded-lg p-1 hover:bg-[#595973]'
              to='/support/resources-and-support'
            >
              Resources & Support
            </Link>
            <Link
              className='rounded-lg p-1 hover:bg-[#595973]'
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
    <div className='bg-navy fixed top-0 z-50 flex w-screen justify-between p-5 text-white'>
      <div className='flex grow items-center justify-center gap-3 md:justify-start'>
        <img className='h-9' src={CruzhacksLogo} alt='CruzHacks Logo' />
        <h1 className='font-barlow flex gap-1 text-2xl'>
          CRUZHACKS<span className='mt-1 text-xs font-thin'>LIVE</span>
        </h1>
      </div>
      <div className='font-nunito hidden h-7 grow items-center justify-evenly font-thin md:flex'>
        <Link
          to='/'
          className={
            "border-b-2 " + (page === "/" ? "border-purple" : "border-navy")
          }
        >
          Home
        </Link>
        <Link
          to='/map'
          className={
            "border-b-2 " + (page === "/map" ? "border-purple" : "border-navy")
          }
        >
          Map
        </Link>

        {SupportMenu}

        {isAuthenticated ? (
          <Button
            text='Portal'
            link='https://cruzhacks.com/myPortal'
            type='full'
            override='p-0 px-8 lg:px-20'
          />
        ) : (
          <button
            className={
              "border-purple bg-purple rounded-md border-2 p-0 px-8 text-center text-white lg:px-20"
            }
            onClick={() => loginWithRedirect()}
          >
            Login
          </button>
        )}
      </div>
    </div>
  )
}

export default Navbar
