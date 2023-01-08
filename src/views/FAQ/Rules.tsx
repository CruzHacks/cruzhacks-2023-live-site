import React from "react"
import Button from "../../components/Button"
import Card from "../../components/Card"

const Rules: React.FC = () => {
  return (
    <Card>
      <h1 className='text-purple text-center text-3xl font-bold uppercase'>
        Rules & Policies
      </h1>

      <div className='px-10'>
        <p className='my-10 leading-8'>
          Cruzhacks values the importance of a safe and all-inclusive space. We
          welcome students from all backgrounds. Review our rules and policies
          below.
        </p>

        <div className='flex flex-col items-stretch gap-5'>
          <Button text='CruzHacks 2023 Rules' link='' type='clear' />
          <Button text='Code of Conduct 2023 Rules' link='' type='clear' />
          <Button text='COVID Safety Policy' link='' type='clear' />
          <Button text='Participant & Release Agreement' link='' type='clear' />
        </div>
      </div>
    </Card>
  )
}

export default Rules
