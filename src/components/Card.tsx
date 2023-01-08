import React from "react"

interface CardProps {
  children: React.ReactNode
}

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className='p-10 md:p-20 lg:p-50 rounded-xl bg-white shadow-md'>
      {children}
    </div>
  )
}

export default Card
