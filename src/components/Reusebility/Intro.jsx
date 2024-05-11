import React from 'react'

// ICONS
import { AiOutlineGlobal } from "react-icons/ai";
import { GiGps } from "react-icons/gi";
import { FaHeadphones } from "react-icons/fa";
import { HiOutlineTrophy } from "react-icons/hi2";
import { BsCalendar2Date } from "react-icons/bs";
import { BsPersonArmsUp } from "react-icons/bs";

function Intro(props) {
  return (
    <div>
      <section className="bg-gray-100 p-7 font-[SourceSans3]">
        <div className="text-center pt-8 pb-5">
          <h1 className={`text-[#FFD700] font-black text-[30px]  leading-[45.9px] lg:w-[55%] lg:text-[37.4px] mx-auto`}>
            {props.title}
          </h1>
          <p className="mt-5 w-[90%] mx-auto font-extralight md:w-[85%] lg:w-4/6">{props.info}</p>
          <p className="mt-5 lg:w-[60%] mx-auto  font-extralight">{props.details}</p>
        </div>

        <div className="pt-10 pb-28 flex flex-col gap-9 items-center justify-center sm:pt-4 sm:grid sm:grid-cols-3 sm:gap-2 
        md:grid-cols-4 md:gap-2 lg:flex lg:flex-row lg:gap-4 lg:items-center lg:justify-evenly">
          <div className="flex items-center flex-col gap-10 text-center pt-8 sm:gap-6">
          <div className="w-[50px] h-[50px] bg-[#FFD700] rounded-[150px] relative flex items-center justify-center">
            <AiOutlineGlobal className="w-[30px] h-[30px] text-[#ffff]" />
          </div>
             <h2 className="w-3/4 font-semibold ">
             Australia’s Largest Chauffeur Service
            </h2>
          </div>

          <div className="flex items-center flex-col gap-10  text-center pt-8  sm:gap-6">
          <div className="w-[50px] h-[50px] bg-[#FFD700] rounded-[150px] flex items-center justify-center">
            <GiGps className="w-[30px] h-[30px] text-[#ffff]" />
          </div>
             <h2 className="w-[90%] font-semibold ">
             Full GPS Tracking On  Vehicles
            </h2>
          </div>

          <div className="flex items-center flex-col gap-10 text-center pt-8 sm:gap-6 ">
          <div className="w-[50px] h-[50px] bg-[#FFD700] rounded-[150px]  flex items-center justify-center">
            <FaHeadphones className="w-[30px] h-[30px] text-[#ffff]" />
          </div>
             <h2 className="w-3/4 font-semibold ">
             Here To Help 24 Hours A Day
            </h2>
          </div>

          <div className="flex items-center flex-col gap-10 text-center pt-8 sm:gap-6">
          <div className="w-[50px] h-[50px] bg-[#FFD700] rounded-[150px]  flex items-center justify-center">
            <HiOutlineTrophy className="w-[30px] h-[30px] text-[#ffff]" />
          </div>
             <h2 className="w-3/4 font-semibold ">
             Over 115 Years Experience
            </h2>
          </div>

          <div className="flex items-center flex-col gap-10 text-center pt-8 sm:gap-6">
          <div className="w-[50px] h-[50px] bg-[#FFD700] rounded-[150px]  flex items-center justify-center">
            <BsCalendar2Date className="w-[30px] h-[30px] text-[#ffff]" />
          </div>
             <h2 className="w-3/4 font-semibold ">
             Large Events & Conferences Experts
            </h2>
          </div>

          <div className="flex items-center flex-col gap-10 text-center pt-8 sm:gap-6">
          <div className="w-[50px] h-[50px] bg-[#FFD700] rounded-[150px]  flex items-center justify-center">
            <BsPersonArmsUp className="w-[30px] h-[30px] text-[#ffff]" />
          </div>
             <h2 className="w-[90%] font-semibold ">
             Courteous & Reliable Chauffeurs
            </h2>
          </div>

          </div>
      </section>
    </div>
  )
}

export default Intro
