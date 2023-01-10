import React from "react"

interface ButtonProps {
  text: string
  override?: string
  link: string
  type: "clear" | "full"
}

const Button: React.FC<ButtonProps> = ({ text, override, link, type }) => {
  const typeStyling = type === "clear" ? "text-purple" : "bg-purple text-white"

  return (
    <a
      target='_blank'
      rel='noopener noreferrer'
      href={link}
      className={"p-3 text-center border-2 rounded-md border-purple " + typeStyling + " " + override}
    >
      {text}
    </a>
  )
}

export default Button
