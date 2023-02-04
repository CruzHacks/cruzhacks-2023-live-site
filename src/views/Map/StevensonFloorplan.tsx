import React from "react"
import Card from "../../components/Card"

import StevensonMapImg from "../../assets/map_stevenson-floorplan.png"

const StevensonFloorPlan: React.FC = () => {
  return (
    <Card override='p-5 md:p-5 md:w-[30rem] md:m-auto lg:w-[50rem] lg:ml-[-4rem]'>
      <img src={StevensonMapImg} alt='UCSC Stevenson College Map' />
    </Card>
  )
}

export default StevensonFloorPlan
