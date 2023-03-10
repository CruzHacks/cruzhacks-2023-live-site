import React from "react"
import BackgroundHeader from "../../components/BackgroundHeader"
import EventInfo from "./EventInfo"
import Hackerpack from "./Hackerpack"
import SubmitProject from "./SubmitProject"
import TeamFinder from "./TeamFinder"

const Resources = () => {
  return (
    <>
      <BackgroundHeader />

      <div className='my-20 flex flex-col items-stretch justify-center gap-10'>
        <h1 className='text-4xl text-white md:py-10 lg:text-6xl'>
          Everything you will need is right here
        </h1>

        <Hackerpack />
        <TeamFinder />
        <SubmitProject />
        <EventInfo />
      </div>
    </>
  )
}

export default Resources
