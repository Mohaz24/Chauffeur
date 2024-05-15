import React from 'react'


// REUSEABLE COMPONENTS
import SharedHeaders from '../Reusebility/SharedHeaders'


function JoinTheFleet() {
  return (
    <div>
       {/* NAV */}
       <SharedHeaders 
       url="https://images.pexels.com/photos/7792744/pexels-photo-7792744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
       bgPosition="center"
       height={90}
       tw={100}
       textW={50}
       title="Join The Fleet"
       text="Are you looking to join Australia’s largest and only national chauffeur fleet?"
       btnWidth={60}
       hidden="hidden"
       i="I"
       n="n"
       s="s"
       t="t"
       a="a"
       nx="n"
       nt="t"

       q="Q"
       u="u"
       o="o"
       qt="t"
       e="e"
       paddingTop={10}
       />

     {/* DETAILS */}
     <section className="font-[SourceSans3] pt-14 pb-20 ">
        <div className="flex flex-col items-start gap-1 justify-between md:justify-around lg:flex-row ">
          <h2
            className={`text-[34px] font-black text-[#FFD700] pl-6 text-start sm:w-[80%] sm:mx-auto  lg:pl-16`}>
            Join The Fleet – <br className="hidden lg:block" /> Luxus
          </h2>
          
          <div className={`pl-6 lg:w-[190%]`}>
            <p className="pt-7 w-[95%]  sm:w-[80%] sm:mx-auto sm:pt-7 lg:w-[90%] lg:pt-1">
             Luxus prides itself on hiring Australia’s most professional and reliable chauffeurs.
            </p>

            <p className="pt-4 w-[95%] sm:w-[80%] sm:mx-auto lg:w-[90%] ">Operating for over 115 years, Hughes is the leading chauffeured 
            vehicle company in Australia. To maintain this position, as we have done for over a century, we need to hire the highest quality 
            chauffeurs available in Australia.</p>
            
            <p className="pt-4 w-[95%] sm:w-[80%] sm:mx-auto lg:w-[90%] ">Our chauffeurs are handpicked to ensure our clients are 
            driven to their destination in a discrete, professional and comfortable fashion, with safety being of paramount importance
            </p>

            <p className="pt-4 w-[95%] sm:w-[80%] sm:mx-auto lg:w-[90%]"> At Hughes we offer a career, not just a job. When you join our 
            fleet, you become part of our huge national team.</p>

            
            <p className="pt-4 w-[95%] sm:w-[80%] sm:mx-auto lg:w-[90%]"> On the job training, exciting opportunities and ongoing support 
            are some of the benefits that our team enjoy.</p>

            
            <p className="pt-4 w-[95%] font-black sm:w-[80%] sm:mx-auto lg:w-[90%]">If the above sounds exactly like you, join below as either a chauffeur; 
            or a contractor if you have your own vehicle.</p>

             <ul className="flex flex-col gap-4 font-normal pt-10 sm:pt-6 sm:pl-16 md:pt-10 
            md:pl-20 md:flex-row lg:pl-9 ">
             <li
                className="py-[9px] w-[55%] uppercase bg-[#FFD700] text-[#FFF] sm:py-[8px] sm:w-[40%] md:py-[14px] md:w-[30%]
                lg:py-[14px] lg:w-[34%] rounded text-center">
                <a href="">JOIN AS A CHAUFFEUR</a>
              </li>
              <li
                className="py-[9px] w-[55%]  uppercase bg-[#151515] text-[#FFD700] sm:py-[8px] sm:w-[40%] md:py-[14px] md:w-[30%] 
                lg:py-[14px] lg:w-[34%] rounded text-center"
              >
                <a href="">JOIN AS A CONTRACTOR</a>
              </li>
             </ul>
          </div>
        </div>
      </section>
      
    </div>
  )
}

export default JoinTheFleet
