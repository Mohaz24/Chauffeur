import {React, useState, useEffect} from 'react'
// import Chaffuer from  './assets/Chaffuer'
import logoImg from '../assets/svg/logo.svg'
import Modals from './Modals';
import { airports, location, service } from './utilitis';

import serviceImg from '../assets/images/service.png'

import { NavLink } from 'react-router-dom';
import { BsTelephone } from "react-icons/bs";
import { IoIosArrowDropdown } from "react-icons/io";

//https://irp-cdn.multiscreensite.com/344ae3d5/dms3rep/multi/Jean_Chauffeur_Limo_Car_service.jpg
// !====== Remmber to add the image localy !=====
function Header() {
  const [isActive, setIsActive ] = useState(null)

  useEffect(() => {
     const handleScroll = () => {
       const header = document.querySelector('.h-ct')
       const contactSection = document.querySelector('.footer')
       const scrollPos = window.scrollY;
       if(scrollPos > header.offsetTop && scrollPos < contactSection.offsetTop - window.innerHeight ){
        header.classList.add('fixed')
        header.classList.add('fixed-bg')
        header.classList.add('fixed-txt')
       } else{
        header.classList.remove('fixed')
        header.classList.remove('fixed-bg')
        header.classList.remove('fixed-txt')
       }
     }

     window.addEventListener('scroll', handleScroll)

     return () => {
      window.removeEventListener('scroll', handleScroll)
     }
  },[])

  function toggleOn(navLinks){
     setIsActive(navLinks)
     setIsActive(navLinks)
  }

  function toggleOff(){
    setIsActive(null)
 }



  return (
    <header className="">
    <div className="bg-[url(https://irp-cdn.multiscreensite.com/344ae3d5/dms3rep/multi/Jean_Chauffeur_Limo_Car_Services.jpg)] relative bg-bottom  bg-cover w-full h-svh  ">
    <div className="p-2 bg-[#EBE9E9] bg-opacity-25 font-[SourceSans3]">
     <nav>
         <ul className="flex items-center justify-end gap-5 text-white  text-[16px]"> 
            <li><a href="Join The Fleet">Join The Fleet</a></li>
            <li><a href="Accounts">Accounts</a></li>
            <li><a href="#">Reviews</a></li>
            <div className="flex items-center gap-1">
                <BsTelephone className="self-center"/>
                <li><a href="#"> 1300 615 164</a></li>
            </div>
         </ul>
     </nav>
    </div>

    {/* Navbar */}
    <nav className="h-ct">
    <div className="flex items-center gap-10 justify-start pt-2 pl-10 pb-7  ">
      <NavLink to="/" className="flex items-end gap-0">
       <img className="w-28 h-[70px]"  src={logoImg} alt="" />
       <div className="text-[#FFD700] font-[Orbitron] ">
        <hr />
        <h2 className="text-[20px] pt-1 uppercase">Luxus Chauffeur</h2>
        <hr className="border-[1px] bg-[black] round-xs" />
        <p className="text-xs ">Australia's Chauffeur Service</p>
       </div>
      </NavLink>

     <div className="text-white text-xl">
          <NavLink  onMouseEnter={() => toggleOn("airportLinks")} onMouseLeave={() =>toggleOff("airportLinks")} to="/airportTransfers" className={`flex items-end gap-1 ${(isActive) => isActive ? "underline text-white "  : ""} `}>
           <a href="/airportTransfers" className="font-[SourceSans3] relative"> Airport <br /> <span className={isActive === "airportLinks" ? "hover:underline" : "" }>Transfers</span></a>
           <IoIosArrowDropdown />
           {
             isActive === "airportLinks" && <div className="absolute top-20 left-64 right-4 bottom-0 m-auto">
            <nav className="bg-[#FFD700] bg-opacity-[1.0] w-[50%] h-[45vh] text-black pl-4 pt-3 pr-4 mt-11">
              <div className="grid grid-cols-2 gap-6">
                 {airports}
              </div>
            </nav>
          </div>
           }
          </NavLink>
       </div>

     
       <div className="text-white text-xl ">
          <NavLink  onMouseEnter={() => toggleOn("locationLinks")} onMouseLeave={() => toggleOff("locationLinks")} to="/locations" className={`flex items-center gap-4 ${(isActive) => isActive ? "underline text-white "  : ""} `}>
           <a href="/locations" className="font-[SourceSans3]"> Locations <br />     <IoIosArrowDropdown />  </a>
           {
             isActive === "locationLinks" && <div className="absolute top-24 left-0 right-0 bottom-0 m-auto">
            <nav className="bg-[#FFD700] w-[25%] h-[35vh] text-black pl-4 pt-3 pr-4 mt-9">
              <div className="grid grid-cols-2 gap-6">
                  {location}
              </div>
            </nav>
          </div> 
           }
          </NavLink>
       </div>

       
       <div className="text-white text-xl ">
          <NavLink  onMouseEnter={() => toggleOn("locationLinks")} onMouseLeave={() => toggleOff("locationLinks")} to="/services" className={`flex items-center gap-4 ${(isActive) => isActive ? "underline text-white "  : ""} `}>
           <a href="/services" className="font-[SourceSans3]"> Services <br />     <IoIosArrowDropdown />  </a>
           {
             isActive === "locationLinks" && <div className="absolute top-24 left-0 right-0 bottom-0 m-auto">
            <nav className="bg-[#FFD700] w-[25%] h-[35vh] text-black pl-4 pt-3 pr-4 mt-9">
              <div className="grid grid-cols-2 gap-6">
                  {service}
              </div>
            </nav>
          </div> 
           }
          </NavLink>
       </div>
       
       </div>
       
      
    </nav>

     <div className="text-[#fff] pl-20 font-[SourceSans3] ">
       <h1 className="text-[50px] leading-[1.2] font-semibold">Australia's Chauffeur Service</h1>
       <p className="text-[16px] pt-3">Experience the Luxus difference with premium transfers, tours and event transport.</p>
       <nav>
        <ul className="pt-10 flex gap-4 font-normal">
          <li className="py-[10px] uppercase p-x[40px] bg-[#FFD700] inline-block w-[15%] rounded text-center "><a href="">Book Now</a></li>
          <li className="py-[10px] uppercase p-x[40px] bg-transparent border-2 border-white inline-block w-[20%] rounded text-center"><a href="">Managing Booking</a></li>
          <li className="py-[10px] uppercase p-x[40px] bg-transparent border-2 border-white inline-block w-[20%] rounded text-center"><a href="">Get Instant Quote</a></li>
        </ul>
       </nav>
        <div className="mt-2 underline">
          <a href="#">Track My Vehicle</a>
        </div>
        <div className="pt-10 flex justify-start gap-24 "> 
          <div>
           <h2 className="drop-shadow-sm font-semibold leading-[37.8px] text-[30.8px]">2.1m</h2>
           <p className="mt-2 ">Passengers moved <br /> last  year</p>
          </div>
          <div>
           <h2 className="drop-shadow-sm leading-[37.8px] text-[30.8px]">1,035</h2>
           <p className="mt-2 ">Size of fleet</p>
          </div>
          <div>
           <h2 className="drop-shadow-sm leading-[37.8px] text-[30.8px]">9</h2>
           <p className="mt-2 ">Offices across <br /> Australia</p>
          </div>
          <div>
           <h2 className="drop-shadow-sm leading-[37.8px] text-[30.8px]">1,052</h2>
           <p className="mt-2 ">Chauffeurs / Drivers</p>
          </div>
        </div>
        
     </div>
    </div>
    </header>
  )
}

export default Header
