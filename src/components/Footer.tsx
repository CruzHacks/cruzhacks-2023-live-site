import React, { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import LogoutModal from "./Modal/LogoutModal"
import SwitchAccountsModal from "./Modal/SwitchAccountsModal"

// Mobile Nav Logos
import MapNavLogo from "./NavIcons/MapNavLogo"
import HomeNavLogo from "./NavIcons/HomeNavLogo"
import FaqNavLogo from "./NavIcons/FaqNavLogo"

// Desktop Social Logos
import InstagramLogo from "../assets/logo_social-instagram-white.svg"
import FacebookLogo from "../assets/logo_social-facebook-white.svg"
import LinkedinLogo from "../assets/logo_social-linkedin-white.svg"
import MailLogo from "../assets/logo_social-mail-white.svg"
import TwitterLogo from "../assets/logo_social-twitter-white.svg"
import SettingsNavLogo from "./NavIcons/SettingsNavLogo"
import ResourcesNavLogo from "./NavIcons/ResourcesNavLogo"

interface FooterSocialProps {
  link: string
  src: string
  alt: string
}

const FooterSocial: React.FC<FooterSocialProps> = ({ link, src, alt }) => {
  return (
    <a target='_blank' rel='noopener noreferrer' href={link}>
      <img src={src} alt={alt} />
    </a>
  )
}

const Footer: React.FC = () => {
  const page = useLocation().pathname

  // Settings Submenu
  const [hoverSupport, setHoverSupport] = useState(false)
  const [hoverSupportMenu, setHoverSupportMenu] = useState(false)

  // Logout Modal
  const [showLogout, setShowLogout] = useState(false)
  const [showSwitchAccount, setShowSwitchAccount] = useState(false)

  const SettingsMenu = (
    <div className='flex flex-col'>
      <div
        className='flex flex-col items-center gap-2'
        onMouseEnter={() => setHoverSupport(true)}
        onMouseLeave={() => setHoverSupport(false)}
      >
        <SettingsNavLogo
          override={"h-8 w-9"}
          fill={hoverSupport || hoverSupportMenu ? "#6F6FE8" : "#5F5F5F"}
        />
        <p>Settings</p>
      </div>
      {(hoverSupport || hoverSupportMenu) && (
        <div
          onMouseEnter={() => setHoverSupportMenu(true)}
          onMouseLeave={() => setHoverSupportMenu(false)}
          className='fixed right-0 mt-[-6rem] w-[9rem] pb-[3rem]'
        >
          <div className='flex flex-col gap-2 rounded-lg bg-white p-3 text-sm'>
            <button
              className='hover:bg-gray rounded-lg p-1'
              onClick={() => setShowLogout(true)}
              onKeyDown={() => setShowLogout(true)}
            >
              Log Out
            </button>
            <button
              className='hover:bg-gray rounded-lg p-1'
              onClick={() => setShowSwitchAccount(true)}
              onKeyDown={() => setShowSwitchAccount(true)}
            >
              Switch Accounts
            </button>
          </div>
        </div>
      )}
    </div>
  )

  return (
    <>
      {/* Mobile */}
      <footer className='text-darkgray fixed bottom-0 z-50 flex w-screen items-center justify-evenly bg-white p-5 md:hidden'>
        <Link className='flex flex-col items-center gap-2' to='/map'>
          <MapNavLogo override={"h-8 w-9 " + (page === "/map" ? "fill-[#6F6FE8]" : "fill-[#5F5F5F]")} />
          <p className={page === "/map" ? "text-purple" : ""}>Map</p>
        </Link>

        <Link className='flex flex-col items-center gap-2' to='/support/resources-and-support'>
          <ResourcesNavLogo
            override={
              "h-8 w-9 " + (page === "/support/resources-and-support" ? "fill-[#6F6FE8]" : "fill-[#5F5F5F]")
            }
          />
          <p className={page === "/support/resources-and-support" ? "text-purple" : ""}>Resources</p>
        </Link>

        <Link className='flex flex-col items-center gap-2' to='/'>
          <HomeNavLogo override={"h-8 w-9 " + (page === "/" ? "fill-[#6F6FE8]" : "fill-[#5F5F5F]")} />
          <p className={page === "/" ? "text-purple" : ""}>Home</p>
        </Link>

        <Link className='flex flex-col items-center gap-2' to='/support/faq-and-rules'>
          <FaqNavLogo
            override={"h-8 w-9 " + (page === "/support/faq-and-rules" ? "fill-[#6F6FE8]" : "fill-[#5F5F5F]")}
          />
          <p className={page === "/support/faq-and-rules" ? "text-purple" : ""}>Faq</p>
        </Link>
        {SettingsMenu}
      </footer>

      {showLogout ? (
        <LogoutModal setOpen={setShowLogout} />
      ) : showSwitchAccount ? (
        <SwitchAccountsModal setOpen={setShowSwitchAccount} />
      ) : (
        <></>
      )}

      {/* Desktop */}
      <footer className='bg-navy hidden justify-between p-5 px-8 text-white md:flex'>
        {/* Quick Looks hidden on Medium Screen Size*/}
        <div className='hidden grow gap-3 lg:flex'>
          <a target='_blank' rel='noopener noreferrer' href='mailto:contact@cruzhacks.com'>
            Contact Us
          </a>
          <span>|</span>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://static.mlh.io/docs/mlh-code-of-conduct.pdf'
          >
            Code of Conduct
          </a>
          <span>|</span>
          <a
            target='_blank'
            // eslint-disable-next-line max-len
            href='https://docs.google.com/document/d/1298VyEqrSIvbzM3U8nvLQsLtY78Vi2mbndr3d5w0UKk/edit?usp=sharing'
            rel='noopener noreferrer'
          >
            Participant Agreement
          </a>
        </div>

        <div className='flex grow items-center justify-between gap-5'>
          <div className='flex'>
            <p>CRUZHACKS © 2023</p>
          </div>
          <div className='flex justify-end gap-5'>
            <FooterSocial
              link='https://www.instagram.com/cruzhacks/?hl=en'
              src={InstagramLogo}
              alt='Instagram Logo'
            />
            <FooterSocial link='https://www.facebook.com/CruzHacks/' src={FacebookLogo} alt='Facebook Logo' />
            <FooterSocial
              link='https://www.linkedin.com/company/cruzhacks'
              src={LinkedinLogo}
              alt='LinkedIn Logo'
            />
            <FooterSocial link='mailto:contact@cruzhacks.com' src={MailLogo} alt='Email Logo' />
            <FooterSocial link='https://twitter.com/CruzHacks' src={TwitterLogo} alt='Twitter Logo' />
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
