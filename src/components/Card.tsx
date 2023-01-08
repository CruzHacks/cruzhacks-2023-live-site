import React from "react"

interface CardProps {
  children: React.ReactNode
}

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className='rounded-xl bg-white p-20 lg:p-50 shadow-md'>{children}</div>
  )
}

export default Card
