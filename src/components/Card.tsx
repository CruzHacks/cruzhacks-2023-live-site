import React from "react"

interface CardProps {
  children: React.ReactNode
  override?: string
  title?: string
}

const Card: React.FC<CardProps> = ({ children, title, override }) => {
  return (
    <div
      className={
        "p-10 md:p-20 lg:p-50 rounded-xl bg-white shadow-md " + override
      }
    >
      {title && (
        <h1 className='pb-10 text-purple text-center text-2xl md:text-3xl font-bold uppercase'>
          {title}
        </h1>
      )}
      {children}
    </div>
  )
}

export default Card
