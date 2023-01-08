import React, { useState } from "react"
import Card from "../../components/Card"

const scheduleInfo = [
  {
    id: 0,
    date: "Friday, January 17th",
    events: [
      ["Hacker Registration", "5:00 pm"],
      ["Dinner", "7:00 pm"],
      ["Opening Ceremony", "8:00 pm"],
      ["Hacking Begins", "9:00 pm"],
    ],
  },
  {
    id: 1,
    date: "Saturday, January 18th",
    events: [
      ["Some event", "10:00 am"],
      ["Another event", "12:00 pm"],
    ],
  },
  {
    id: 2,
    date: "Sunday, January 19th",
    events: [
      ["Some event", "12:00 am"],
      ["Some event", "12:00 am"],
      ["Some event", "12:00 am"],
      ["Some event", "12:00 am"],
      ["Final event", "8:00 pm"],
    ],
  },
]

const Schedule: React.FC = () => {
  const [day, setDay] = useState(0)

  return (
    <Card title={"Schedule"}>
      <div className='flex flex-col gap-10'>
        <div className='flex justify-evenly'>
          {scheduleInfo.map((schedule, key) => {
            return (
              <button
                key={key}
                className={
                  "cursor-pointer p-1 px-3 rounded-full text-sm text-thin text-darkgray " +
                  (day == schedule.id && "bg-gray")
                }
                onClick={() => setDay(key)}
                onKeyDown={() => setDay(key)}
              >
                {"Day " + (key + 1)}
              </button>
            )
          })}
        </div>

        <ul className='flex h-72 flex-col gap-5'>
          <li className='text-darkgray'>{scheduleInfo[day].date}</li>
          <li className='border-darkgray border-b-2'></li>

          {scheduleInfo[day].events.map((schedule, key) => {
            return (
              <li className='flex items-center justify-between' key={key}>
                <p>{schedule[0]}</p>
                <div className='w-5'></div>
                <p className='text-darkgray shrink-0'>{schedule[1]}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </Card>
  )
}

export default Schedule
