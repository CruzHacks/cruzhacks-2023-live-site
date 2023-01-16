import React from "react"
import Modal from "."

interface LogoutModalProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const LogoutModal: React.FC<LogoutModalProps> = ({ setOpen }) => {
  const cancel = () => {
    setOpen(false)
  }

  const logout = () => {
    alert("Logout")
  }

  return (
    <Modal setOpen={setOpen}>
      <div className='flex w-[15rem] flex-col items-center gap-3 p-10 pb-5'>
        <h1 className='text-center text-xl'>Logout</h1>
        <p className='text-sm font-thin'>Are you sure you want to log out?</p>
      </div>
      <div className='flex h-[4rem] w-full items-stretch justify-evenly'>
        <button className='grow rounded-bl-lg bg-[#EAEAEA] font-thin' onClick={cancel} onKeyDown={cancel}>
          Cancel
        </button>
        <button
          className='grow rounded-br-lg bg-[#E27474] font-thin text-white'
          onClick={logout}
          onKeyDown={logout}
        >
          Logout
        </button>
      </div>
    </Modal>
  )
}

export default LogoutModal
