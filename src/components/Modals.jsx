import React from 'react'
import { airportNames } from './data'

function Modals() {
  
  return (
    <div className="bg-white rounded-sm w-9/12 h-80-vh text-black p-4 mt-11  ">
      <nav>
        <ul className="text-md grid grid-cols-2 gap-4  ">
            <div>
                <div className="mb-4" ><a href="">{airportNames[0].name}</a></div>
                <div><a href="">{airportNames[1].name}</a></div>
                <div><a href="">{airportNames[2].name}</a></div>

                <div><a href="">{airportNames[3].name}</a></div>
                <div><a href="">{airportNames[4].name}</a></div>
                <div><a href="">{airportNames[5].name}</a></div>
                <div><a href="">{airportNames[6].name}</a></div>
            </div>
         
            <div>
                <div><a href="">{airportNames[7].name}</a></div>
                <div><a href="">{airportNames[8].name}</a></div>

                <div><a href="">{airportNames[9].name}</a></div>
                <div><a href="">{airportNames[10].name}</a></div>
                <div><a href="">{airportNames[11].name}</a></div>
                <div><a href="">{airportNames[12].name}</a></div>
            </div>
        </ul>
      </nav>
    </div>
  )
}

export default Modals
