import React from "react"
import FAQCard from "./FAQCard"
import Rules from "./Rules"

const FAQ = () => {
  return (
    <div className='my-20 flex flex-col justify-center items-center gap-10'>
      <h1>FAQ & Rules</h1>

      <FAQCard />
      <Rules />
    </div>
  )
}

export default FAQ
