import React, { useState } from "react"
import BackgroundHeader from "../../components/BackgroundHeader"
import StevensonOutside from "./StevensonOutside"
import StevensonFloorPlan from "./StevensonJudgingMap"

import DropdownLogo from "../../assets/logo_dropdown-triangle-gray.svg"
import StevensonEastRemoteLot from "./StevensonEastRemoteLot"
import StevensonJudgingMap from "./StevensonJudgingMap"

const Maps = [
  {
    id: 0,
    title: "Judging Map",
    map: <StevensonJudgingMap />,
  },
  {
    id: 1,
    title: "General Area - Stevenson College",
    map: <StevensonOutside />,
  },
  {
    id: 2,
    title: "Stevenson Event Center Floorplan",
    map: <StevensonFloorPlan />,
  },
  {
    id: 3,
    title: "East Remote Lot to Stevenson Event Center",
    map: <StevensonEastRemoteLot />,
  },
]

const Map: React.FC = () => {
  const [selectedMapIdx, setSelectedMapIdx] = useState(0)
  const [revealSelections, setRevealSelections] = useState(false)

  const select = (i: number) => {
    setSelectedMapIdx(i)
    setRevealSelections(false)
  }

  return (
    <>
      <BackgroundHeader />

      <div className='my-20 flex flex-col items-stretch justify-center gap-10'>
        <h1 className='text-center text-4xl text-white md:py-10 lg:text-6xl'>
          Event Maps
        </h1>

        <button
          onClick={() => setRevealSelections(!revealSelections)}
          onKeyDown={() => setRevealSelections(!revealSelections)}
          className='flex flex-col items-stretch justify-center gap-1 rounded-xl bg-gray p-5 shadow-md'
        >
          <div className='flex justify-between rounded-lg p-3 text-left'>
            <p>{Maps[selectedMapIdx].title}</p>
            <img src={DropdownLogo} alt='Dropdown Triangle' />
          </div>
          {revealSelections &&
            Maps.map((mapData, i) => {
              if (selectedMapIdx == i) return <></>
              return (
                <div
                  key={i}
                  role='button'
                  tabIndex={i}
                  onClick={() => select(mapData.id)}
                  onKeyDown={() => select(mapData.id)}
                  className='rounded-lg p-3 text-left hover:bg-[#E6E6E6]'
                >
                  {mapData.title}
                </div>
              )
            })}
        </button>
        {Maps[selectedMapIdx].map}
      </div>
    </>
  )
}

export default Map
