import React from "react";
import Slider from "./Slider";
import sliders from "./sliders";
import NSW from "./NestedRoutes/NSW";
import VIC from "./NestedRoutes/VIC";

import mapImg from '../assets/images/map.png'

import { AiOutlineGlobal } from "react-icons/ai";
import { GiGps } from "react-icons/gi";
import { FaHeadphones } from "react-icons/fa";
import { HiOutlineTrophy } from "react-icons/hi2";
import { BsCalendar2Date } from "react-icons/bs";
import { BsPersonRaisedHand } from "react-icons/bs";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { BsPersonArmsUp } from "react-icons/bs";
import { IoIosArrowDropdown } from "react-icons/io";

import { Outlet } from "react-router-dom";
import { useState } from "react";


// REUSABILITIY
// import ViewMore from "./Reusability/ViewMore";

import driverImg from '../assets/images/driver.png'
import seatsImg from '../assets/images/seats-service.png'
import connectionImg from '../assets/images/connection.png'
import transportImg from '../assets/images/transport-car.png'
import interImg from '../assets/images/inter.png'
import serviceImg from '../assets/images/service.png'

// CONTACT US IMAGES
import mailImg from '../assets/images/mail.png'
import ausImg from '../assets/images/aus.png'
import globalImg from '../assets/images/global.png'


