import React from "react"
import { Link } from "react-router-dom"

const Footer: React.FC = () => {
  return (
    <>
      {/* Mobile */}
      <footer className='flex md:hidden fixed bottom-0 w-screen bg-white justify-evenly border-2'>
        <Link to='/map'>icon map</Link>
        <Link to='/support/resources-and-support'>icon resources</Link>
        <Link to='/'>icon home</Link>
        <Link to='/support/faq-and-rules'>icon faq</Link>
        <div>icon settings</div>
      </footer>

      {/* Desktop */}
      <footer className='hidden md:flex justify-between border-2'>
        {/* Quick Looks hidden on Medium */}
        <div className='grow hidden lg:flex gap-3 border-2'>
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

        <div className='grow border-2 flex justify-end gap-1'>
          <div className=''>CRUZHACKS © 2023</div>
          {/* <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://2022.cruzhacks.com/'
          className='footer__container--right--socials'
        >
          <img src={process.env.PUBLIC_URL + "/logo_2022-white.svg"} />
        </a>
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://www.instagram.com/cruzhacks/?hl=en'
          className='footer__container--right--socials'
        >
          <img
            src={process.env.PUBLIC_URL + "/logo_social-instagram-white.svg"}
          />
        </a>
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://www.facebook.com/CruzHacks/'
          className='footer__container--right--socials'
        >
          <img
            src={process.env.PUBLIC_URL + "/logo_social-facebook-white.svg"}
          />
        </a>
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://www.linkedin.com/company/cruzhacks'
          className='footer__container--right--socials'
        >
          <img
            src={process.env.PUBLIC_URL + "/logo_social-linkedin-white.svg"}
          />
        </a>
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='mailto:contact@cruzhacks.com'
          className='footer__container--right--socials'
        >
          <img src={process.env.PUBLIC_URL + "/logo_social-mail-white.svg"} />
        </a>
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://twitter.com/CruzHacks'
          className='footer__container--right--socials'
        >
          <img
            src={process.env.PUBLIC_URL + "/logo_social-twitter-white.svg"}
          />
        </a> */}
        </div>
      </footer>
    </>
  )
}

export default Footer
