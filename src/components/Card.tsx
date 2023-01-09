import React from "react"

interface CardProps {
  children: React.ReactNode
  introTitle?: string
  title?: string
  override?: string
}

const Card: React.FC<CardProps> = ({
  children,
  introTitle,
  title,
  override,
}) => {
  return (
    <div
      className={
        "p-10 md:p-20 lg:p-50 rounded-xl bg-white shadow-md " +
        (introTitle && "md:p-10") +
        " " +
        override
      }
    >
      {introTitle && (
        <h2 className='text-darkgray pb-5 md:pb-10 text-sm md:text-lg font-bold uppercase'>
          {introTitle}
        </h2>
      )}
      {title && (
        <h1
          className={
            "text-purple pb-5 md:pb-10 text-2xl font-bold uppercase md:text-3xl " +
            (introTitle ? "text-left md:text-center" : "text-center")
          }
        >
          {title}
        </h1>
      )}
      {children}
    </div>
  )
}

export default Card
