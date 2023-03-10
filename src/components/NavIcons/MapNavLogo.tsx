import React from "react"
import NavLogoProps from "./NavLogo.model"

const MapNavLogo: React.FC<NavLogoProps> = ({ override }) => {
  return (
    <div>
      <svg
        className={override}
        width='20'
        height='28'
        viewBox='0 0 20 28'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path d='M17.0725 2.87225C15.1837 1.02014 12.6721 0 10.001 0C7.32937 0 4.81836 1.02014 2.92949 2.87225C-0.566114 6.29932 -1.00052 12.7474 1.98871 16.6542L10.001 28L18.0013 16.67C21.0025 12.7474 20.5681 6.29932 17.0725 2.87225ZM10.0933 13.2951C8.08085 13.2951 6.44283 11.689 6.44283 9.71565C6.44283 7.74235 8.08085 6.1362 10.0933 6.1362C12.1058 6.1362 13.7438 7.74235 13.7438 9.71565C13.7438 11.689 12.1058 13.2951 10.0933 13.2951Z' />
      </svg>
    </div>
  )
}

export default MapNavLogo
