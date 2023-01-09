import React, { useState } from "react"
import BackgroundHeader from "../../components/BackgroundHeader"
import Card from "../../components/Card"

import StevensonMapImg from "../../assets/map_outside-stevenson.png"

interface MapKeyItemInterface {
  color: string
  label: string
}

const MapKeyItem: React.FC<MapKeyItemInterface> = ({ color, label }) => {
  return (
    <div className='flex items-start gap-5'>
      <div className={`mt-1 h-6 w-6 shrink-0 rounded-md ${color}`}></div>
      <p>{label}</p>
    </div>
  )
}

const StevensonMap = (
  <Card override='p-5 md:p-5 lg:w-[70rem] lg:-ml-[12rem]'>
    <div className='flex flex-col gap-10 md:flex-row'>
      <img
        className='md:w-2/3'
        src={StevensonMapImg}
        alt='UCSC Stevenson College Map'
      />
      <div className='h-100 grow-1 flex flex-col justify-evenly gap-5'>
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

const Maps = [
  {
    id: 0,
    title: "General Area - Stevenson College",
    map: StevensonMap,
  },
]

const Map: React.FC = () => {
  const [selectedMapIdx, setSelectedMapIdx] = useState(0)

  return (
    <>
      <BackgroundHeader />

      <div className='my-20 flex flex-col items-stretch justify-center gap-10'>
        <h1 className='text-center text-4xl text-white md:py-10 lg:text-6xl'>
          Event Maps
        </h1>

        <div className='bg-gray rounded-xl p-5 shadow-md'>
          {Maps.map((mapData, i) => {
            return (
              <button
                key={i}
                onClick={() => setSelectedMapIdx(i)}
                onKeyDown={() => setSelectedMapIdx(i)}
              >
                {mapData.title}
              </button>
            )
          })}
        </div>
        {Maps[selectedMapIdx].map}
      </div>
    </>
  )
}

export default Map
