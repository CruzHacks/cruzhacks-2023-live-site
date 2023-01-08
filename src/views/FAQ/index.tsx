import React from "react"
import BackgroundHeader from "../../components/BackgroundHeader"
import FAQCard from "./FAQCard"
import Rules from "./Rules"

const FAQ = () => {
  return (
    <>
      <BackgroundHeader />

      <div className='my-20 flex flex-col items-stretch justify-center gap-10'>
        <h1 className='md:py-10 text-4xl text-white lg:text-6xl'>
          FAQ & Rules
        </h1>

        <FAQCard />
        <Rules />
      </div>
    </>
  )
}

export default FAQ
