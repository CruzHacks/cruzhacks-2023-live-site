import { onValue, ref } from "firebase/database"
import React, { useEffect, useState } from "react"
import Card from "../../components/Card"
import { rtdb } from "../../utils/firebase"

export type Announcement = {
  body: string
  date: number
  title: string
}

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

interface NotificationsProps {
  announcements: Announcement[]
}

const Notifications: React.FC<NotificationsProps> = ({ announcements }) => {
  const [live, setLive] = useState(false)

  // Update live indicator
  useEffect(() => {
    const connectedRef = ref(rtdb, ".info/connected")
    return onValue(connectedRef, snap => {
      if (snap.val() === true) {
        setLive(true)
      } else {
        setLive(false)
      }
    })
  }, [])

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

      {announcements && announcements.length > 0 ? (
        <ul className='flex h-80 flex-col gap-5 overflow-y-scroll rounded py-5 md:bg-[#D9D9D91A] md:p-10'>
          {announcements.map((update: any, key: number) => {
            return (
              <li className='border-b border-[#D7D7D7]' key={key}>
                <p className='text-[#61A564]'>{convertTime(update.date)}</p>
                <p className='py-2 md:p-5 md:px-10'>{update.body}</p>
                <p className='float-right text-[#A1A1A1]'>{convertDate(update.date)}</p>
              </li>
            )
          })}
        </ul>
      ) : (
        <div className='flex h-80 flex-col items-center justify-center rounded py-5 md:bg-[#D9D9D91A] md:p-10'>
          <p className='text-center'>No Announcements yet, stay tuned!</p>
        </div>
      )}
    </Card>
  )
}

export default Notifications
