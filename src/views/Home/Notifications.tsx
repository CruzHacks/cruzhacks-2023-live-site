import React, { useState } from "react"
import Card from "../../components/Card"

const updates = [
  {
    time: "12:00 PM",
    date: "Sat, 1/18/20",
    message: "Panda Express catering served now",
  },
  {
    time: "9:00 AM",
    date: "Sat, 1/18/20",
    message: "Intro to Amazon Web Services workshop will be at Workshop A at 10:00AM",
  },
  {
    time: "9:00 AM",
    date: "Sat, 1/18/20",
    message: "Intro to Amazon Web Services workshop will be at Workshop A at 10:00AM",
  },
  {
    time: "9:00 AM",
    date: "Sat, 1/18/20",
    message: "Intro to Amazon Web Services workshop will be at Workshop A at 10:00AM",
  },
]

const Notifications: React.FC = () => {
  const [live, setLive] = useState(true)

  return (
    <Card override='self-center p-10 md:p-8 lg:p-8 md:w-5/6'>
      <h1 className='text-purple flex items-center gap-3 pt-10 pb-3 text-xl font-bold md:gap-5 md:pt-0 md:text-2xl'>
        <div
          className={
            "h-4 w-4 rounded-full shadow-md md:h-7 md:w-7 " + (live ? "bg-[#82D06F] " : "bg-[#ff5050]")
          }
        ></div>
        Live Now
      </h1>

      <ul className='flex h-80 flex-col gap-5 overflow-y-scroll rounded py-5 md:bg-[#D9D9D91A] md:p-10'>
        {updates.map((update, key) => {
          return (
            <li className='border-b border-[#D7D7D7]' key={key}>
              <p className='text-[#61A564]'>{update.time}</p>
              <p className='py-2 md:p-5 md:px-10'>{update.message}</p>
              <p className='float-right text-[#A1A1A1]'>{update.date}</p>
            </li>
          )
        })}
      </ul>
    </Card>
  )
}

export default Notifications
