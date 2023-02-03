import React from "react"
import Card from "../../components/Card"

import StevensonMapImg from "../../assets/map_stevenson-floorplan.png"

const StevensonFloorPlan: React.FC = () => {
  return (
    <Card override='p-5 md:p-5 md:w-[30rem] md:m-auto'>
      <img
        className=''
        src={StevensonMapImg}
        alt='UCSC Stevenson College Map'
      />
    </Card>
  )
}

export default StevensonFloorPlan
