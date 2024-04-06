import React from 'react'

function Modals(props) {
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 m-auto">
      <nav className={` w-[${props.width}%] h-[${props.height}vh] text-black pl-4 pt-3 pr-4 mt-9`}>
         <div className="grid grid-cols-2 gap-6">
            {/* The modal data goes here */}
         </div>
      </nav>
    </div>
  )
}

export default Modals
