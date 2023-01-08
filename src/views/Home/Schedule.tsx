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
        <ul className='flex justify-evenly'>
          {scheduleInfo.map((item, i) => {
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
          <li className='text-darkgray'>{scheduleInfo[day].date}</li>
          <li className='border-darkgray border-b-2'></li>

          {scheduleInfo[day].events.map((item, i) => {
            return (
              <li className='flex justify-between items-center' key={i}>
                <p>{item[0]}</p>
                <div className='w-5'></div>
                <p className='shrink-0 text-darkgray'>{item[1]}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </Card>
  )
}

export default Schedule
