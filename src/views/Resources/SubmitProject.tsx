import React from "react"
import Button from "../../components/Button"
import Card from "../../components/Card"

const SubmitProject: React.FC = () => {
  return (
    <Card introTitle='Finished Your Project?' title='Submit Project'>
      <div className='m-auto flex flex-col items-center gap-5 md:w-5/6'>
        <p className='pb-10 font-nunito'>
          Log in to CruzHacks portal and head over to Team&gt;Submit Project. Follow instructions accordingly
          to submit your project or click the button below to be taken directly!
        </p>
        <Button text='Submit Project' link='' type='full' override='w-full md:w-2/3' />
      </div>
    </Card>
  )
}

export default SubmitProject
