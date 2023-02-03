import React, { useState } from "react"
import Card from "../../components/Card"
import { scheduleInfo } from "../../eventInfo/scheduleInfo"

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
                  "text-thin cursor-pointer rounded-full p-1 px-3 text-sm text-darkgray " +
                  (day == key && "bg-gray")
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
          <ul className='flex flex-col gap-5 overflow-y-scroll'>
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
        </ul>
      </div>
    </Card>
  )
}

export default Schedule
