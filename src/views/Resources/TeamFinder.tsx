import React from "react"
import Card from "../../components/Card"

const TeamFinder: React.FC = () => {
  return (
    <Card
      introTitle="Don't Have a Team Yet?"
      title='Find a Team to Join & Submit'
    >
      <ol className='flex flex-col gap-5'>
        <li>1. Join our Slack channel</li>
        <li>2. Found your team?</li>
      </ol>
    </Card>
  )
}

export default TeamFinder
