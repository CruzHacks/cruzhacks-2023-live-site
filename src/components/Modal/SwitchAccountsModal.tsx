import React from "react"
import Modal from "."

import checkCircle from "../../assets/logo_check-circle.svg"

import CruzhacksLogo from "../../assets/logo_cruzhacks-main-navy.svg"
import PortalLogo from "../../assets/logo_cruzhacks-portal-navy.svg"

interface SwitchAccountsModalProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const SwitchAccountsModal: React.FC<SwitchAccountsModalProps> = ({
  setOpen,
}) => {
  const myPortal = () => {
    window.open("https://cruzhacks.com/myPortal", "_blank")
  }

  return (
    <Modal setOpen={setOpen}>
      <div className='flex w-[15rem] flex-col items-center gap-3 p-8 px-4'>
        <h1 className='text-center text-xl'>Switch Accounts</h1>
        <div className='justify-stretch flex w-full flex-col gap-1'>
          <button className='flex items-center justify-between rounded-lg border border-[#B6B6E0] p-2'>
            <div className='flex items-center gap-2 text-sm font-thin '>
              <img
                src={CruzhacksLogo}
                alt='CruzHacks Navy Logo'
                className='h-5'
              />
              <p className='text-left'>CruzHacks Live</p>
            </div>
            <img
              src={checkCircle}
              alt='Currently Selected Logo'
              className='h-4'
            />
          </button>
          <button
            className='flex items-center gap-2 p-2 text-sm font-thin'
            onClick={myPortal}
            onKeyDown={myPortal}
          >
            <img
              src={PortalLogo}
              className='h-5'
              alt='CruzHacks Portal Navy Logo'
            />
            <p className='text-left'>MyPortal</p>
          </button>
        </div>
      </div>
    </Modal>
  )
}

export default SwitchAccountsModal
