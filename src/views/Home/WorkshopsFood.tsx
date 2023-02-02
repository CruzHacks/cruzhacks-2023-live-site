import React, { useState } from "react"
import Card from "../../components/Card"
import { foodInfo } from "../../eventInfo/foodInfo"
import { workshopInfo } from "../../eventInfo/workshopInfo"

const WorkshopsFood: React.FC = () => {
  const [slider, setSlider] = useState(true)
  const [workshopDay, setWorkshopDay] = useState(0)
  const [foodDay, setFoodDay] = useState(0)

  const workshop = (
    <div className='flex flex-col gap-10'>
      <div className='flex justify-evenly'>
        {workshopInfo.map((item, i) => {
          return (
            <button
              key={i}
              className={
                "text-thin cursor-pointer rounded-full p-1 px-3 text-sm text-darkgray " +
                (workshopDay == i && "bg-gray")
              }
              onClick={() => setWorkshopDay(i)}
              onKeyDown={() => setWorkshopDay(i)}
            >
              {"Day " + (i + 1)}
            </button>
          )
        })}
      </div>

      <ul className='flex h-72 flex-col gap-5 overflow-y-scroll'>
        <li className='text-darkgray'>{workshopInfo[workshopDay].date}</li>
        <li className='border-b-2 border-darkgray'></li>

        {workshopInfo[workshopDay].events.map((workshop, i) => {
          return (
            <li className='flex items-center justify-between' key={i}>
              <div>
                <p>{workshop.title}</p>
                <p className='text-[#696969]'>{workshop.location}</p>
                <p className='text-[#A7A7A7]'>{workshop.hostedBy}</p>
              </div>
              <div className='w-5 md:w-2/6'></div>
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
      <div className='flex justify-evenly'>
        {foodInfo.map((item, i) => {
          return (
            <button
              key={i}
              className={
                "text-thin cursor-pointer rounded-full p-1 px-3 text-sm text-darkgray " +
                (foodDay == i && "bg-gray")
              }
              onClick={() => setFoodDay(i)}
              onKeyDown={() => setFoodDay(i)}
            >
              {"Day " + (i + 1)}
            </button>
          )
        })}
      </div>

      <ul className='flex h-60 flex-col gap-5 overflow-y-scroll'>
        <li className='text-darkgray'>{foodInfo[foodDay].date}</li>
        <li className='border-b-2 border-darkgray'></li>

        {foodInfo[foodDay].events.map((meal, i) => {
          return (
            <li className='flex items-center justify-between' key={i}>
              <div>
                <p>{meal.title}</p>
                {meal.items.map((item, key) => {
                  return (
                    <p key={key} className='text-[#696969]'>
                      {item}
                    </p>
                  )
                })}
                <p className='text-[#A7A7A7]'>{meal.provider}</p>
              </div>
              <div className='w-5 md:w-2/6'></div>
              <div className='text-thin shrink-0 text-right'>
                <p className='text-darkgray'>{meal.time}</p>
              </div>
            </li>
          )
        })}
      </ul>

      <div className='rounded-lg bg-gray p-5'>
        <p>Gluten Free</p>
        <p>Vegetarian</p>
        <p>Vegan</p>
        <p>All Weekend Long:</p>
      </div>
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
