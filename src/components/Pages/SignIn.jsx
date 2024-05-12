import {React, useState} from 'react'

import { NavLink } from 'react-router-dom';


// LOGO
import logoImg from "../../assets/svg/logo.svg";


// Menu Icons
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { CgClose } from "react-icons/cg";

function SignIn() {
    const [on, setOn] = useState(false)
    const [show, setShow] = useState("login")

    function toggleNavbar(toggle) {
      setOn(toggle);
    }

    function showPage(pages){
      setShow(pages)
    }

  return (
    <div>
      <div
        style={
          {
           background: `url(https://images.pexels.com/photos/7709175/pexels-photo-7709175.jpeg)`,
           backgroundPosition: `left`,
           backgroundSize: 'cover',
           objectFit: 'cover',
          }
      }
        className={`h-[16vh] relative  sm:h-[20vh] `}
      >

        {/* Navbar */}
        <nav className="h-ct">
          <div className="flex gap-1 pt-2 pb-7 lg:pl-4 relative sm:pl-10 md:pl-16 lg:gap-6  lg:items-center lg:justify-between">
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
                 
                       
          <NavLink
             to="/join"
              className="hidden lg:flex" >
               <h2 className="text-white font-[SourceSans3] ">The Fleet</h2>
            </NavLink>
                       
            <NavLink
             to="/services"
              className="hidden lg:flex" >
               <h2 className="text-white font-[SourceSans3] ">Services</h2>
            </NavLink>

            <NavLink
             to="/locations"
              className="hidden lg:flex" >
               <h2 className="text-white font-[SourceSans3] ">Locations</h2>
            </NavLink>

                 
            <NavLink to="/" className={`flex items-end gap-0 custom-class-nav ${(isActive) => isActive ? "" : ""} pr-0`}>
              <img className="h-[60px] md:h-[70px]" src={logoImg} alt="logo" />
              <div className="text-[#FFD700] font-[Orbitron] custom-class-nav-ct  ">
                <hr />
                <h2 className="md:text-[20px] pt-1 pb-1 uppercase">
                  Luxus Chauffeur
                </h2>
                <hr className="border-[1px] bg-[black] round-xs" />
                <p className="text-xs">Australia's Chauffeur Service</p>
              </div>
             </NavLink>
                      
             <NavLink
              to="/accounts"
              className="hidden lg:flex" >
               <h2 className="text-white font-[SourceSans3] ">Accounts</h2>
            </NavLink>
            <div>
            </div>
          </div>
        </nav>
       </div>
       <section className="pt-10 font-[SourceSans3]">
          <div className="flex flex-col items-center justify-center gap-10 sm:flex-row">
            <div>
              <h2 className="text-center text-[30px] leading-[1.2] font-black">Sign In</h2>
            </div>
            <div>
             <a href="#" className="bg-[#FFD700] text-white px-[9px] py-[8px] rounded-lg hover:text-[#000]">Help?</a>
             <a href="#" className="bg-[#FFD700] text-white px-[9px] py-[8px] rounded-lg hover:text-[#000] ml-2">1300 156 345</a>
             <a href="#" className="bg-[#FFD700] text-white px-[9px] py-[8px] rounded-lg hover:text-[#000] ml-2">+61 4495 3030</a>
            </div>
          </div>
          <div className="w-[85%] mx-auto mt-14 cursor-pointer  pb-16 mb-29 lg:w-[40%]">
          <a 
          onClick={() => showPage("login")}
          className="bg-[#FFD700] custom-class-login-padds text-center text-lg  text-white px-[65px] py-[10px] hover:text-[#000]
         sm:ml-24  md:ml-32 lg:ml-0">
            Sign into your Luxus account
          </a>
          </div>
          <hr className="w-[100%] border-1 bg-gray-200  mb-0" />
       </section>

       {/* PAGINATION */}

       <div className="flex items-center justify-center gap-44 pb-6 pt-4 cursor-pointer font-[SourceSans3]">
         <div>
            <p
            className="text-[18px] leading-[1.2] font-black"
            style={{ borderBottom: show === "login" ? "2px solid #FFD700" : "none" }}
            onClick={() => showPage("login")}
            >
             Log In
            </p>
         </div>

         <div>
         <p
         className="text-[18px] leading-[1.2] font-black"
         style={{ borderBottom: show === "signup" ? "2px solid #FFD700" : "none" }}
         onClick={() => showPage("signup")}
            >
             Sign Up
            </p>
         </div>
       </div>
 
       {/* FORM */}
         {
            show === "login" ? <section className="pt-0 font-[SourceSans3] w-[80%] mt-8 mx-auto h-[65vh] border-[1px]  
            rounded-sm lg:w-[40%]">  
            
            <div className="bg-[#FFD700] mt-0 py-2 px-4 font-black">
            <h2 className="text-md text-white text-[20px]">Your Details</h2>
         </div>
      <form action="" className="pb-16">
        <div className="pl-4">
            <input 
            type="text" 
            placeholder="User Name" 
            className="w-[80%] border-2 mt-4 px-[16px] py-[10px] rounded-md  border-200" />
        </div>

        <div className="pl-4">
            <input 
            type="text" 
            placeholder="Password" 
            className="w-[80%] border-2 mt-4 px-[16px] py-[10px] rounded-md  border-200" />
        </div>

        <div className="pl-4">
            <input 
            type="text" 
            placeholder="Account Number" 
            className="w-[80%] border-2 mt-4 px-[16px] py-[10px] rounded-md  border-200" />
        </div>

        <div className="pt-8 pl-5 flex items-center gap-5 pb-8">
            <div>
            <a href="/login" className="bg-[#FFD700] text-white px-[44px] py-[8px] custom-class-login-padds rounded-lg hover:text-[#000] 
            w-[30%]">
              Login
            </a>
            </div>

            <div>
            <a  
            onClick={() => showPage("signup")}
            className="bg-[#FFD700] text-white cursor-pointer px-[44px] py-[8px] custom-class-login-padds rounded-lg hover:text-[#000]
             w-[30%]" >
                Sign Up
            </a>
            </div>
        </div>
      </form>  
       </section> : null
         }

         {/* SIGN UP */}

        {
            show === "signup" ? <section className="pt-0  font-[SourceSans3] w-[86%] mt-8 mx-auto h-[230vh] border-[1px]  mb-10
        rounded-sm  sm:h-[235vh] md:h-[175vh] lg:h-[160vh] lg:w-[45%] ">  
            
            <div className="bg-[#FFD700] mt-0 py-2 px-4 font-black text-center">
            <h2 className="text-md text-white text-[20px]">Client Portal Sign Up</h2>
         </div>
      <form action="">
        <div className="pl-4">
            <div className="pt-5">
                <label htmlFor="" className="text-[19px]">Luxus Account Number*</label>
            </div>
            <input 
            type="text" 
            className="w-[65%] px-[9px] py-[3px] border-2 mt-4 rounded-md border-200 
             sm:px-[16px] sm:py-[5px] md:px-[11px] md:py-[6px]" 
            />
        </div>

        <div className="pl-3">
            <div className="pt-4">
                <label htmlFor="" className="text-[19px]">Your Name*</label>
            </div>
           <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
            <div>
            <input 
            type="text" 
            className="w-[40%] border-2 mt-4 px-[9px] py-[3px] rounded-md  border-200 md:py-[9px] md:px-[20px] md:w-[65%]" 
            />
            <div>
            <label htmlFor="" className="text-sm">Prefix</label>
            </div>
            </div>

            <div>
            <input 
            type="text" 
            className="w-[65%] border-2 mt-4 px-[9px] py-[3px] rounded-md  border-200  sm:py-[6px]
            md:py-[9px] md:px-[10px] lg:w-[80%]" />
            <div>
            <label htmlFor="" className="text-sm">First Name</label>
            </div>
            </div>

            <div>
            <input 
            type="text" 
            className="w-[65%] border-2 mt-4 px-[9px] py-[3px] rounded-md  border-200 sm:py-[6px]
             md:py-[9px] md:px-[10px] lg:w-[80%]" />
            <div>
            <label htmlFor="" className="text-sm">Last Name</label>
            </div>
            </div>
           </div>
        </div>

        <div className="pl-4">
            <div className="pt-5">
                <label htmlFor="" className="text-[19px]">Email*</label>
            </div>
            <input 
            type="email" 
            className="w-[65%] px-[9px] py-[3px] border-2 mt-4 rounded-md border-200 
            sm:px-[16px] sm:py-[5px]  md:px-[11px] md:py-[6px] md:w-[80%]" />
        </div>

        <div className="pl-4">
            <div className="pt-5">
                <label htmlFor="" className="text-[19px]">Confrim Email*</label>
            </div>
            <input 
            type="email" 
            className="w-[65%] px-[9px] py-[3px] border-2 mt-4 rounded-md border-200 
            sm:px-[16px] sm:py-[5px]  md:px-[11px] md:py-[6px] md:w-[80%]" />
        </div>

        <div className=" pl-4 pt-8 grid grid-cols-1 gap-2 md:grid-cols-2">
            <div>
            <div>
            <label htmlFor="" className="text-[19px]">Username*</label>
            </div>
            <input 
            type="text" 
            className="w-[65%] px-[9px] py-[3px] border-2 mt-4 rounded-md border-200 
            sm:px-[16px] sm:py-[5px]  md:px-[11px] md:py-[6px] lg:px-[10px] lg:w-[80%]" />
            </div>

            <div className="pt-4 sm:pt-0">
            <div>
            <label htmlFor="" className="text-[19px]">Phone</label>
            </div>
            <input 
            type="text" 
            className="w-[65%] px-[9px] py-[3px] border-2 mt-4 rounded-md border-200 
            sm:px-[16px] sm:py-[5px] md:px-[11px] md:py-[6px] lg:px-[10px] lg:w-[80%]" />
            
            </div>

            <div className="pt-4">
            <div>
            <label htmlFor="" className="text-[19px]">Password*</label>
            </div>
            <input 
            type="password" 
            className="w-[65%] px-[9px] py-[3px] border-2 mt-4 rounded-md border-200 
            sm:px-[16px] sm:py-[5px] md:px-[11px] md:py-[6px] lg:px-[10px] lg:w-[80%]" />
            
            </div>

            <div className="pt-4">
            <div>
            <label htmlFor="" className="text-[19px]">Confirm Password*</label>
            </div>
            <input 
            type="password" 
            className="w-[65%] px-[9px] py-[3px] text-left border-2 mt-4 rounded-md 
            sm:px-[16px] sm:py-[5px]  md:px-[11px] md:py-[6px] lg:px-[10px] lg:w-[80%]" />
            
            </div>
           
           </div>

        <div className="pt-11 pl-5 flex items-center justify-center gap-5 pb-8 ">
            <div>
            <a href="/" className="bg-[#FFD700] text-white px-[24px] font-black py-[14px] rounded-sm hover:text-[#000] w-[30%]">
                Submit Form
            </a>
            </div>
        </div>
      </form>  
       </section> : null
         }
     
       
    </div>
  )
}

export default SignIn
