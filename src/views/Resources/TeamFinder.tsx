import React from "react"
import Card from "../../components/Card"

const TeamFinder: React.FC = () => {
  return (
    <Card
      introTitle="Don't Have a Team Yet?"
      title='Find a Team to Join & Submit'
    >
      <ol className='flex flex-col gap-5'>
        <li>
          1. Join our Slack channel{" "}
          <a className='text-blue underline' href='/'>
            #team-formation
          </a>{" "}
          to find your team of hackers!
        </li>
        <li className='px-5 flex flex-col gap-2'>
          <p>Team Formation Guidelines:</p>
          <p className='font-thin'>- Must be compromised of 1-4 people</p>
          <p className='font-thin'>
            - The project must be completed at the event
          </p>
          <p className='font-thin'>
            - All members must be an accepted applicant to CruzHacks 2023
          </p>
        </li>
        <li>
          2. Found your team? Log in and{" "}
          <a className='text-blue' href='/'>
            submit your team in the CruzHacks portal
          </a>{" "}
          and get ready to start hacking!
        </li>
      </ol>
    </Card>
  )
}

export default TeamFinder
