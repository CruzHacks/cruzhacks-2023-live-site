import React from "react"
import NavLogoProps from "./NavLogo.model"

const ResourcesNavLogo: React.FC<NavLogoProps> = ({ override }) => {
  return (
    <svg
      className={override}
      width='30'
      height='24'
      viewBox='0 0 30 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M27 3H15L12 0H3C1.35 0 0.015 1.35 0.015 3L0 21C0 22.65 1.35 24 3 24H27C28.65 24 30 22.65 30 21V6C30 4.35 28.65 3 27 3ZM27 21H3V6H27V21Z' />
    </svg>
  )
}

export default ResourcesNavLogo
