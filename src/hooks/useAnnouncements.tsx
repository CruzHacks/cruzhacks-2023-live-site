import React, { useEffect, useState } from "react"
import { useSnackbar } from "notistack"
import { onValue, ref } from "firebase/database"
import { rtdb } from "../utils/firebase"
import { Announcement } from "../views/Home/Notifications"

const buildAnnouncement = (body: string) => (
  <div className='flex basis-full flex-col items-center justify-center'>
    <div className='flex basis-full items-center justify-center font-bold'>Live Update</div>
    <span className='border-purple mt-1 mb-3 block h-1 min-w-full border-t'></span>
    <div className='flex basis-full items-center justify-center'>{body}</div>
  </div>
)

const useAnnoucements = () => {
  const { enqueueSnackbar } = useSnackbar()
  const [announcements, setAnnouncements] = useState<Announcement[]>([])

  useEffect(() => {
    const announcements = ref(rtdb, "Announcements")
    return onValue(announcements, snapshot => {
      const data = snapshot.val()

      if (snapshot.exists()) {
        const _announcements: any = Object.values(data).reverse()
        setAnnouncements(_announcements)

        enqueueSnackbar(buildAnnouncement(_announcements[0].body), {
          preventDuplicate: true,
        })
      }
    })
  }, [])

  return announcements
}

export default useAnnoucements
