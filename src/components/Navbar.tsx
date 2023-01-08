// import { ReactComponent as CruzHacksLogo } from "../../assets/CruzHacksLogo.svg"

import React from "react"
import { Link } from "react-router-dom"

const Navbar: React.FC = () => {
  return (
    <div className='flex align-center justify-between border-2'>
      <div className='grow border-2'>Cruzhacks</div>
      <div className='grow border-2 border- flex align-center justify-evenly'>
        <Link to='/'>Home</Link>
        <Link to='/map'>Map</Link>
        <Link to='/support'>Support</Link>
        <a>Login</a>
      </div>
    </div>
  )
}

export default Navbar
