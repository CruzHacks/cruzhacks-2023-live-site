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
    message:
      "Intro to Amazon Web Services workshop will be at Workshop A at 10:00AM",
  },
  {
    time: "9:00 AM",
    date: "Sat, 1/18/20",
    message:
      "Intro to Amazon Web Services workshop will be at Workshop A at 10:00AM",
  },
  {
    time: "9:00 AM",
    date: "Sat, 1/18/20",
    message:
      "Intro to Amazon Web Services workshop will be at Workshop A at 10:00AM",
  },
]

const Notifications: React.FC = () => {
  const [live, setLive] = useState(true)

  return (
    <Card override='self-center p-10 md:p-8 lg:p-8 md:w-5/6'>
      <h1 className='flex pt-10 md:pt-0 pb-3 gap-3 md:gap-5 text-purple text-xl md:text-2xl font-bold items-center'>
        <div
          className={
            "w-4 md:w-7 h-4 md:h-7 rounded-full shadow-md " +
            (live ? "bg-[#82D06F] " : "bg-[#ff5050]")
          }
        ></div>
        Live Now
      </h1>

      <ul className='flex flex-col gap-5 h-80 md:p-10 py-5 md:bg-[#D9D9D91A] rounded overflow-y-scroll'>
        {updates.map(update => {
          return (
            <li className='border-b border-[#D7D7D7]'>
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
