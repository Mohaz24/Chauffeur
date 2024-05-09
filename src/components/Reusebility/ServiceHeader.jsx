import {React, useState, useEffect} from 'react'

// LOGO
import logoImg from "../../assets/svg/logo.svg";


// Menu Icons
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { CgClose } from "react-icons/cg";

import { NavLink } from "react-router-dom";
import { BsTelephone } from "react-icons/bs";


   
  

function ServiceHeader(props) {
    const [on, setOn] = useState(false);

  
    useEffect(() => {
      const handleScroll = () => {
        const header = document.querySelector(".h-ct");
        const scrollPos = window.scrollY;
        console.log(scrollPos);
    
        // Define the specific Y position where the header should stop being fixed
        const fixedLimit = 6168;
    
        if (scrollPos > header.offsetTop && scrollPos < fixedLimit) {
          header.classList.add("fixed", "fixed-bg", "fixed-txt");
        } else {
          header.classList.remove("fixed", "fixed-bg", "fixed-txt");
        }
      };
    
      window.addEventListener("scroll", handleScroll);
    
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
  
    function toggleNavbar(toggle) {
      setOn(toggle);
    }

  return (
    <div>
       <div
        style={
          {
            background: `url(${props.url})`,
            backgroundPosition: `${props.bgPosition}`,
            backgroundSize: 'cover',
            objectFit: 'cover',
          }
      }
        className={`h-[107vh] relative  md:bg-${props.bgPosition}  sm:h-[95vh] md:h-[110vh] lg:h-[115vh]`}
      >
        <div className="bg-[#fff] p-2 bg-opacity-10 md:bg-[#EBE9E9] md:bg-opacity-25 font-[SourceSans3]">
          <nav>
            <ul className="hidden items-center justify-end gap-5 text-white text-[16px] md:flex md:flex-row lg:pr-11">
               <li>
              <NavLink
               to="/join"
               className={({isActive})  => isActive ? "active-links" : ""}
               >
                Join The Fleet
              </NavLink>
              </li>
              <li>
              <NavLink
               to="/accounts"
               className={({isActive})  => isActive ? "active-links" : ""}
               >
               Accounts
              </NavLink>
              </li>
              <li>
              <NavLink
               to="/login"
               className={({isActive})  => isActive ? "active-links" : ""}
               >
               Log in
              </NavLink>
              </li>
              
              <div className="flex items-center gap-1">
                <BsTelephone className="self-center" />
                <li>
                  <a href="#"> 1300 615 164</a>
                </li>
              </div>
            </ul>
          </nav>
        </div>

        {/* Navbar */}
        <nav className="h-ct">
          <div className="flex items-center gap-10 justify-start pt-2 pb-7 pl-4 relative sm:pl-10 md:pl-16 ">
            <NavLink to="/" className={`flex items-end gap-0 ${(isActive) =>
                    isActive ? "" : ""}`}>
              <img className="h-[60px] md:h-[70px]" src={logoImg} alt="" />
              <div className="text-[#FFD700] font-[Orbitron] ">
                <hr />
                <h2 className="md:text-[20px] pt-1 pb-1 uppercase">
                  Luxus Chauffeur
                </h2>
                <hr className="border-[1px] bg-[black] round-xs" />
                <p className="text-xs">Australia's Chauffeur Service</p>
              </div>
            </NavLink>

              {/* MOBILE NAVBAR */}
              {on === "open" ? (
                 <>
                  <div
                    className="font-[SourceSans3] fixed top-0 left-0 bottom-0 right-0 z-10 m-auto opacity-95 bg-[#ABAE29] flex
                    flex-col items-center gap-10 pt-16 animation cursor-pointer lg-hidden"
                  >
                  <div className= "lg:hidden">
                  <CgClose
                    onClick={() => toggleNavbar("close")}
                    className={`absolute top-6 right-14  text-[#fff] w-[25px] h-[25px] 
                    sm:right-24 sm:top-7 md:right-28 cursor-pointer`}
                  />
                    <ul className="flex flex-col items-center gap-2 text-[#fff] text-[18px] z-10">
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
                    className="absolute top-6 right-14 z-[999] cursor-pointer text-white w-[25px] h-[25px] sm:right-24 sm:top-7"
                  />
                  <div className="hidden"></div>
                </div>
              )}

            <>
              <div className="text-white  lg:text-xl hover:underline hidden lg:flex ">
                <NavLink
                  to="/airportTransfers"
                  className={({isActive})  => isActive ? "active-links" : ""}
                >
                  <a  className="font-[SourceSans3]">
                     Airport <br /> Transfers
                  </a>
                </NavLink>
              </div>

              <div className="text-white text-xl hover:underline hidden lg:flex ">
                <NavLink
                  to="/locations"
                  className={({isActive})  => isActive ? "active-links" : ""}
                >
                  <a  className="font-[SourceSans3]">
                     Locations
                  </a>
                </NavLink>
              </div>

              <div className="text-white text-xl hover:underline hidden lg:flex ">
                <NavLink
                  to="/services"
                  className={({isActive})  => isActive ? "active-links" : ""}
                >
                  <a  className="font-[SourceSans3]">
                    Services
                  </a>
                </NavLink>
              </div>
              <div className="text-white text-xl hover:underline hidden lg:flex ">
                <NavLink
                  to="/fleet"
                  className={({isActive})  => isActive ? "active-links" : ""}
                >
                  <a  className="font-[SourceSans3]">
                     The <br /> Fleet
                  </a>
                </NavLink>
              </div>


              <div className="text-white text-xl hover:underline hidden lg:flex ">
                <NavLink
                  to="/about"
                  className={({isActive})  => isActive ? "active-links" : ""}
                >
                  <a  className="font-[SourceSans3]">
                     About <br /> Us
                  </a>
                </NavLink>
              </div>

              <div className="text-white text-xl hover:underline hidden lg:flex ">
                <NavLink
                  to="/contact"
                  className={({isActive})  => isActive ? "active-links" : ""}
                >
                  <a  className="font-[SourceSans3]">
                     Contact <br /> Us
                  </a>
                </NavLink>
              </div>
             
              <div className="bg-transparent rounded-sm font-[SourceSans3] h-[47px] w-24 pl-3 border-white 
              border-[2px] text-start cursor-pointer hidden lg:flex">
                <NavLink
                  to="/book"
                >
                 <a  className="opacity-1 text-white">
                  Book <br /> <span className="">Now</span>
                </a>
                </NavLink>
              </div>
            </>
          </div>
        </nav>
        <div className={`text-[#fff] pl-9 pt-10 font-[SourceSans3] sm:pl-14 md:pl-20 lg:pl-20 sm:pt-10 
        md:pt-14  lg:pt-11`}>
          <h1 className={`text-[30px] leading-[1.2] w-[85%] lg:w-[${props.tw}%] font-semibold md:text-[50px] `} >
            {props.title}
          </h1>
          <p className={` text-[16px] pt-3 w-[65%]  sm:text-[18px] lg:w-[45%]`}>
            {props.text}
          </p>
          <nav>
            <ul className="flex flex-col gap-4 font-normal pt-10 sm:pt-6 md:pt-10 md:flex-row md:items-center">
            <li className="py-[6px] w-[55%] uppercase bg-[#FFD700] sm:py-[9px] sm:w-[35%] md:py-[12px] md:w-[20%] 
              lg:pt-[10px] lg:w-[15%] rounded text-center">
                <a href="" className="btn">
                <i className="el">B</i>
                <i className="el">o</i>
                <i className="el">o</i>
                <i className="el">k</i>

                <i className="el ml-1">N</i>
                <i className="el">o</i>
                <i className="el">w</i>
                </a>
              </li>
              <li
                className="py-[6px] w-[60%] uppercase bg-transparent border-2 border-white sm:py-[8px] sm:w-[40%] md:py-[11px] md:w-[25%] 
                lg:pt-[10px] lg:w-[20%] rounded text-center"
              >
                <a href="" className="btn">
                <i className="el">{props.i}</i>
                <i className="el">{props.n}</i>
                <i className="el">{props.s}</i>
                <i className="el">{props.t}</i>
                <i className="el">{props.a}</i>
                <i className="el">{props.nx}</i>
                <i className="el">{props.nt}</i>

                <i className="el ml-1">{props.q}</i>
                <i className="el">{props.u}</i>
                <i className="el">{props.o}</i>
                <i className="el">{props.qt}</i>
                <i className="el">{props.e}</i> 
                </a>
              </li>
            </ul>
          </nav>
        </div>
        </div>
    </div>
  )
}

export default ServiceHeader
