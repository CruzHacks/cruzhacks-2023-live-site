import React from "react"
import BackgroundHeader from "../../components/BackgroundHeader"
import Card from "../../components/Card"
import FAQCard from "./FAQCard"
import Rules from "./Rules"

const FAQ = () => {
  return (
    <>
      <BackgroundHeader />

      <div className='my-20 flex flex-col justify-center items-center gap-10'>
        <h1 className='text-white text-4xl lg:text-6xl'>FAQ & Rules</h1>

        <Card children={<FAQCard />} />
        <Card children={<Rules />} />
      </div>
    </>
  )
}

export default FAQ
