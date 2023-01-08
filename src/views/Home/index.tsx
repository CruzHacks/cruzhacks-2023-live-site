import React from "react"
import Notifications from "./Notifications"
import QuestionResources from "./QuestionResources"
import Schedule from "./Schedule"
import WorkshopsFood from "./WorkshopsFood"

const Home: React.FC = () => {
  return (
    <>
      {/* Header Image fixed here */}
      <div className='my-20 flex flex-col justify-center items-center gap-10'>
        <h1 className='flex gap-3'>
          <span className='flex'>
            CRUZHACKS<span className='text-xs'>LIVE</span>
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
