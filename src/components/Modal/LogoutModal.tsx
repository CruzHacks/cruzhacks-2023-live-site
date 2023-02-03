import React from "react"
import { useAuth0 } from "@auth0/auth0-react"
import Modal from "."

interface LogoutModalProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  location: string
}

const LogoutModal: React.FC<LogoutModalProps> = ({ setOpen, location }) => {
  const { logout, loginWithRedirect, isAuthenticated } = useAuth0()
  const cancel = () => {
    setOpen(false)
  }
  return (
    <Modal setOpen={setOpen}>
      <div className='flex w-[15rem] flex-col items-center gap-3 p-10 pb-5'>
        <h1 className='text-center text-xl'>
          {isAuthenticated ? "Logout" : "Login"}
        </h1>
        <p className='text-sm font-thin'>
          {isAuthenticated ? "Are you sure you want to log out?" : ""}
        </p>
      </div>
      <div className='flex h-[4rem] w-full items-stretch justify-evenly'>
        <button
          className='grow rounded-bl-lg bg-[#EAEAEA] font-thin'
          onClick={cancel}
          onKeyDown={cancel}
        >
          Cancel
        </button>
        {isAuthenticated ? (
          <button
            className='grow rounded-br-lg bg-[#E27474] font-thin text-white'
            onClick={() => logout({ returnTo: location })}
            onKeyDown={() => logout({ returnTo: location })}
          >
            Logout
          </button>
        ) : (
          <button
            className='grow rounded-br-lg bg-[#82ce7b] font-thin text-white'
            onClick={() => loginWithRedirect()}
            onKeyDown={() => loginWithRedirect()}
          >
            Login
          </button>
        )}
      </div>
    </Modal>
  )
}

export default LogoutModal
