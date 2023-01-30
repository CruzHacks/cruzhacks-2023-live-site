import { onValue, ref } from "firebase/database"
import React, { useEffect, useState } from "react"
import Card from "../../components/Card"
import { rtdb } from "../../utils/firebase"

type Announcement = {
  body: string
  date: number
  title: string
}
// const updates = [
//   {
//     time: "12:00 PM",
//     date: "Sat, 1/18/20",
//     message: "Panda Express catering served now",
//   },
//   {
//     time: "9:00 AM",
//     date: "Sat, 1/18/20",
//     message: "Intro to Amazon Web Services workshop will be at Workshop A at 10:00AM",
//   },
//   {
//     time: "9:00 AM",
//     date: "Sat, 1/18/20",
//     message: "Intro to Amazon Web Services workshop will be at Workshop A at 10:00AM",
//   },
//   {
//     time: "9:00 AM",
//     date: "Sat, 1/18/20",
//     message: "Intro to Amazon Web Services workshop will be at Workshop A at 10:00AM",
//   },
// ]

const Notifications: React.FC = () => {
  const [live, setLive] = useState(false)
  const [updates, setUpdates] = useState<any>([]) // <++> TODO: update type any

  const convertDate = (date: number) => {
    const d = new Date(date)
    return d.toLocaleDateString("default", {
      weekday: "short",
      month: "numeric",
      day: "numeric",
      year: "2-digit",
    })
  }

  const convertTime = (date: number) => {
    const d = new Date(date)
    return d.toLocaleTimeString("default", { hour: "numeric", minute: "2-digit" })
  }

  // Update announcements
  useEffect(() => {
    const announcements = ref(rtdb, "Announcements")
    return onValue(announcements, snapshot => {
      const data = snapshot.val()
      console.log(data)

      if (snapshot.exists()) {
        setUpdates(Object.values(data).reverse())
      }
    })
  }, [])

  // Update live indicator
  useEffect(() => {
    const connectedRef = ref(rtdb, ".info/connected")
    return onValue(connectedRef, snap => {
      if (snap.val() === true) {
        console.log("connected")
        setLive(true)
      } else {
        setLive(false)
        console.log("not connected")
      }
    })
  }, [])

  console.log(updates)

  return (
    <Card override='self-center w-full p-10 md:p-8 lg:p-8 md:w-5/6'>
      <h1 className='flex items-center gap-3 pt-10 pb-3 text-xl font-bold text-purple md:gap-5 md:pt-0 md:text-2xl'>
        <div
          className={
            "h-4 w-4 rounded-full shadow-md md:h-7 md:w-7 " + (live ? "bg-[#82D06F] " : "bg-[#ff5050]")
          }
        ></div>
        Live Now
      </h1>

      <ul className='flex h-80 flex-col gap-5 overflow-y-scroll rounded py-5 md:bg-[#D9D9D91A] md:p-10'>
        {updates.map((update: any, key: number) => {
          return (
            <li className='border-b border-[#D7D7D7]' key={key}>
              <p className='text-[#61A564]'>{convertTime(update.date)}</p>
              <p className='py-2 md:p-5 md:px-10'>{update.body}</p>
              <p className='float-right text-[#A1A1A1]'>{convertDate(update.date)}</p>
            </li>
          )
        })}
      </ul>
    </Card>
  )
}

export default Notifications
