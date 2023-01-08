import React from "react"
import Button from "../../components/Button"
import Card from "../../components/Card"

const Hackerpack: React.FC = () => {
  return (
    <Card title='Hackerpack & Starter Pack'>
      <div className='flex flex-col items-center gap-3'>
        <p className='md:w-5/6 mb-10 text-left'>
          You can find everything you need to know in our Hacker Packet PDF. It
          covers what you need to bring, travel info, workshop info, and more.
          Our starter pack will have code that can help you jumpstart your
          projects!
        </p>
        <Button
          text='View Hacker Packet'
          link=''
          type='full'
          override='w-full md:w-1/2'
        />
        <Button
          text='View Hacker Packet'
          link=''
          type='clear'
          override='w-full md:w-1/2'
        />
      </div>
    </Card>
  )
}

export default Hackerpack
