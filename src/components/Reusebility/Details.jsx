import React from 'react'

function Details(props) {
  return (
    <div>
       <section className="font-[SourceSans3] pt-14 pb-20">
        <div className="flex flex-col items-start justify-around  md:justify-between lg:flex-row">
          <h2 className={`text-[34px] mx-auto sm:text-start text-[#FFD700] pl-5 w-[${props.width}%] sm:mx-auto lg:pl-16`}>{props.title}</h2>
        <div className="pl-6 sm:w-[90%] sm:mx-auto lg:w-[55%]">
          <p className="pt-7  sm:w-[95%] sm:pt-10 lg:w-[88%] lg:pt-3">{props.info}</p>

           <p className="pt-4 sm:pt-3">{props.details}</p>
           
           <div className="pt-8 sm:pt-5">
             { props.list && props.list.map((items) => <li>{items}</li>) }
           </div>

           <p className="pt-8">{props.moreInfo}</p>
           <p className="pt-11">{props.extraDetails}</p>
        </div>


        </div>
       </section>
    </div>
  )
}

export default Details
