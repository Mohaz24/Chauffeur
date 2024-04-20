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
        {/* Edit,refactoring, adjust padding, clean code & creating tailwind custom classes */}
        <div className="text-center pt-8 pb-5">
          <h1 className={`text-[#FFD700] text-[37.4px] leading-[45.9px] w-[55%] mx-auto`}>
            {props.title}
          </h1>
          <p className="mt-5 w-4/6 mx-auto  font-extralight">
          We’re Australia’s original chauffeur service with a rich history dating back to the start of the 20th Century. In that time, much has changed, 
          but one thing has remained the same – our steadfast commitment to delivering a reliable, premium transport service – wherever you need to go. 
          With offices nationwide, and a wide selection of vehicles to move 1-61 passengers in comfort and style, Luxus has your transport 
          covered. </p>
        </div>

        <div className="pt-10 pb-28 flex flex-col gap-9 items-center justify-center sm:grid sm:grid-cols-2
        lg:flex lg:flex-row lg:gap-4 lg:items-center lg:justify-evenly">
          <div className="flex items-center flex-col gap-10 text-center pt-8">
          <div className="w-[50px] h-[50px] bg-[#FFD700] rounded-[150px] relative flex items-center justify-center">
            <AiOutlineGlobal className="w-[30px] h-[30px] text-[#ffff]" />
          </div>
             <h2 className="w-3/4 font-semibold ">
             Australia’s Largest Chauffeur Service
            </h2>
          </div>

          <div className="flex items-center flex-col gap-10 text-center pt-8">
          <div className="w-[50px] h-[50px] bg-[#FFD700] rounded-[150px] flex items-center justify-center">
            <GiGps className="w-[30px] h-[30px] text-[#ffff]" />
          </div>
             <h2 className="w-[90%] font-semibold ">
             Full GPS Tracking On  Vehicles
            </h2>
          </div>

          <div className="flex items-center flex-col gap-10 text-center pt-8">
          <div className="w-[50px] h-[50px] bg-[#FFD700] rounded-[150px]  flex items-center justify-center">
            <FaHeadphones className="w-[30px] h-[30px] text-[#ffff]" />
          </div>
             <h2 className="w-3/4 font-semibold ">
             Here To Help 24 Hours A Day
            </h2>
          </div>

          <div className="flex items-center flex-col gap-10 text-center pt-8">
          <div className="w-[50px] h-[50px] bg-[#FFD700] rounded-[150px]  flex items-center justify-center">
            <HiOutlineTrophy className="w-[30px] h-[30px] text-[#ffff]" />
          </div>
             <h2 className="w-3/4 font-semibold ">
             Over 115 Years Experience
            </h2>
          </div>

          <div className="flex items-center flex-col gap-10 text-center pt-8">
          <div className="w-[50px] h-[50px] bg-[#FFD700] rounded-[150px]  flex items-center justify-center">
            <BsCalendar2Date className="w-[30px] h-[30px] text-[#ffff]" />
          </div>
             <h2 className="w-3/4 font-semibold ">
             Large Events & Conferences Experts
            </h2>
          </div>

          <div className="flex items-center flex-col gap-10 text-center pt-8">
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
