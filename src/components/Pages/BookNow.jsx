import {React, useState} from 'react'

import { NavLink } from 'react-router-dom'

// Menu Icons
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { CgClose } from "react-icons/cg";

//SVG ICONS
import location from "../../assets/svg/pinpoint.svg"
import passengers from "../../assets/svg/passengers.svg"

// LOGO
import logoImg from "../../assets/svg/logo.svg";

function BookNow() {
  const [on, setOn] = useState(false)

  function toggleNavbar(toggle) {
    setOn(toggle);
  }
  return (
    <div>
     <div
        style={
          {
           background: `url(https://images.pexels.com/photos/7709175/pexels-photo-7709175.jpeg)`,
           backgroundPosition: `left`,
           backgroundSize: 'cover',
           objectFit: 'cover'
          }
      }
        className={`h-[16vh] relative  sm:h-[20vh] `}
      >

        {/* Navbar */}
        <nav className="h-ct">
          <div className="flex custom-class-bk-ct gap-1  pt-2 pb-7 lg:pl-4 relative sm:pl-10 md:pl-16 lg:gap-10  lg:items-center lg:justify-between">
          {on === "open" ? (
                 <>
                  <div
                    className="font-[SourceSans3] fixed top-0 left-0 bottom-0 right-0 z-10 m-auto opacity-95 bg-[#ABAE29] flex
                    flex-col items-center gap-10 pt-16 animation cursor-pointer lg-hidden"
                  >
                  <div className= "lg:hidden">
                  <CgClose
                    onClick={() => toggleNavbar("close")}
                    className={`absolute top-6 right-14  custom-class-close text-[#fff] w-[25px] h-[25px] 
                    sm:right-24 sm:top-7 md:right-28 cursor-pointer`}
                  />
                    <ul className="flex flex-col items-center gap-2 text-[#fff] text-[18px] z-10">
                    <NavLink
                      to="/"
                      className={({isActive})  => isActive ? "active-links" : ""}
                      >
                       Home
                     </NavLink>

                      <NavLink
                      to="/accounts"
                      className={({isActive})  => isActive ? "active-links" : ""}
                      >
                       Accounts Applications
                      </NavLink>

                        <NavLink
                      to="/login"
                      className={({isActive})  => isActive ? "active-links" : ""}
                      >
                      Log in
                      </NavLink>
                       
                      <NavLink
                      to="/join"
                      className={({isActive})  => isActive ? "active-links" : ""}
                      >
                      Join The Fleet
                      </NavLink>
                      <hr className="w-[150%] border-[#fff] border-1" />
                      <NavLink
                      to="/airportTransfers"
                      className={({isActive})  => isActive ? "active-links" : ""}
                      >
                       Airport Transfers
                      </NavLink>
                       
                      <NavLink
                      to="/locations"
                      className={({isActive})  => isActive ? "active-links" : ""}
                      >
                       Locations
                      </NavLink>
                       
                      <NavLink
                      to="/services"
                      className={({isActive})  => isActive ? "active-links" : ""}
                      >
                       Services
                      </NavLink>
                       
                      <NavLink
                      to="/fleet"
                      className={({isActive})  => isActive ? "active-links" : ""}
                      >
                       The Fleet
                      </NavLink>
                      
                      <NavLink
                      to="/about"
                      className={({isActive})  => isActive ? "active-links" : ""}
                      >
                       About us
                      </NavLink>
                      
                      <NavLink
                      to="/contact"
                      className={({isActive})  => isActive ? "active-links" : ""}
                      >
                      Contact us
                      </NavLink>
                      
                      <NavLink
                      to="/book"
                      className={({isActive})  => isActive ? "active-links" : ""}
                      >
                      Book Now
                      </NavLink>
                    </ul>
                  </div>
                </div>
                </>
              ) : (
                <div className="lg:hidden">
                  <HiMiniBars3BottomLeft
                    onClick={() => toggleNavbar("open")}
                    className="absolute cursor-pointer top-6 right-14 z-[999] custom-class-open text-white w-[25px] h-[25px] sm:right-24 
                    sm:top-7"
                  />
                  <div className="hidden"></div>
                </div>
              )}
            <NavLink to="/" className={`flex items-end gap-0 custom-class-nav ${(isActive) => isActive ? "" : ""} pr-0`}>
              <img className="h-[60px] md:h-[70px]" src={logoImg} alt="" />
              <div className="text-[#FFD700] font-[Orbitron] custom-class-nav-ct">
                <hr />
                <h2 className="md:text-[20px] pt-1 pb-1 uppercase">
                  Luxus Chauffeur
                </h2>
                <hr className="border-[1px] bg-[black] round-xs" />
                <p className="text-xs">Australia's Chauffeur Service</p>
              </div>
             </NavLink>

             <NavLink to="/login">
               <a href="/login" className="hidden uppercase w-[100%] px-[20px] py-[11px] bg-[#151515] text-[#FFD700]  text-center rounded-xl 
               font-[SourceSans3] lg:flex">Log In To Luxus Account</a>
             </NavLink>
            <div>
            </div>
          </div>
        </nav>
       </div>

       {/* CONTENT */}
       <main className="pt-10 pb-64 h-[140vh] bg-gray-100 rounded-xl w-[100%] font-[SourceSans3] sm:h-[145vh] md:h-[130vh] md:pb-60 ">
          <section className="w-[100%] relative h-[60vh] px-4 bg-[#151515] rounded-2xl mx-auto  md:w-[85%] md:h-[50vh] ">
          <div className="grid grid-cols-2 md:grid-cols-1">
          <div className="flex flex-col items-start pt-4 md:flex-row lg:items-center">
            <div className=" md:pl-2">
              <img src={location} alt="location" className="w-[40px] h-[40px] bx" />
            </div>
           <hr className="border-[1.2px] border-dotted border-[#ECE7E7] w-[47%] mt-6 hidden md:block" />
           <div className="block ml-4 md:hidden">
            <hr className="border-[1.2px] border-dotted border-[#ECE7E7] h-[50px] mx-auto" />
          </div>
            <div className="md:pl-1 ">
              <img src={location} alt="location" className="w-[40px] h-[40px]" />
            </div>
          </div>
          
          {/* FORM */}
          <form action="" className="flex flex-col items-start justify-around font-[SourceSans3] md:flex-row lg:items-center">
          <div className="pt-6 relative right-28 bottom-1 custom-class-bk-pos md:w-[80%]  md:left-2 lg:bottom-0 lg:left-1 lg:pl-6 ">
            <div>
            <label htmlFor="from" className="text-[#FFD700] pb-4">FROM</label>
            </div>

            <input type="text" name="from" id="from" 
              placeholder='Enter a location("Sydney Airport", e.g)' 
              className="mt-4  text-black px-[20px]  py-2 pl-3 rounded-xl w-[130%] sm:w-[125%] md:w-[80%] md:py-[10px] 
              placeholder:text-[14px]" 
            />
          </div>

          <div className="pt-6 pl-9 md:w-[80%]  relative right-36 bottom-2 custom-class-bk-pos-l  md:left-2 lg:bottom-0 lg:left-1">
            <div>
            <label htmlFor="to" className="text-[#FFD700] pb-4">TO</label>
            </div>
            <input type="text" name="to" id="to" 
              placeholder='Enter a location("Melbourne Airport", e.g)' 
              className="mt-4 text-black py-[10px] pl-3 rounded-xl  w-[165%] sm:w-[137%] md:w-[85%]  placeholder:text-[14px]" 
            />
          </div>
        </form>
        <hr className="border-1 border-gray-100 w-[170%] md:w-[97%] mt-8 ml-4" />
        </div>

       <div className="grid grid-cols-1 gap-6 mt-14 md:mt-24 md:grid-cols-2 md:gap-8">
       <div className="pt-6 pl-1">
            <div>
            <label htmlFor="date" className="text-[#FFD700] pb-4">DATE</label>
            </div>
            <input type="date" name="date" id="date" 
              className="mt-4 w-[90%] text-black py-[10px] px-5 rounded-xl sm:w-[60%] md:w-[100%]  placeholder:text-[16px]" 
            />
          </div>

          <div className="pt-2 sm:pl-1 sm:pt-3 md:pt-6 ">
            <div>
            <label htmlFor="time" className="text-[#FFD700] pb-4 ">TIME</label>
            </div>
            <input type="time" name="time" id="time" 
              placeholder="Time"
              className="mt-4 w-[80%] text-black py-[10px] px-5 rounded-xl placeholder:text-[16px] sm:w-[40%] 
              md:w-[60%] lg:w-[60%]" 
            />
          </div>

          <div className="relative pl-1  sm:pl-1 sm:pt-4 ">
            <div>
            <label htmlFor="pass" className="text-[#FFD700] pb-4 ">PASSENGERS</label>
            </div>
            <input type="number" name="pass" id="pass" 
            placeholder="1"
              className="mt-4 relative text-black py-[10px] px-5  pl-11 rounded-xl w-[90%] lg:min-w-[200px] 
              placeholder:text-[16px] placeholder:text-black sm:w-[60%] md:w-[100%]  " 
            />
             <img src={passengers} alt="passenger" className="w-[20px] h-[20px] absolute bottom-3 left-4 ml-3 sm:ml-1" />
          </div>
          </div>
          </section>
       </main>
     
     {/* PURCHASE */}
      <section className="pt-16  w-full pb-4 bg-[#D4D4D4] font-[SourceSans3] sm:pt md:pt-10">
        <div className="flex  flex-col items-center justify-around gap-4 w-full custom-class-book-w  sm:flex-row md:flex-row ">
          <button className=" py-[10px] px-[4px] w-[30%] uppercase custom-class-book-padds bg-[#FFD700] text-white cursor-pointer 
          sm:py-[9px]  sm:w-[18%] md:py-[12px] md:w-[20%] lg:pt-[10px] lg:w-[15%] rounded-xl text-center">
           Clear Form
          </button>
     
        
         <div>
         <a className="py-[6px] w-[55%] uppercase custom-class-book-padds text-black px-10 sm:py-[9px] sm:w-[35%] md:py-[12px] md:w-[20%] 
          lg:pt-[10px] lg:w-[20%] rounded-xl mr-5 md:mr-4 text-center text-lg"
          style={{ background: 'linear-gradient(to left, #EAEAEA 60%, #FFF 60%)' }}>
            $ <span>0.00</span>
         </a>
          

         <a href="/services" className="py-[8px] px-[6px] custom-class-book-btn text-sm bg-[#EAEAEA] w-[5%] uppercase
          text-black sm:py-[11px] sm:w-[35%] md:py-[12px] md:w-[20%] md:px-10  lg:pt-[10px] lg:w-[20%] rounded-xl text-center">
            Continue To Vehicle Selection
         </a>
         </div>

      
        </div>
      </section>

      <footer className="bg-[#151515] w-full pb-6 pt-4 md:pb-6 md:pt-3 md:pl-3 flex items-center justify-between 
      text-sm font-[SourceSans3]">
        <div>
          <img src={logoImg} alt="logo"  className="w-[45px] h-[45px] pl-2" />
        </div>
        <p className="text-white pr-2 sm:pr-10">
          © 2024 , <span className="text-[#FFD700]">Equity Transport Group Pty Ltd ABN 52 090 237 105</span>
        </p>
      </footer>
    </div>
  )
}

export default BookNow
