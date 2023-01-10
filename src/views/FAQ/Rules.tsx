import React from "react"
import Button from "../../components/Button"
import Card from "../../components/Card"

const Rules: React.FC = () => {
  return (
    <Card title='Rules & Policies'>
      <div className='md:px-10'>
        <p className='mb-10 leading-8'>
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
