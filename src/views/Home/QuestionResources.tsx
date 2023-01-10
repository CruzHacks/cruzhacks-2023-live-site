import React from "react"
import Card from "../../components/Card"

import People from "../../assets/people.png"
import Button from "../../components/Button"

const QuestionResources: React.FC = () => {
  return (
    <Card title='Have a Question?'>
      <div className='flex flex-col items-center gap-10'>
        <img className='w-2/3' alt='People Graphic' src={People} />
        <p className='w-4/5 text-center'>
          Our organizing team is available throughout the whole event. If
          there’s anything you need please contact us through slack or find an
          organizer in person.
        </p>
        <Button text='Join Our Slack' link='/' type='full' override='w-full' />
        <a className='text-purple underline' href='/'>
          Go to Hack Pack
        </a>
      </div>
    </Card>
  )
}

export default QuestionResources
