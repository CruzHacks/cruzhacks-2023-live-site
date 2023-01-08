// import { ReactComponent as CruzHacksLogo } from "../../assets/CruzHacksLogo.svg"

import React from "react"
import { Link } from "react-router-dom"

const Navbar: React.FC = () => {
  return (
    <div className='fixed top-0 flex w-screen justify-between border-2 bg-white'>
      <div className='grow border-2'>Cruzhacks</div>
      <div className='flex grow justify-evenly border-2'>
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
