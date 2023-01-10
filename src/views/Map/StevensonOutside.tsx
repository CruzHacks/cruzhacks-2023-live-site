import React from "react"
import Card from "../../components/Card"

import StevensonMapImg from "../../assets/map_stevenson-outside.png"

interface MapKeyItemInterface {
  color: string
  label: string
}

const MapKeyItem: React.FC<MapKeyItemInterface> = ({ color, label }) => {
  return (
    <div className='flex items-start gap-5'>
      <div className={`mt-1 h-2 md:h-6 w-6 shrink-0 rounded-md ${color}`}></div>
      <p>{label}</p>
    </div>
  )
}

const StevensonOutside: React.FC = () => {
  return (
    <Card override='p-5 md:p-5 lg:w-[70rem] lg:ml-[-12rem]'>
      <div className='flex flex-col gap-4 md:gap-10 md:flex-row'>
        <img className='md:w-2/3' src={StevensonMapImg} alt='UCSC Stevenson College Map' />
        <div className='h-100 grow-1 flex flex-col justify-evenly gap-2 md:gap-5'>
          <MapKeyItem color='bg-[#FF1f22]' label='Stevenson Event Center' />
          <MapKeyItem color='bg-[#FF33EB]' label='Senior Commons Room' />
          <MapKeyItem color='bg-[#FFB800]' label='Wagstaff Fireside Lounge' />
          <MapKeyItem color='bg-[#14FFB9]' label='Classroom 175' />
          <MapKeyItem color='bg-[#4314FF]' label='Classrooms 150, 151, & 152' />
          <MapKeyItem color='bg-[#FBFF33]' label='Silverman Conference Room' />
        </div>
      </div>
    </Card>
  )
}

export default StevensonOutside
