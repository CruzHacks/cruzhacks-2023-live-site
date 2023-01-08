import React from "react"
import Hackerpack from "./Hackerpack"
import SubmitProject from "./SubmitProject"
import TeamFinder from "./TeamFinder"

const Resources = () => {
  return (
    <div className='my-20 flex flex-col justify-center items-center gap-10'>
      <h1>Everything you will need is right here</h1>

      <Hackerpack />
      <TeamFinder />
      <SubmitProject />
      <TeamFinder />
    </div>
  )
}

export default Resources
