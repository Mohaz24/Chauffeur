import {React, useState, useEffect} from 'react'
// import Chaffuer from  './assets/Chaffuer'
import logoImg from '../assets/svg/logo.svg'
import Modals from './Modals';
import { airports, location, service, TheFleet, aboutUs } from './utilitis';

import serviceImg from '../assets/images/service.png'

// Menu Icons
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { CgClose } from "react-icons/cg";

import { NavLink } from 'react-router-dom';
import { BsTelephone } from "react-icons/bs";
import { IoIosArrowDropdown } from "react-icons/io";

// !====== Remmber to add the image localy !=====
function Header() {
  const [isActive, setIsActive ] = useState(null)
  const [on, setOn] = useState(false)

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
    //  setIsActive(navLinks)
  }

  function toggleOff(){
    setIsActive(null)
 }

 function toggleNavbar(){
  setOn((prevOn) => !prevOn)
 }



  return (
    <header className=" pb-58 md:pb-0">
    <div className="bg-[url(https://irp-cdn.multiscreensite.com/344ae3d5/dms3rep/multi/Jean_Chauffeur_Limo_Car_Services.jpg)] 
    relative bg-left  h-svh md:w-full md:h-svh md:bg-bottom">
    <div className="bg-[#fff] p-2 bg-opacity-10 md:bg-[#EBE9E9] md:bg-opacity-25 font-[SourceSans3]">
     <nav>
         <ul className="hidden md:flex items-center justify-end gap-5 text-white text-[16px] md:flex-row"> 
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
    <div className="flex items-center gap-10 justify-start pt-2 pb-7 pl-10 relative md:pl-10 ">
      <NavLink to="/" className="flex items-end gap-0">
       <img className="h-[60px] md:h-[70px]"  src={logoImg} alt="" />
       <div className="text-[#FFD700] font-[Orbitron] ">
        <hr />
        <h2 className="md:text-[20px] pt-1 pb-1 uppercase">Luxus Chauffeur</h2>
        <hr className="border-[1px] bg-[black] round-xs" />
        <p className="text-xs">Australia's Chauffeur Service</p>
       </div>

        {/* MOBILE NAVBAR */}
        {
          on ?  <div className="md:hidden">
          <CgClose onClick={toggleNavbar} className="absolute top-6 right-9 text-[#fff] w-[25px] h-[25px]" />
          <div className="font-[SourceSans3]  fixed top-0 left-0 bottom-0 right-0  m-auto opacity-95 bg-[#ABAE29] flex
          flex-col items-center gap-10 pt-16 pointer-events-none animation">
          <ul className="flex flex-col items-center gap-2 text-[#fff] text-[18px]  "> 
            <li><a href="Join The Fleet">Join The Fleet</a></li>
            <li><a href="Accounts">Accounts Applications</a></li>
            <li><a href="#">Sign in</a></li>
            <li><a href="#">Reviews</a></li>
            <hr className="w-[150%] border-[#fff] border-1" />

            <li><a href="#">Airport Transfers</a></li>
            <li><a href="#">Locations</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">The Fleet</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Contact us</a></li>
            <li><a href="#">Book Now</a></li>
         </ul>
             
          </div>
       
        </div> :  <div className="md:hidden">
         <HiMiniBars3BottomLeft onClick={toggleNavbar} className="absolute top-6 right-9 text-white w-[25px] h-[25px]" />
         <div className="hidden"></div>
       </div>
        }
      </NavLink>
     
     <>
     <div className="text-white text-xl hidden md:flex">
          <NavLink  onMouseEnter={() => toggleOn("airportLinks")} onMouseLeave={() =>toggleOff("airportLinks")} 
           to="/airportTransfers"
           className={`flex items-end gap-1 ${(isActive) => isActive ? "underline text-white"  : ""} `}>
           <a href="/airportTransfers" className="font-[SourceSans3]  "> Airport <br /> 
           <span className={isActive === "airportLinks" ? "hover:underline" : "" }>Transfers</span></a>
           <IoIosArrowDropdown />
           {
             isActive === "airportLinks" ? <div className="absolute top-5">
            <nav className="bg-[#FFD700] bg-opacity-[1.0] w-[50%] h-[45vh] text-black pl-4 pt-3 pr-4 mt-11">
              <div className="grid grid-cols-2 gap-6">
                 {airports}
              </div>
            </nav>
          </div> : null
           }
          </NavLink>
       </div>

     
       <div className="text-white text-xl bg-blend-darken hidden md:flex ">
          <NavLink  onMouseEnter={() => toggleOn("locationLinks")} onMouseLeave={() => toggleOff("locationLinks")} 
          to="/locations"
          className={`flex items-center gap-4 ${(isActive) => isActive ? "underline text-white"  : ""}  `}>
           <a href="/locations" className="font-[SourceSans3]"> Locations <br />     <IoIosArrowDropdown  />  </a>
           {/* {
             isActive === "locationLinks" ? <div className="w-[25%] h-[35vh]">
            <nav className="bg-[#FFD700]  text-black pl-4 pt-3 pr-4 mt-9">
              <div className="grid grid-cols-2 gap-6">
                  {location}
              </div>
            </nav> 
          </div> 
          : null
           } */}
          </NavLink>
       </div>

       
       <div className="text-white text-xl hidden md:flex">
          <NavLink  onMouseEnter={() => toggleOn("locationLinks")} onMouseLeave={() => toggleOff("locationLinks")} to="/services" className={`flex items-center gap-4 ${(isActive) => isActive ? "underline text-white "  : ""} `}>
           <a href="/services" className="font-[SourceSans3]"> Services <br /> <IoIosArrowDropdown />  </a>
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

       <div className="text-white text-xl hidden md:flex">
          <NavLink  onMouseEnter={() => toggleOn("fleet")} onMouseLeave={() =>toggleOff("fleet")} to="/fleet" className={`flex items-end gap-1 ${(isActive) => isActive ? "underline text-white "  : ""} `}>
           <a href="/fleet" className="font-[SourceSans3] relative"> The <br /> <span className={isActive === "fleet" ? "hover:underline" : "" }>Fleet</span></a>
           <IoIosArrowDropdown />
           {
             isActive === "fleet" && <div className="absolute top-20 left-64 right-4 bottom-0 m-auto">
            <nav className="bg-[#FFD700] bg-opacity-[1.0] w-[50%] h-[45vh] text-black pl-4 pt-3 pr-4 mt-11">
              <div className="grid grid-cols-1 gap-6">
                 {TheFleet}
              </div>
            </nav>
          </div>
           }
          </NavLink>
       </div>
        
       <div className="text-white text-xl hidden md:flex ">
          <NavLink  onMouseEnter={() => toggleOn("about")} onMouseLeave={() => toggleOff("about")} to="/about" className={`flex items-center gap-4 ${(isActive) => isActive ? "underline text-white "  : ""} `}>
           <a href="/about" className="font-[SourceSans3]"> About <br /> <IoIosArrowDropdown />  </a>
           {
             isActive === "about" && <div className="absolute top-24 left-0 right-0 bottom-0 m-auto">
            <nav className="bg-[#FFD700] w-[25%] h-[35vh] text-black pl-4 pt-3 pr-4 mt-9">
              <div className="grid grid-cols-2 gap-6">
                  {aboutUs}
              </div>
            </nav>
          </div> 
           }
          </NavLink>
       </div>
    

       <div className="text-white text-xl hidden md:flex">
          <NavLink to="/contact" className={`flex items-end gap-1 ${(isActive) => isActive ? "underline text-white "  : ""} `}>
           <a href="/contact" className="font-[SourceSans3] relative  drop-shadow-2xl"> Contact <br /> Us </a>
          </NavLink>
       </div>
       
       <div className="bg-transparent py-[3px] px-[10px]  text-white border-1 hidden md:flex">
        <a href=""> Book <br /> Now</a>
       </div>
     </>
    
       
       </div>
    </nav>

     <div className="text-[#fff] pl-20 font-[SourceSans3]">
       <h1 className="text-[30px] leading-[1.2] font-semibold md:text-[50px] ">Australia's Chauffeur Service</h1>
       <p className="text-[16px] pt-3">Experience the Luxus difference with premium transfers, tours and event transport.</p>
       <nav>
        <ul className="flex flex-col gap-4 font-normal pt-6  sm:pt-2  md:pt-10 md:flex-row">
          <li className="py-[3px] w-[60%] uppercase bg-[#FFD700] inline-block sm:py-[6px] md:py-[10px] md:w-[15%] rounded text-center">
            <a href="">Book Now</a>
          </li>
          <li className="py-[3px] w-[60%] uppercase bg-transparent border-2 border-whitesm:py-[6px] inline-block md:py-[10px] md:w-[20%]
           rounded text-center">
            <a href=""> Managing Booking</a>
          </li>
          <li className="py-[3px] w-[60%] uppercase bg-transparent border-2 border-whitesm:py-[6px] inline-block md:py-[10px] md:w-[20%] 
          rounded text-center">
            <a href="">Get Instant Quote</a>
          </li>
        </ul>
       </nav>
        <div className="mt-2 underline">
          <a href="#">Track My Vehicle</a>
        </div>
        <div className="flex gap-7 justify-start sm:gap-10 md:gap-24 pt-10 md:flex-row"> 
          <div>
           <h2 className="drop-shadow-sm font-semibold text-[24px] md:leading-[37.8px] md:text-[30.8px]">2.1m</h2>
           <p className="mt-1 md:mt-2 ">Passengers moved <br /> last  year</p>
          </div>
          <div>
           <h2 className="drop-shadow-sm text-[24px] md:leading-[37.8px] md:text-[30.8px]">1,035</h2>
           <p className="mt-1 md:mt-2 ">Size of fleet</p>
          </div>
          <div>
           <h2 className="drop-shadow-sm text-[24px] md:leading-[37.8px] md:text-[30.8px]">9</h2>
           <p className="mt-1 md:mt-2 ">Offices across <br /> Australia</p>
          </div>
          <div>
           <h2 className="drop-shadow-sm text-[24px] md:leading-[37.8px] md:text-[30.8px]">1,052</h2>
           <p className="mt-1 md:mt-2 ">Chauffeurs / Drivers</p>
          </div>
        </div>
        
     </div>
    </div>
    </header>
  )
}

export default Header
