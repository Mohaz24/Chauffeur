import React from 'react'

function NSW() {
  return (
    <div>
      <ul className="list-item px-10 ">
         <div className="flex items-start justify-center">
          <li className="text-blue-900 text-lg">New South Wales 
          <hr className="h-[2px] bg-blue-900 " />
          </li>
         <div className="mx-auto flex-col justify-end gap-4 ">
         <div className="mb-4"><a href="#">Byron Bay</a> <hr className="h-[2px]" /></div>
         <div className="mb-4"><a href="#">Newcastle</a> <hr className="h-[2px]" /></div>
         <div className="mb-4"><a href="#">Sydney</a>    <hr className="h-[2px]" /></div>
        </div>
        </div>
     </ul>
    </div>
  )
}

export default NSW
