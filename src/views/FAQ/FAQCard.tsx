import React from "react"
import Card from "../../components/Card"

const FAQCard: React.FC = () => {
  return (
    <Card title='FAQ'>
      <ul className='flex flex-col gap-10'>
        <li>Are we allowed to build on past projects?</li>
        <li>How many people can be on my team?</li>
        <li>What are the rules?</li>
        <li>What if I don&apos;t know how to code?</li>
        <li>How can I get a mentor?</li>
        <li>I don&apos;t see my question here.</li>
      </ul>
    </Card>
  )
}

export default FAQCard
