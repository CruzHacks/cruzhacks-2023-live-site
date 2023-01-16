import React from "react"
import BackgroundHeader from "../../components/BackgroundHeader"
import Notifications from "./Notifications"
import QuestionResources from "./QuestionResources"
import Schedule from "./Schedule"
import WorkshopsFood from "./WorkshopsFood"

const Home: React.FC = () => {
  return (
    <>
      <BackgroundHeader />

      <div className='my-20 flex flex-col items-stretch justify-center gap-10'>
        <h1 className='hidden gap-3 self-center py-10 text-4xl text-white md:flex lg:gap-5 lg:text-6xl'>
          <span className='flex gap-1'>
            CRUZHACKS
            <span className='mt-1 text-xs font-thin lg:mt-0 lg:text-lg'>LIVE</span>
          </span>{" "}
          2023
        </h1>

        <Notifications />
        <Schedule />
        <WorkshopsFood />
        <QuestionResources />
      </div>
    </>
  )
}

export default Home
