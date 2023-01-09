import React from "react"
import Card from "../../components/Card"

const EventInfo: React.FC = () => {
  return (
    <Card introTitle='Need Something?' title='Event Info'>
      <div className='flex flex-col gap-5 md:gap-10 md:px-20'>
        <div className='flex flex-col gap-2'>
          <p>WiFi</p>
          <p className='font-thin'>Use: UCSC_Guest</p>
          <p className='font-thin'>Pass: XSDSDVFB</p>
        </div>

        <div className='flex flex-col gap-2'>
          <p>Color Legend</p>
          <p className='font-thin'>Organizers: Green Shirt/Green Jackets</p>
          <p className='font-thin'>Mentors/Volunteers: Blue Shirt</p>
          <p className='font-thin'>Judges: Pink Shirt</p>
        </div>

        <div className='flex flex-col gap-2'>
          <p>Slack</p>
          <p className='font-thin'>
            Slack will be used for communication during the event.
          </p>
          <p className='font-thin'>Mentors/Volunteers: Blue Shirt</p>
          <p className='font-thin'>
            Join our Slack <a className='text-blue underline italic'>here</a>.
          </p>
        </div>

        <div>
          <p>Emergency Contacts</p>
          <div className='mt-5 md:px-5 flex flex-col gap-5'>
            <div className='flex flex-col gap-2'>
              <p>UC Police Dispatch</p>
              <p className='font-thin'>831-459-2231 ext 1</p>
            </div>
            <div className='flex flex-col gap-2'>
              <p>Santa Cruz Fire Department</p>
              <p className='font-thin'>831-420-5678</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default EventInfo
