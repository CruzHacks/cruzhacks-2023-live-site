import React from "react"
import { Link } from "react-router-dom"

import InstagramLogo from "../assets/logo_social-instagram-white.svg"
import FacebookLogo from "../assets/logo_social-facebook-white.svg"
import LinkedinLogo from "../assets/logo_social-linkedin-white.svg"
import MailLogo from "../assets/logo_social-mail-white.svg"
import TwitterLogo from "../assets/logo_social-twitter-white.svg"

const Footer: React.FC = () => {
  return (
    <>
      {/* Mobile */}
      <footer className='flex md:hidden fixed p-5 bottom-0 w-screen bg-white text-darkgray justify-evenly'>
        <Link to='/map'>icon map</Link>
        <Link to='/support/resources-and-support'>icon resources</Link>
        <Link to='/'>icon home</Link>
        <Link to='/support/faq-and-rules'>icon faq</Link>
        <div>icon settings</div>
      </footer>

      {/* Desktop */}
      <footer className='hidden md:flex p-5 px-8 justify-between bg-navy text-white'>
        {/* Quick Looks hidden on Medium Screen Size*/}
        <div className='grow hidden lg:flex gap-3'>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='mailto:contact@cruzhacks.com'
          >
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

        <div className='grow flex justify-between items-center gap-5'>
          <div className='flex'>
            <p>CRUZHACKS © 2023</p>
          </div>
          <div className='flex justify-end gap-5'>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://www.instagram.com/cruzhacks/?hl=en'
            >
              <img src={InstagramLogo} />
            </a>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://www.facebook.com/CruzHacks/'
            >
              <img src={FacebookLogo} />
            </a>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://www.linkedin.com/company/cruzhacks'
            >
              <img src={LinkedinLogo} />
            </a>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='mailto:contact@cruzhacks.com'
            >
              <img src={MailLogo} />
            </a>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://twitter.com/CruzHacks'
            >
              <img src={TwitterLogo} />
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
