import React from "react"

interface ModalProps {
  children: React.ReactNode
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Modal: React.FC<ModalProps> = ({ children, setOpen }) => {
  const close = () => {
    setOpen(false)
  }

  return (
    <>
      <div className='fixed top-0 left-0 z-10 h-screen w-screen bg-[#343434] opacity-60'></div>
      <div className='fixed top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white'>
        <button
          className='fixed top-3 right-3 font-thin'
          onClick={close}
          onKeyDown={close}
        >
          X
        </button>
        {children}
      </div>
    </>
  )
}

export default Modal
