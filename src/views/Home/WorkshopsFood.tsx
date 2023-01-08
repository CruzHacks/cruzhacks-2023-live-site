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
      <ul className='flex justify-evenly'>
        {workshopInfo.map((item, i) => {
          return (
            <li
              key={i}
              className={
                "cursor-pointer p-1 px-3 rounded-full text-sm text-thin text-darkgray " +
                (day == item.id && "bg-gray")
              }
              onClick={() => setDay(i)}
            >
              {"Day " + (i + 1)}
            </li>
          )
        })}
      </ul>

      <ul className='flex flex-col gap-5 h-72'>
        <li className='text-darkgray'>{workshopInfo[day].date}</li>
        <li className='border-darkgray border-b-2'></li>

        {workshopInfo[day].events.map((workshop, i) => {
          return (
            <li className='flex justify-between items-center' key={i}>
              <div>
                <p>{workshop.title}</p>
                <p className='text-[#696969]'>{workshop.location}</p>
                <p className='text-[#A7A7A7]'>{workshop.level}</p>
              </div>
              <div className='w-5'></div>
              <div className='shrink-0 text-thin text-right'>
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
      <div className='flex flex-col gap-10 items-center mb-10'>
        <ul className='flex items-center justify-between bg-gray rounded-xl w-fit'>
          <li
            className={
              "cursor-pointer p-3 px-9 rounded-xl uppercase " +
              (slider && "bg-purple text-white")
            }
            onClick={() => setSlider(true)}
          >
            Workshops
          </li>
          <li
            className={
              "cursor-pointer p-3 px-9 rounded-xl uppercase " +
              (!slider && "bg-purple text-white")
            }
            onClick={() => setSlider(false)}
          >
            Food
          </li>
        </ul>
      </div>

      {slider ? workshop : food}
    </Card>
  )
}

export default WorkshopsFood
