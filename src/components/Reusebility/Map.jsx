import {React, useState} from 'react'

import mapImg from "../../assets/images/map.png"

import { IoIosArrowDropdown } from "react-icons/io";

function Map(props) {
  const [on, setOn] = useState(false)
  const [display, setDisplay] = useState("nsw")

  function toggle(){
    setOn((on) => !on)
  }

  function showLinks(navLink){
    setDisplay(navLink)
  }

  const bgStyles = {
    backgroundImage: `url(${mapImg})`,
    backgroundPosition: `90% 90%`,
    backgroundRepeat: `no-repeat`,
    backgroundSize: `contain`,
    backgroundColor: `rgb(242, 243, 244)`
  }
  return (
    <div>
       <section className="bg-gray-100 pb-36  md:pb-28 lg:pb-20">
      <div className="text-center pt-11 pb-5 font-[SourceSans3]">
          <h1 className={`w-5/6  font-black mx-auto text-[#FFD700] text-[30px] leading-[45.9px] md:w-3/6 md:w-[${props.width}%]  
          lg:text-[37.4px] `}>
             {props.title}
          </h1>
          <p className="pt-7 w-3/5 mx-auto font-extralight sm:w-4/6 md:w-8/12 ">{props.text}</p>
          <p className="pt-3 w-4/6 mx-auto font-extralight">{props.subtitle}</p>
        </div>

        <div className="pt-10 font-[SourceSans3] lg:pt-16">
           <div style={bgStyles} className="h-[270px] sm:h-[290px] md:h-[350px]">
               <nav className="flex flex-col pl-16">  
                    <div className="flex flex-col items-center lg:flex-row lg:items-start" >
                     <>
                     <span className="flex items-center gap-2 cursor-pointer lg:hidden">
                         { display === "nsw" ? "New South Wales" : display === "vic" ? "Victoria" : display === "qs" ? "Queensland" : "International" }
                        <IoIosArrowDropdown  onClick={() => toggle()} />
                      </span>
                  
                      <div className={`${on ? "lg:block" : "hidden"}  list-none lg:list-disc lg:block`}>
                      <li className={`${display === "nsw" ? "text-sm-crs-pb" : "crs-li"} text-start`}>
                        <span onClick={() => showLinks("nsw")} style={{ borderBottom: display === "nsw" ? "1px solid #FFD700" : "none" }}>
                            New South Wales
                        </span>
                      </li>
            
                        <li className={` ${display === "vic" ? "text-sm-crs-pb" : "crs-li"} `}>
                           <span onClick={() => showLinks("vic")} style={{ borderBottom: display === "vic" ? "1px solid #FFD700" : "none" }}>
                             Victoria
                           </span>
                        </li>
                                 
                        <li className={`${display === "qs" ? "text-sm-crs-pb" : "crs-li"}`}>
                          <span onClick={() => showLinks("qs")} style={{ borderBottom: display === "qs" ? "1px solid #FFD700" : "none" }}>
                             Queensland
                          </span>
                         </li>     
            
                         <li className={`${display === "int" ? "text-sm-crs-pb" : "crs-li"}`}>
                            <span onClick={() => showLinks("int")} style={{ borderBottom: display === "int" ? "1px solid #FFD700" : "none" }}>
                             International
                            </span>
                        </li>   
            
                       </div> 
                      
                     </>


              {/* Bryon bay */}
              {
                      display === "nsw" && <div className="mx-auto pt-10">
                      <div className="flex items-center justify-between gap-[195px] custom-class-space text-[15px] list-none 
                      sm:gap-[380px] md:gap-[570px] lg:gap-[490px] lg:w-[100%] lg:pb-3 lg:h-[100%]  lg:justfiy-between">
                       <div>
                       <li className="sm:pb-2 md:pb-4 lg:pt-2">Bryon Bay</li>
                       </div>
                      
                       <div>
                       <span className="font-semibold underline"><a href="">Read <br className="sm:hidden lg:hidden" /> More</a></span>
                       </div>
                 

                      </div>
                       <hr className="w-[100%] border-[#C1BDBD] mt-2 lg:mt-3 lg:border-1 lg:w-[105%]" />

                       {/* Newcastle */}
                      
                       <div className="flex items-center justify-between  pt-2 text-[15px] pb-2 list-none 
                       lg:w-[100%] lg:h-[105%]" >
                       <div>
                       <li className="sm:pt-2 sm:pb-2 md:pt-4 md:pb-4 lg:pt-2">Newcastle</li>
                       </div>

                       <div>
                       <span className="font-semibold underline"><a href="">Read <br className="sm:hidden lg:hidden" /> More</a></span>
                       </div>
                       
                      </div>
                      <hr className="w-[100%] border-[#C1BDBD] mt-1 lg:mt-3 lg:border-1 lg:w-[105%]" />
                       
                      {/* SYDNEY */}

                      <div className="flex items-center justify-between gap-24  pt-2  text-[15px] pb:2 list-none lg:pb-3 lg:justify-between 
                      lg:w-[100%] lg:h-[105%]" >
                       <div>
                       <li className="sm:pt-2 sm:pb-2 md:pt-4 md:pb-4 lg:pt-2">Sydney</li>
                       </div>

                       <div>
                       <span className="font-semibold underline"><a href="">Read <br className="sm:hidden lg:hidden" /> More</a></span>
                       </div>
                       
                      </div>
                      <hr className="w-[100%] border-[#C1BDBD] mt-1 lg:mt-3 lg:border-1 lg:w-[105%]" />


                    </div>
                   
                   }

                   
                   {/* VICTORIA */}
                   {
                   
                   display === "vic" &&  <div className="mx-auto pt-7 sm:pt-10">
                    <div className="flex items-center justify-between gap-24  text-[15px] pb:2 list-none lg:pb-3  sm:gap-[350px]
                    lg:gap-[490px] lg:w-[100%] lg:h-[100%] ">
                    <li>Melbourne</li>
                    
                      <div className="self-start lg:self-end mx-auto ">
                      <span className="font-semibold underline"><a href="">Read <br className="sm:hidden lg:hidden" /> More</a></span>
                      </div>
                    </div>
                    <hr className="w-[100%] border-[#C1BDBD] mt-1 lg:mt-3 lg:border-1 lg:w-[105%]" />
                    
                      </div>
                
                  }

                  {/* Queensland */}

                  {
                   
                   display === "qs" &&  <><div className="mx-auto pt-7  ">
                    <div className="flex items-center justify-between gap-24 text-[15px] pb:2 list-none lg:pb-3 lg:justfiy-between
                     sm:gap-[350px] lg:gap-[450px] lg:w-[100%] lg:h-[100%] ">
                       <div>
                       <li className="sm:pt-2 sm:pb-2 md:pt-4 md:pb-4 lg:pt-2">Brisbane</li>
                       </div>
                      
                       <div>
                       <span className="font-semibold underline"><a href="">Read <br className="sm:hidden lg:hidden" /> More</a></span>
                       </div>
                 

                      </div>
                      <hr className="w-[100%] border-[#C1BDBD] mt-2 lg:mt-3 lg:border-1 lg:w-[105%]" />
                   

                      <div className="flex items-center justify-between gap-24 ] text-[15px] pb:2 list-none lg:pb-3 lg:justfiy-between 
                      lg:gap-[410px] lg:w-[100%] lg:h-[100%] ">
                       <div>
                       <li className="sm:pt-2 sm:pb-2 md:pt-4 md:pb-4 lg:pt-2">Sunshine Coast</li>
                       </div>
                      
                       <div>
                       <span className="font-semibold underline"><a href="">Read <br className="sm:hidden lg:hidden" /> More</a></span>
                       </div>
                 

                      </div>
                       <hr className="w-[100%] border-[#C1BDBD] mt-2 lg:mt-3 lg:border-1 lg:w-[105%]" />

                       <div className="flex items-center justify-between gap-24  text-[15px] pb:2 list-none lg:pb-3  lg:justfiy-between 
                       lg:gap-[434px] lg:w-[100%] lg:h-[100%] ">
                       <div>
                       <li className="sm:pt-2 sm:pb-2 md:pt-4 md:pb-4 lg:pt-2">Gold Coast</li>
                       </div>
                      
                       <div>
                       <span className="font-semibold underline"><a href="">Read <br className="sm:hidden lg:hidden" /> More</a></span>
                       </div>
                 

                      </div>
                       <hr className="w-[100%] border-[#C1BDBD] mt-2 lg:mt-3 lg:border-1 lg:w-[105%]" />
                    
                    </div>
                    
                    </>
                
                  }
                  {/* INTERNATIONAL */}
                  
                  {
                   
                   display === "int" &&  <div className="mx-auto pt-7 sm:pt-10 ">
                    <div className="flex items-center justify-between gap-24  text-[15px] pb:2 list-none sm:gap-[390px] lg:pb-3  lg:gap-[490px] 
                    lg:w-[100%] lg:h-[100%]">
                    <li>International</li>
                    
                      <div className="self-start lg:self-end mx-auto ">
                      <span className="font-semibold underline"><a href="">Read <br className="sm:hidden lg:hidden" /> More</a></span>
                      </div>
                

                    </div>
                      <hr className="w-[100%] border-[#C1BDBD] mt-1 lg:mt-3 lg:border-1 lg:w-[105%]" />
                    
                      </div>
                
                  }
                   
           </div>
          </nav>

           </div>
        </div>
      </section>
    </div>
  )
}

export default Map
