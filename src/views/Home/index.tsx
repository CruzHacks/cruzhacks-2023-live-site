import React from "react"
import BackgroundHeader from "../../components/BackgroundHeader"
import Card from "../../components/Card"
import Notifications from "./Notifications"
import QuestionResources from "./QuestionResources"
import Schedule from "./Schedule"
import WorkshopsFood from "./WorkshopsFood"

const Home: React.FC = () => {
  return (
    <>
      <BackgroundHeader />

      <div className='my-20 flex flex-col justify-center items-stretch gap-10'>
        <h1 className='hidden md:flex self-center gap-3 text-white text-4xl lg:text-6xl'>
          <span className='flex gap-1'>
            CRUZHACKS<span className='text-xs mt-1 font-thin'>LIVE</span>
          </span>{" "}
          2023
        </h1>

        <Card children={<Notifications />} />
        <Card children={<Schedule />} />
        <Card children={<WorkshopsFood />} />
        <Card children={<QuestionResources />} />
      </div>
    </>
  )
}

export default Home
