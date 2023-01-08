// import { ReactComponent as CruzHacksLogo } from "../../assets/CruzHacksLogo.svg"

import React from "react"
import { Link } from "react-router-dom"
import useWindowWidthGreaterThan from "../util/useWindowWithGreaterTHan"

const Navbar: React.FC = () => {
  // const mobile = !useWindowWidthGreaterThan()

  return (
    <div className='fixed top-0 flex w-screen justify-between border-2 bg-white'>
      <div className='grow flex items-center justify-center md:justify-start border-2'>
        <h1>Cruzhacks</h1>
      </div>
      <div className='grow hidden md:flex justify-evenly border-2'>
        <Link to='/'>Home</Link>
        <Link to='/map'>Map</Link>

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
