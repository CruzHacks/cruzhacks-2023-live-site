import React from "react"
import Card from "../../components/Card"

const FAQCard: React.FC = () => {
  return (
    <Card>
      <h1 className='text-purple text-center text-3xl font-bold uppercase'>
        FAQ
      </h1>

      <ul className='py-10 flex flex-col gap-10'>
        <li>Are we allowed to build on past projects?</li>
        <li>How many people can be on my team?</li>
        <li>What are the rules?</li>
        <li>What if I don't know how to code?</li>
        <li>How can I get a mentor?</li>
        <li>I don't see my question here.</li>
      </ul>
    </Card>
  )
}

export default FAQCard
