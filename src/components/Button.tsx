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
    <button
      className={
        "p-3 border-2 rounded-md border-purple " + typeStyling + " " + override
      }
    >
      <a href={link}>{text}</a>
    </button>
  )
}

export default Button