function Main() {

  // Settings 
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
  };
  
  const bgStyles = {
    backgroundImage: `url(${mapImg})`,
    backgroundPosition: `90% 90%`,
    backgroundRepeat: `no-repeat`,
    backgroundSize: `contain`,
    backgroundColor: `rgb(242, 243, 244)`
  }

  const [on, setOn] = useState(false)
  const [display, setDisplay] = useState("nsw")
 
  function toggle(){
    setOn((on) => !on)
  }

  function showLinks(navLink){
    setDisplay(navLink)
  }
 

  return (
    <main>
      {/* FIRST SECTION */}
      <section className="bg-gray-100 p-7 font-[SourceSans3]">
        {/* Edit,refactoring, adjust padding, clean code & creating tailwind custom classes */}
        <div className="text-center pt-8 pb-5">
          <h1 className=" text-[#FFD700] text-[37.4px] leading-[45.9px]">
            At Your Service
          </h1>
          <p className="mt-5 w-4/6 mx-auto  font-extralight">
            When you choose Luxus Wheels, you’re choosing luxury, style, comfort
            and, most importantly, experience. We’ve been moving Australia for
            almost 120 years, and in that time, we’ve learnt how to make it
            memorable. From your friendly driver to your well-appointed vehicle
            and small touches like umbrellas, coffees and local knowledge,
            you’ll know you’re in good hands with Luxus Wheels.
          </p>
        </div>

        <div className="py-16 flex items-center justify-center sm:flex ">
          <div className="flex flex-col grow items-center text-center gap-10">
            <AiOutlineGlobal className="w-[46px] h-[46px] text-[#FFD700] " />
            <h2 className="w-3/4 font-semibold ">
              Australia’s Largest Chauffeur Service
            </h2>
          </div>

          <div className="flex flex-col items-center gap-10">
            <GiGps className="w-[46px] h-[46px] text-[#FFD700]" />
            <h2 className="w-3/4 font-semibold ">
              Full GPS Tracking On Vehicles
            </h2>
          </div>

          <div className="flex  flex-col items-center gap-10">
            <FaHeadphones className="w-[46px] h-[46px] text-[#FFD700]" />
            <h2 className="w-3/4 font-semibold ">
              Here To Help 24 Hours A Day
            </h2>
          </div>

          <div className="flex flex-col items-center gap-10">
            <HiOutlineTrophy className="w-[46px] h-[46px] text-[#FFD700]" />
            <h2 className="w-3/4 font-semibold ">
              Over 115 Years Experience
            </h2>
          </div>

          <div className="flex flex-col items-center gap-10">
            <BsCalendar2Date className="w-[46px] h-[46px] text-[#FFD700]" />
            <h2 className="w-3/4 font-semibold ">
              Large Events & Conferences Experts
            </h2>
          </div>

          <div className="flex flex-col items-center gap-10">
            <BsPersonArmsUp className="w-[46px] h-[46px] text-[#FFD700]" />
            <h2 className="w-3/4 font-semibold">
              Courteous & Reliable Chauffeurs
            </h2>
          </div>
        </div>
      </section>


      {/* Sliders section */}
      <section>
        <div className="text-center pt-16 font-[SourceSans3]">
          <h1 className="w-6/12 mx-auto text-[#FFD700] text-[37.4px] leading-[45.9px] font[Roboto]">
            Moving You In Comfort And Style Wherever You Need To Go
          </h1>
          <p className="pt-7 w-3/5 mx-auto font-extralight  ">
            Whether you are looking to get to and from the airport, rushing
            between business meetings, travelling with the family, or simply
            looking for reliable, comfortable transport for your everyday needs,
            Luxus has you covered. Our fleet of luxury sedans, SUVs, people
            movers, minibuses and coaches and professional, discreet and
            experienced drivers are available nationwide.
          </p>
        </div>

        <div className="p-12 w-full relative ">
          <div>
            <Slider slides={sliders} />
          </div>
        </div>
      </section>

      {/* The third section */}
      <section className="bg-gray-100 pb-28 md:pb-0">
      <div className="text-center pt-11 pb-5 font-[SourceSans3]">
          <h1 className="w-5/6  mx-auto text-[#FFD700] text-[37.4px] leading-[45.9px] md:w-3/6">
            Australia’s Oldest And Only Nationwide Chauffeur Service
          </h1>
          <p className="pt-7 md:w-8/12 mx-auto  font-extralight">
          With offices around Australia, we keep you moving across the country. Alongside our luxury airport and 
          A to B transfers, we offer tour services to see the sights in style, using one of our suggested 
          itineraries or choosing your own adventure.
          </p>
          <p className="pt-3 w-4/6 mx-auto font-extralight">Find out more about our locations and the services on offer.</p>
        </div>

        <div className="pt-10 font-[SourceSans3] md:pt-16">
           <div style={bgStyles} className=" h-[270px]  md:h-[350px]">
               <nav className="flex flex-col pl-16 ">  
                    <div className="flex flex-col items-center md:items-start md:flex-row" >
                     <>
                     <span className="flex items-center gap-2 cursor-pointer md:hidden">
                         { display === "nsw" ? "New South Wales" : display === "vic" ? "Victoria" : display === "qs" ? "Queensland" : "International" }
                        <IoIosArrowDropdown  onClick={() => toggle()}/>
                      </span>
                  
                      <div className={`${on ? "md:block" : "hidden"} list-none md:list-disc md:block`}>
                      <li className={`${display === "nsw" ? "text-sm-crs-pb" : "crs-li"}`}>
                        <span onClick={() => showLinks("nsw")} style={{ borderBottom: display === "nsw" ? "1px solid #FFD700" : "none" }}>
                            New South Wales
                        </span>
                      </li>
            
                        <li className={`${display === "vic" ? "text-sm-crs-pb" : "crs-li"}`}>
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
                      <div className="flex items-center justify-between gap-24 text-[15px] pb:2 list-none md:pb-3  md:justfiy-between md:gap-[450px] md:w-[100%] md:h-[100%] ">
                       <div>
                       <li className="md:pt-2">Bryon Bay</li>
                       </div>
                      
                       <div>
                       <span className="font-semibold underline"><a href="">Read <br className=" md:hidden" /> More</a></span>
                       </div>
                 

                      </div>
                       <hr className="w-[100%] border-[#C1BDBD] mt-2 md:mt-3 md:border-1 md:w-[105%]" />

                       {/* Newcastle */}
                      
                       <div className="flex items-center justify-between gap-24  text-[15px] pb:2 list-none md:pb-3 md:justify-between md:w-[100%] md:h-[105%]" >
                       <div>
                       <li className="md:pt-2">Newcastle</li>
                       </div>

                       <div>
                       <span className="font-semibold underline"><a href="">Read <br className=" md:hidden" /> More</a></span>
                       </div>
                       
                      </div>
                      <hr className="w-[100%] border-[#C1BDBD] mt-1 md:mt-3 md:border-1 md:w-[105%]" />
                       
                      {/* SYDNEY */}

                      <div className="flex items-center justify-between gap-24  text-[15px] pb:2 list-none md:pb-3 md:justify-between md:w-[100%] md:h-[105%]" >
                       <div>
                       <li className="md:pt-2">Sydney</li>
                       </div>

                       <div>
                       <span className="font-semibold underline"><a href="">Read <br className=" md:hidden" /> More</a></span>
                       </div>
                       
                      </div>
                      <hr className="w-[100%] border-[#C1BDBD] mt-1 md:mt-3 md:border-1 md:w-[105%]" />


                    </div>
                   
                   }

                   
                   {/* VICTORIA */}
                   {
                   
                   display === "vic" &&  <div className="mx-auto pt-7  ">
                    <div className="flex items-center justify-between gap-24  text-[15px] pb:2 list-none md:pb-3  md:gap-[490px] md:w-[100%] md:h-[100%] ">
                    <li>Melbourne</li>
                    
                      <div className="self-start md:self-end mx-auto ">
                      <span className="font-semibold underline"><a href="">Read <br className=" md:hidden" /> More</a></span>
                      </div>
                

                    </div>
                      <hr className="w-[100%] border-[#C1BDBD] mt-1 md:mt-3 md:border-1 md:w-[105%]" />
                    
                      </div>
                
                  }

                  {/* Queensland */}

                  {
                   
                   display === "qs" &&  <><div className="mx-auto pt-7  ">
                    <div className="flex items-center justify-between gap-24 text-[15px] pb:2 list-none md:pb-3  md:justfiy-between md:gap-[450px] md:w-[100%] md:h-[100%] ">
                       <div>
                       <li className="md:pt-2">Brisbane</li>
                       </div>
                      
                       <div>
                       <span className="font-semibold underline"><a href="">Read <br className=" md:hidden" /> More</a></span>
                       </div>
                 

                      </div>
                      <hr className="w-[100%] border-[#C1BDBD] mt-2 md:mt-3 md:border-1 md:w-[105%]" />
                   

                      <div className="flex items-center justify-between gap-24 ] text-[15px] pb:2 list-none md:pb-3  md:justfiy-between md:gap-[410px] md:w-[100%] md:h-[100%] ">
                       <div>
                       <li className="md:pt-2">Sunshine Coast</li>
                       </div>
                      
                       <div>
                       <span className="font-semibold underline"><a href="">Read <br className=" md:hidden" /> More</a></span>
                       </div>
                 

                      </div>
                       <hr className="w-[100%] border-[#C1BDBD] mt-2 md:mt-3 md:border-1 md:w-[105%]" />

                       <div className="flex items-center justify-between gap-24  text-[15px] pb:2 list-none md:pb-3  md:justfiy-between md:gap-[434px] md:w-[100%] md:h-[100%] ">
                       <div>
                       <li className="md:pt-2">Gold Coast</li>
                       </div>
                      
                       <div>
                       <span className="font-semibold underline"><a href="">Read <br className=" md:hidden" /> More</a></span>
                       </div>
                 

                      </div>
                       <hr className="w-[100%] border-[#C1BDBD] mt-2 md:mt-3 md:border-1 md:w-[105%]" />
                    
                    </div>

                    

                    
                    
                    </>
                
                  }
                  {/* INTERNATIONAL */}
                  
                  {
                   
                   display === "int" &&  <div className="mx-auto pt-7  ">
                    <div className="flex items-center justify-between gap-24  text-[15px] pb:2 list-none md:pb-3  md:gap-[490px] md:w-[100%] md:h-[100%] ">
                    <li>International</li>
                    
                      <div className="self-start md:self-end mx-auto ">
                      <span className="font-semibold underline"><a href="">Read <br className=" md:hidden" /> More</a></span>
                      </div>
                

                    </div>
                      <hr className="w-[100%] border-[#C1BDBD] mt-1 md:mt-3 md:border-1 md:w-[105%]" />
                    
                      </div>
                
                  }
                   
           </div>
          </nav>

           </div>
        </div>
      </section>
       
       {/* FIFTH SECTION */}

      <section className="pt-16">
         <div className="flex items-start ">
          <div className="text-center">
          <h1 className="w-[50%] mx-auto text-[37.4px] pl-3 leading-[45.9px] font-[SourceSans3] text-[#FFD700] ">Your Luxus Driver: Professional, Experienced, Courteous And Discreet</h1>
          <div className="mt-5 mx-auto pt-[10px] p-r[40px] uppercase font-[Roboto] text-white pb-[10px] pl[10px] bg-blue-500 w-1/4 rounded-sm text-center">
            book now
          </div>
          
          </div>
           <p className="pt-7 w-8/12 mx-auto  font-extralight">We handpick our drivers for their exemplary driving records, experience with luxury service and 
            commitment to customer service and safety. Your Hughes driver will tailor your experience to your needs, whether 
            that’s  sharing local knowledge or giving you the privacy, peace and quiet to relax in comfort and style.
            </p>
         </div>
         
         <div className="mt-11 grid-layout-cols object-cover  border-red-700 border-1">
             <div className=" grid-col-2 grid-row-2 relative">
               <img src={driverImg} className="w-[95%] h-svh bg-container" alt="driver" />
               {/* <span className="bg-text">Hover Text</span> */}
               {/* <h2 className="hidden  hover:block  absolute top-64 left-40 text-red-800 capitalize ">Book now</h2> */}
             </div>
             <div>
              <img src={seatsImg} className="w-full h-72 hover:bg-opacity-10" alt="" />
             </div>
             <div> 
              <img src={connectionImg} alt="" className="w-full h-72" />
             </div>
             <div>
              <img src={transportImg} alt="" className="w-full h-72" />
             </div>

             <div>
              <img src={interImg} alt="" className="w-full h-60" />
             </div>

             <div className="grid-col-3 grid-row-3">
               <img src={serviceImg} alt="" className="w-full h-60" />
             </div>
         </div>
      </section>

      {/* The fifth section */}
       <section className="mt-0">
          <div className={`bg-[url(https://www.hughes.com.au/wp-content/uploads/2023/01/cta-bg.png)]  bg-blue-900 text-white bg-cover bg-center object-cover h-64`}>
            <h2 className="text-center font-semibold font[Roboto] text-white text-[37.4px] leading-[45.9px]">Make Your Next Journey Stress-Free  </h2>
            <h2 className="text-center font-semibold font[Roboto] text-white text-[37.4px] leading-[45.9px]">With Luxus</h2>
            <p className="mt-10 text-center">Experience the Hughes difference and take your next journey in comfort and style. Book your car today.</p>
          <div className="mt-11 mx-auto pt-[10px] pr-[10px] capitalize font-[Roboto] text-white pb-[10px] pl[10px] bg-black w-[12%] rounded-sm text-center">  
             <a href="#">Book now</a>
          </div>
          </div>
       </section>

         {/* The fifth section */}
         <section className="bg-gray-100 mt-0 p-20 ">
            <div className="text-center">
               <h1 className="font[Roboto] font-semibold text-[#082567] text-[37.4px] leading-[45.9px]">FAQ</h1>
            </div>
            {
              on ?  <div className="flex flex-col items-center justify-center pt-7  ">
              <div className="w-10/12 py-7 px-4 bg-white text-center shadow-lg transition-all ease-in"> 
              <div className="flex items-center gap-24">
                <p className="font[Roboto] text-[#CD7F32]  cursor-pointer hover:text-[#CD7F32]  font-semibold text-[25px] leading-[45.9px]">What Is The Seating Capacity Of Your Chauffeured Cars?</p>
                <AiOutlineMinusCircle  onClick={toggle} className="cursor-pointer text-[#CD7F32] w-[30px] h-[30px]  hover:text-[#888]" />
              </div>
             <p className="text-center pt-6 pb-10 text-sm "> At Luxus, we demand the best for our customers and to deliver this, we offer a wide variety of vehicles –
               each of which can take a varying number of passengers. Our standard luxury and premium sedans can 
               cater for up  to 4 passengers, our luxury people movers and our stretch limousines can cater for up 
               to 12 passengers and for those travelling in a large group, we offer a coach service for up to 54 
               passengers.</p>
            </div> 
            </div> : <div className="flex items-center justify-center flex-col pt-7 ">
              <div className="flex items-center gap-24 ">
                <p className="font[Roboto] text-[#15093E] cursor-pointer hover:text-[#CD7F32]  font-semibold text-[25px] leading-[45.9px]">What Is The Seating Capacity Of Your Chauffeured Cars?</p>
                <AiOutlinePlusCircle  onClick={toggle} className="cursor-pointer hover:text-[#CD7F32] w-[30px] h-[30px]  text-[#888]" />
              </div>
              <div className="w-[765px]  mx-auto">
              <hr className="h-[2px] bg-gray-200 mt-6" /> 
              </div>
              {/* <a href="">VIEW ALL FAQ'S</a> */}
            </div> 
            }
         </section>

         {/* Contact us */}
         <section className="contact-us">
         <div className={`bg-[url(https://images.pexels.com/photos/7877126/pexels-photo-7877126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)] bg-cover bg-right h-svh relative`}>
         <div className="w-[520px] h-[720px]  bg-white absolute bottom-14 right-8 ">
              <h1 className="text-center pt-10 font[Roboto] text-[#15093E] font-semibold text-[25px] leading-[45.9px]">Questions? We’re Here To <span className="block">Help!</span></h1>
              <p className="text-sm text-center pt-3">Our friendly Customer Service Team is on hand 24/7 to answer enquiries 
              <br /> and keep you moving. You can contact us directly on 1300 615 165, at <span className="text-[#CD7F32] ">res@Luxus.com.au</span> or leave your 
              details below, and  we’ll be in  touch.</p>
         <div className="flex justify-center gap-5  pt-10 pl-2 pr-6 text-center text-[#888] text-[14px]">
            <div>
              <h3 className="pb-3">For email enquiries</h3>
              <div className="pl-6 flex items-center gap-2">
                <img src={mailImg} alt="" className="w-[35px]" />
                <a href="#" className="text-[#CD7F32] hover:text-[#694EEF]">res@luxus.com.au</a>
              </div>
            </div>
            <div>
              <h3 className="w-11/12">For enquiries within Australia</h3>
              <div className="pt-3 pl-7 flex items-center gap-2">
                <img src={ausImg} alt="" className="w-[35px]" />
                <a href="#" className="text-[#CD7F32] hover:text-[#694EEF]">1300 625 195</a>
              </div>
            </div>
            <div>
              <h3 className="pb-3">For global enquiries</h3>
              <div className="flex items-center gap-2">
                <img src={globalImg} alt="" className="w-[35px]" />
                <a href="#" className="text-[#CD7F32] hover:text-[#694EEF]">+61 2 9317 9000</a>
              </div>
            </div>
         </div>
         {/* Form section */}
         <form action="" className="mt-10 pl-10 pr-3 grid grid-cols-2 gap-3 justify-items-center">
         <div>
           <label htmlFor="">First Name *</label>
            <input type="text" name="" className="mt-3 text-[14px] bg-[rgba(0, 0, 0, .04)] rounded-sm border-2 border-[solid] p-[10px]  w-[100%] font-black leading-[20px] text-[#555] bg-[#f1f1f1] border-none " />
           </div>
           <div>
           <label htmlFor="">Last Name *</label>
            <input type="text" name="" className=" mt-3 text-[14px] bg-[rgba(0, 0, 0, .04)] rounded-sm border-2 border-[solid] p-[10px]  w-[100%] leading-[20px] text-[#555] bg-[#f1f1f1] border-none " />
           </div>

           <div>
           <label htmlFor="">Contact Number *</label>
            <input type="text" name="" className=" mt-3 text-[14px] bg-[rgba(0, 0, 0, .04)] rounded-sm border-2 border-[solid] p-[10px] w-[100%] leading-[20px] text-[#555] bg-[#f1f1f1] border-none " />
           </div>

           <div>
           <label htmlFor="">Email Address *</label>
            <input type="text" name="" className=" mt-3 text-[14px] bg-[rgba(0, 0, 0, .04)] rounded-sm border-2 border-[solid] p-[10px] w-[100%] leading-[20px] text-[#555] bg-[#f1f1f1] border-none " />
           </div>

           <div>
           <label htmlFor="">Subject</label>
            <input type="text" name="" className=" mt-3 text-[14px] bg-[rgba(0, 0, 0, .04)] rounded-sm border-2 border-[solid] p-[10px] w-[100%] leading-[20px] text-[#555] bg-[#f1f1f1] border-none " />
           </div>

           {/* <div></div> */}
           <div className="col-auto">
           <label htmlFor="">Message</label>
            <textarea type="text" name="" className=" mt-3 font-[poppins] text-[14px] bg-[rgba(0, 0, 0, .04)] font-medium rounded-sm border-2 border-[solid] p-[10px] w-[100%] leading-[20px] text-[#555] bg-[#f1f1f1] border-none " />
           </div>

           <div className="mx-auto">
            <input type="submit" name="" className=" bg-[#2A4783] cursor-pointer font-bold text-[18px] py-[15px] text-white px-[22px] rounded text-center border-none " />
           </div>
         </form>
         </div>
       </div>
         </section>
    </main>
  );
}

export default Main;
