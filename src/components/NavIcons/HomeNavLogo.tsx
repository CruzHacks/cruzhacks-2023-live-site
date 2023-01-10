import React from "react"
import NavLogoProps from "./NavLogo.model"

const HomeNavLogo: React.FC<NavLogoProps> = ({ override }) => {
  return (
    <div>
      <svg className={override} width='37' height='31' viewBox='0 0 37 31' xmlns='http://www.w3.org/2000/svg'>
        <path d='M36.3055 15.1188C36.9622 14.5123 36.8988 13.5828 36.1639 13.0431L19.9735 1.14742C19.2387 0.607783 18.0605 0.619088 17.3411 1.1729L1.09566 13.6774C0.376252 14.2312 0.340943 15.1595 1.01749 15.75L1.42478 16.1062C2.1005 16.6967 3.19272 16.7671 3.86277 16.263L5.07686 15.35V28.7161C5.07686 29.5361 5.86818 30.2 6.84409 30.2H13.1766C14.1525 30.2 14.9438 29.5361 14.9438 28.7161V19.3652H23.021V28.7161C23.0069 29.5355 23.7052 30.1994 24.6811 30.1994H31.392C32.3679 30.1994 33.1592 29.5355 33.1592 28.7155V15.5382C33.1592 15.5382 33.4946 15.7849 33.9083 16.0902C34.3212 16.395 35.1886 16.1506 35.8453 15.5436L36.3055 15.1188Z' />
      </svg>
    </div>
  )
}

export default HomeNavLogo