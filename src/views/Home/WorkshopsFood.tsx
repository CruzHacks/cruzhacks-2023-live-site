import React, { useState } from "react"
import Card from "../../components/Card"

const workshopInfo = [
  {
    id: 0,
    date: "Friday, January 17th",
    events: [
      {
        title: "Intro to Git/Github",
        location: "Stevenson Room 240",
        level: "Beginner",
        startTime: "5:00 pm",
        endTime: "10:30 pm",
      },
      {
        title: "Intro to Rasberry Pi",
        location: "Stevenson Room 240",
        level: "Beginner",
        startTime: "10:30 pm",
        endTime: "11:00 pm",
      },
    ],
  },
  {
    id: 1,
    date: "Saturday, January 18th",
    events: [
      {
        title: "Workshop",
        location: "Stevenson Room 244",
        level: "Intermediate",
        startTime: "5:00 pm",
        endTime: "10:30 pm",
      },
      {
        title: "Workshop",
        location: "Stevenson Room 244",
        level: "Intermediate",
        startTime: "5:00 pm",
        endTime: "10:30 pm",
      },
    ],
  },
  {
    id: 2,
    date: "Sunday, January 19th",
    events: [
      {
        title: "Workshop",
        location: "Stevenson Room 244",
        level: "Intermediate",
        startTime: "5:00 pm",
        endTime: "10:30 pm",
      },
      {
        title: "Workshop",
        location: "Stevenson Room 244",
        level: "Intermediate",
        startTime: "5:00 pm",
        endTime: "10:30 pm",
      },
    ],
  },
]

const WorkshopsFood: React.FC = () => {
  const [slider, setSlider] = useState(true)
  const [day, setDay] = useState(0)

  const workshop = (
    <div className='flex flex-col gap-10'>
      <div className='flex justify-evenly'>
        {workshopInfo.map((item, i) => {
          return (
            <button
              key={i}
              className={
                "text-thin cursor-pointer rounded-full p-1 px-3 text-sm text-darkgray " +
                (day == item.id && "bg-gray")
              }
              onClick={() => setDay(i)}
              onKeyDown={() => setDay(i)}
            >
              {"Day " + (i + 1)}
            </button>
          )
        })}
      </div>

      <ul className='flex h-72 flex-col gap-5'>
        <li className='text-darkgray'>{workshopInfo[day].date}</li>
        <li className='border-b-2 border-darkgray'></li>

        {workshopInfo[day].events.map((workshop, i) => {
          return (
            <li className='flex items-center justify-between' key={i}>
              <div>
                <p>{workshop.title}</p>
                <p className='text-[#696969]'>{workshop.location}</p>
                <p className='text-[#A7A7A7]'>{workshop.level}</p>
              </div>
              <div className='w-5'></div>
              <div className='text-thin shrink-0 text-right'>
                <p className='text-darkgray'>{workshop.startTime}-</p>
                <p className='text-darkgray'>{workshop.endTime}</p>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )

  const food = (
    <div className='flex flex-col gap-10'>
      <h1>Food</h1>
    </div>
  )

  return (
    <Card>
      <div className='mb-10 flex flex-col items-center gap-10'>
        <div className='flex w-fit items-center justify-between rounded-xl bg-gray'>
          <button
            className={"cursor-pointer rounded-xl p-3 px-9 uppercase " + (slider && "bg-purple text-white")}
            onClick={() => setSlider(true)}
            onKeyDown={() => setSlider(true)}
          >
            Workshops
          </button>
          <button
            className={"cursor-pointer rounded-xl p-3 px-9 uppercase " + (!slider && "bg-purple text-white")}
            onClick={() => setSlider(false)}
            onKeyDown={() => setSlider(false)}
          >
            Food
          </button>
        </div>
      </div>

      {slider ? workshop : food}
    </Card>
  )
}

export default WorkshopsFood
