import {React, useState, useEffect} from 'react'



import logoImg from "../../assets/svg/logo.svg";
import serviceImg from "../../assets/images/service.png";

// Menu Icons
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { CgClose } from "react-icons/cg";

import { NavLink } from "react-router-dom";
import { BsTelephone } from "react-icons/bs";
import { IoIosArrowDropdown } from "react-icons/io";

function Nav(props) {
    const [isActive, setIsActive] = useState(null);
    const [on, setOn] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const header = document.querySelector(".h-ct");
        const contactSection = document.querySelector(".sc-t-h");
        const scrollPos = window.scrollY;
    
        // Calculate the position where the header should become fixed
        const contactSectionTop = contactSection.offsetTop + contactSection.offsetHeight;
    
        if (scrollPos > header.offsetTop && scrollPos < contactSectionTop) {
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
    
    
    
  
    function toggleOn(navLinks) {
      setIsActive(navLinks);
      //  setIsActive(navLinks)
    }
  
    function toggleOff() {
      setIsActive(null);
    }
  
    function toggleNavbar() {
      setOn((prevOn) => !prevOn);
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
            filter: `brightness(.9)`
          }
      }
        className={`h-[${props.height}vh] relative md:bg-${props.bgPosition} sm:h-[130vh] md:h-[115vh] lg:h-[110vh]`}
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

              {/* MOBILE NAVBAR */}
              {on ? (
                <div className= "lg:hidden">
                  <CgClose
                    onClick={toggleNavbar}
                    className="absolute top-6 right-14 z-[999]  text-[#fff] w-[25px] h-[25px] 
                    sm:right-24 sm:top-7 md:right-28 cursor-pointer"
                  />
                  <div
                    className="font-[SourceSans3] fixed top-0 left-0 bottom-0 right-0 z-10 m-auto opacity-95 bg-[#ABAE29] flex
                    flex-col items-center gap-10 pt-16 animation cursor-pointer"
                  >
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
              ) : (
                <div className="lg:hidden">
                  <HiMiniBars3BottomLeft
                    onClick={toggleNavbar}
                    className="absolute top-6 right-14 text-white w-[25px] h-[25px] sm:right-24 sm:top-7"
                  />
                  <div className="hidden"></div>
                </div>
              )}
            </NavLink>

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
        <div className={`text-[#fff] pl-9 pt-6 font-[SourceSans3] sm:pl-14 sm:pt-10  md:pl-20 lg:pl-20 
        md:pt-${props.paddingTopMd}  lg:pt-${props.paddingTopLg}`}>
          <h1 className={`text-[30px] leading-[1.2] w-[85%] lg:w-[${props.tw}%] font-semibold md:text-[50px] `} >
            {props.title}
          </h1>
          <p className={`text-[16px] pt-3 w-[65%] lg:w-[${props.textW}]`}>
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
                className={`py-[6px] w-[60%] uppercase bg-transparent border-2 border-white sm:py-[8px] sm:w-[40%] md:py-[11px] md:w-[25%]
                lg:pt-[10px] lg:w-[20%] rounded text-center ${props.hidden}`}>
                <a href="" className="btn">
                <i className="el">M</i>
                <i className="el">a</i>
                <i className="el">n</i>
                <i className="el">a</i>
                <i className="el">g</i>
                <i className="el">e</i>
                
                <i className="el ml-1">B</i>
                <i className="el">o</i>
                <i className="el">o</i>
                <i className="el">k</i>
                <i className="el">i</i>
                <i className="el">n</i>
                <i className="el">g</i>

               
                </a>
              </li>
              <li
                className="py-[6px] w-[60%] uppercase bg-transparent border-2 border-white sm:py-[8px] sm:w-[40%] md:py-[11px] md:w-[25%] 
                lg:pt-[10px] lg:w-[20%] rounded text-center"
              >
                <a href="" className="btn">
                <i className="el">G</i>
                <i className="el">e</i>
                <i className="el">t</i>

                <i className="el ml-1">A</i>
                <i className="el">n</i>

                <i className="el ml-1">I</i>
                <i className="el">n</i>
                <i className="el">s</i>
                <i className="el">t</i>
                <i className="el">a</i>
                <i className="el">n</i>
                <i className="el">t</i>
                
                <i className="el ml-1">Q</i>
                <i className="el">u</i>
                <i className="el">o</i>
                <i className="el">t</i>
                <i className="el">e</i>
              
                </a>
              </li>
            </ul>
          </nav>
          <div className={`pt-6 underline lg:pt-16 ${props.hidden}`}>
            <a href="#">Track My Vehicle</a>
          </div> 
          <div className={`${props.hidden} grid grid-cols-2 gap-6 sm:grid-cols-3  sm:gap-4 md:gap-24 pt-10 
          md:flex md:justify-start md:flex-row`}>
            <div>
              <h2 className={`${props.hidden} drop-shadow-sm font-black text-[24px] md:leading-[37.8px] md:text-[30.8px]`}>
                2.1m
              </h2>
              <p className={`${props.hidden} mt-1 md:mt-2`}>
                Passengers moved <br /> last year
              </p>
            </div>
            <div>
              <h2 className={`${props.hidden} drop-shadow-sm font-black  text-[24px] md:leading-[37.8px] md:text-[30.8px]`}>
                1,035
              </h2>
              <p className={`${props.hidden} mt-1 md:mt-2`}>Size of fleet</p>
            </div>
            <div>
              <h2 className={`${props.hidden} drop-shadow-sm font-black text-[24px] md:leading-[37.8px] md:text-[30.8px]`}>
                9
              </h2>
              <p className={`${props.hidden} mt-1 md:mt-2`}>
                Offices across <br /> Australia
              </p>
            </div>
            <div>
              <h2 className={`${props.hidden} drop-shadow-sm font-black text-[24px] md:leading-[37.8px] md:text-[30.8px]`}>
                1,052
              </h2>
              <p className={`${props.hidden} mt-1 md:mt-2`}>Chauffeurs / Drivers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nav
