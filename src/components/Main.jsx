import {React,  useState } from "react";


import Carousel from 'react-grid-carousel'
import "react-multi-carousel/lib/styles.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader



import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineMinusCircle } from "react-icons/ai";




// FILES
import Map from "./Reusebility/Map";
import Form from "./Reusebility/Form";




import {sliderImages1, sliderImages2} from "./sliders"


import mapImg from '../assets/images/map.png'

import driverImg from '../assets/images/driver.png'
import seatsImg from '../assets/images/seats-service.png'
import connectionImg from '../assets/images/connection.png'
import transportImg from '../assets/images/transport-car.png'
import interImg from '../assets/images/inter.png'
import serviceImg from '../assets/images/service.png'


function Main() {

  const [on, setOn] = useState(false)
  const [show, setShow] = useState("null")
  const [sliders1, setSliders1] = useState(sliderImages1)
  const [sliders2, setSlider2] = useState(sliderImages2)

  const toggleOn = (id) => {
    setSliders1((prevImages) => {
        return prevImages.map((items) => {
            return items.id === id ? {...items, isTrue: true} : items
        })
    })
}

const toggleOff = (id) => {
  setSliders1((prevImages) => {
        return prevImages.map((items) => {
            return items.id === id ? {...items, isTrue: false} : items
        })
    })
}

function showPaymentDetails(navLink){
  setShow(navLink)
}
  
  const bgStyles = {
    backgroundImage: `url(${mapImg})`,
    backgroundPosition: `90% 90%`,
    backgroundRepeat: `no-repeat`,
    backgroundSize: `contain`,
    backgroundColor: `rgb(242, 243, 244)`
  }


  
  // Slider1 settings
  var settings1 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
}
  


  // Slider2 settings
  var settings2 = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
}


// Slider 1
const slideShow1 = sliders1.map((slide) => {
  const sldImg = {
        background: `url(${slide.url})`,
        width: '80%',
        height: '75vh',
        backgroundPosition: 'center',
        borderRadius: '10px',
        backgroundSize: 'cover',
        objectFit: 'cover',
        padding: '100px',
        // filter: slide.isTrue ? `brightness(.4)` : ``,
        // opacity: 10
  }
     return <div className="relative font-[SourceSans3] cursor-pointer">
     <Carousel className="w-[100%]"
       cols={4}
       gap={9}
        >
      <Carousel.Item>
      <div style={sldImg} className="darbg-1">
      <div onMouseEnter={() => toggleOn(slide.id)} onMouseLeave={() => toggleOff(slide.id)} className="">
        {
          slide.isTrue ? <div className="flex flex-col items-start absolute top-20 left-3 bottom-0 z-10 opacity-100 darkbg font-semibold">
          <img src={slide.icon} alt="icons"className="w-[50px] h-[50px]" />
          <h3 className="pt-4 text-[#FFD700] text-lg darkbg-text opacity-8 drop-shadow-xl bg-blend-difference ">{slide.title}</h3>
          <p className="w-48 pt-4 darkbg-text text-md text-[#E3E9F1] opacity-8 drop-shadow-xl bg-blend-difference "> {slide.text} </p>
          </div>
          :  <div className="absolute top-64 left-5 bottom-0">
           <img src={slide.icon} alt="icons"className="w-[50px] h-[50px]" />
          <h3 className="text-center pt-4 text-[#FFD700] text-sm md:text-lg">{slide.title}</h3>
          </div>
        }
      </div>
    </div>
    </Carousel.Item>
        </Carousel>
   
 </div>
})



const MyDot = ({ isActive }) => (
  <span
    style={{
      display: 'inline-block',
      height: isActive ? '10px' : '6px',
      width: isActive ? '10px' : '6px',
      background: '#FFD700',
      marginTop: '3rem',
      borderRadius: '50px',
      cursor: 'pointer'
    }}
  ></span>
)

  return (
    <main>

      {/* SLIDERS SECTION */}
      <section className="pb-16">
        <div className="text-center pt-16 font-[SourceSans3]">
          <h1 className="w-4/6 mx-auto font-black text-[#FFD700] text-[37.4px] leading-[45.9px] font[Roboto] md:w-6/12">
            Moving You In Comfort And Style Wherever You Need To Go
          </h1>
          <p className="pt-7 w-3/5 mx-auto font-extralight">
            Whether you are looking to get to and from the airport, rushing
            between business meetings, travelling with the family, or simply
            looking for reliable, comfortable transport for your everyday needs,
            Luxus has you covered. Our fleet of luxury sedans, SUVs, people
            movers, minibuses and coaches and professional, discreet and
            experienced drivers are available nationwide.
          </p>
        </div>

       {/* SLIDER */}
        <div className="p-12 mt-5 opacity-1">
        <Carousel className="" 
              cols={4}
              gap={10}
              hideArrow={true}
              showDots={true}
              loop={'Infinite'}
              dot={MyDot}
              responsiveLayout= {[
                {
                  breakpoint: 700,
                  cols: 4,
                  rows: 1,
                  gap: 10,
                }
              ]}
           >
          {
            sliders1.map((slide) => {
              const sldImg = {
                background: `url(${slide.url})`,
                width: '95%',
                height: '70vh',
                backgroundPosition: 'center',
                borderRadius: '10px',
                backgroundSize: 'cover',
                objectFit: 'cover',
                padding: '100px',
                filter: slide.isTrue ? `brightness(.8)` : ``,
                color: 'white',
                textShadow: '0px 0px 4px #fff 0',
                opacity: 2
          }
         return <Carousel.Item>
                 <div className="relative font-[SourceSans3] cursor-pointer">
                 <div style={sldImg} className="darbg-1 w-[95%] h-[70vh] bg-center">
      <div onMouseEnter={() => toggleOn(slide.id)} onMouseLeave={() => toggleOff(slide.id)} className="">
        {
          slide.isTrue ? <div className="flex flex-col items-start absolute top-20 left-3 bottom-0 z-10 opacity-100 darkbg font-semibold">
          <img src={slide.icon} alt="icons"className="w-[50px] h-[50px]" />
          <h3 className="pt-4 text-[#FFD700] text-lg  opacity-8 drop-shadow-xl bg-blend-difference ">{slide.title}</h3>
          <p className="w-48 pt-4  text-md text-[#E3E9F1] opacity-8 drop-shadow-xl bg-blend-difference "> {slide.text} </p>
          </div>
          :  <div className="absolute top-64 left-5 bottom-0">
           <img src={slide.icon} alt="icons"className="w-[50px] h-[50px]" />
          <h3 className="text-center pt-4 text-[#FFD700] text-sm md:text-lg">{slide.title}</h3>
          </div>
        }
      </div>
    </div>
    </div>
  
        </Carousel.Item>
            })
          }
        </Carousel>
        </div>
      </section>

      {/* MAP SECTION */}
       <section>
          <Map 
          title="Australia’s Oldest And Only Nationwide Chauffeur Service" 
          text="With offices around Australia, we keep you moving across the country. Alongside our luxury airport and 
          A to B transfers, we offer tour services to see the sights in style, using one of our suggested 
          itineraries or choosing your own adventure."
          subtitle="Find out more about our locations and the services on offer."
          />
       </section>
       
       {/* NEWSLETTER SECTION */}

      <section className="pt-16 font-[SourceSans3] ">
         <div className="flex flex-col items-start justify-center md:flex-row ">
          <div>
          <h1 className="w-[90%] text-[37.4px] pl-14 leading-[45.9px] font-[SourceSans3] text-[#FFD700] font-black">
            Your Luxus Driver: Professional, Experienced, Courteous And Discreet
          </h1>
          <div className="mt-9 ml-14 pt-[10px] p-r[40px] uppercase font-[SourceSans3] text-white pb-[10px]  
          cursor-pointer pl-[10px] bg-[#FFD700] w-[35%] rounded-sm text-center">
            <a href="/book" className="btn">
            <i className="el">B</i>
            <i className="el">o</i>
            <i className="el">o</i>
            <i className="el">k</i>

            <i className="el ml-1">N</i>
            <i className="el">o</i>
            <i className="el">w</i>
            </a>
          </div>
          
          </div>
            <div>
            <p className="pt-6 pl-14 w-10/12 text-[15px] font-extralight leading-24 md:pt-2 ">We handpick our drivers for their exemplary 
            driving records, experience with  luxury service and commitment to customer service and safety. Your Luxus driver will  
            tailor your experience to your needs,  whether that’s  sharing local knowledge or giving you the privacy, peace and quiet to relax in 
            comfort and style. </p>
            </div>
         </div>
        
        {/* CHAUFFUAR SERVICES  */}
        <div className="hidden lg:grid">
        <div className="mt-11 grid-layout-cols cursor-pointer lg:grid">
             <div className="grid-col-3 grid-row-2">
               <img src={driverImg} className="h-svh bg-container object-cover dark relative  cursor-pointer" alt="driver" />
               <h2 className="absoulte top-0 left-0 text-white text-lg opacity-90">Book Now</h2>
             </div>
             <div>
              <img src={seatsImg} className="h-72 hover:bg-opacity-10 object-cover" alt="customer" />
             </div>
             <div> 
              <img src={connectionImg} alt="airline-services" className="h-72 object-cover" />
             </div>
             <div>
              <img src={transportImg} alt="fleet" className="h-72 object-cover" />
             </div>

             <div>
              <img src={interImg} alt="luxury-experience" className="h-60  object-cover" />
             </div>

             <div className="grid-col-3 grid-row-3">
               <img src={serviceImg} alt="chauffuer-services" className="h-60  w-full object-cover" />
             </div>
         </div>
        </div>
         
         <div  className="lg:hidden mt-20"> 
         <Carousel className="" 
              cols={4}
              hideArrow={true}
              loop={'Infinite'}
              responsiveLayout= {[
                {
                  breakpoint: 800,
                  cols: 1,
                  rows: 1,
                  gap: 10,
                },
                {
                  breakpoint: 500,
                  cols: 1,
                  rows: 1,
                  gap: 10,
                }
              ]}
              
           >
          {
            sliders2.map((slide) => {
           return <Carousel.Item>
          <div className="font-[SourceSans3] cursor-pointer font-black w-full">
          <div className="flex flex-col items-start">
            <img src={slide.url} alt="images"  className="w-full h-[70vh] object-cover" />
            <h3 className="pt-4 text-[#FFD700]">{slide.title}</h3>
            </div>
           </div>
        </Carousel.Item>
            })
          }
        </Carousel>
         </div>
       
      </section>

      {/* The fifth section */}
       <section className="mt-0 font-[SourceSans3]">
            <div className={`bg-[url(https://www.luxcar.com.au/DynamicImages/Blog/1022/parcel-delivery.jpg)] mt-24 bg-[#151515] text-white
             bg-cover bg-bottom object-cover h-[80vh] sm:h-[70vh] md:h-[65vh]`}>
            <div className="pt-11 sm:pt-5">
              <h2 className="text-center font-black w-3/6  mx-auto  text-[#FFD700] text-[25px] leading-[45.9px] md:pt-16 md:text-[37.4px]">
                Make Your Next Journey Stress-Free With Luxus
              </h2>
              <p className="mt-5 text-center ">Experience the Luxus difference and take <br className="md:hidden" /> your next journey in comfort and 
              style. Book <br className="md:hidden" /> your car today.</p>
            <div className="mt-11 mx-auto pt-[10px] pr-[10px] capitalize font-[SourceSans3] text-white pb-[10px] pl[10px] bg-[#FFD700] w-[30%] 
            rounded-sm text-center sm:w-[20%] md:w-[15%]">  
              <a href="/book" className="btn">
                <i className="el">B</i>
                <i className="el">o</i>
                <i className="el">o</i>
                <i className="el">k</i>

                <i className="el ml-1">N</i>
                <i className="el">o</i>
                <i className="el">w</i>
              </a>
            </div>
            </div>
          </div>
       </section>

         {/* FAQ */}
         <section className="bg-gray-100 mt-0 p-20  ">
            <div className="text-center">
               <h1 className="font-[SourceSans3] font-semibold text-[#FFD700] text-[37.4px] leading-[45.9px]">FAQ</h1>
            </div>
            {
              show === "cap" ?  <div className="flex items-center justify-between pt-4 font-[SourceSans3]">
              <div className="w-full mx-auto py-5 px-4 bg-white text-start shadow-xl transition-all ease-in sm:w-10/12 md:text-center md:w-9/11 "> 
              <div className="flex items-center justify-between">
                <h2 className="text-[#FFD700] w-2/4 cursor-pointer hover:text-[#FFD700] text-[20px] font-semibold sm:w-2/3 
                md:text-[25px] md:leading-[45.9px] md:w-[63%] lg:w-auto">
                  What Is The  Seating  Capacity Of  Your  Chauffeured  Cars?</h2>
                <AiOutlineMinusCircle  onClick={() => showPaymentDetails(null)} className="cursor-pointer text-[#FFD700] w-[30px] h-[30px]  hover:text-[#000]" />
              </div>
             <p className="text-start pt-6 pb-10 text-sm"> At Luxus, we demand the best for our customers and to deliver this, we offer a 
               wide variety of vehicles – each of which can <br className="hidden lg:block" /> take a varying number of passengers. Our standard luxury and premium sedans can 
               cater for up  to 4 passengers, our luxury people movers and our stretch limousines can cater for up 
               to 12 passengers and for those travelling in a large group, we offer a coach service for up to 54 
               passengers.</p>
            </div> 
            </div> : <div className="pt-11 w-10/12 mx-auto">
                  <div className="font-[SourceSans3] flex justify-between items-center gap-5 sm:gap-0">
                      <h2 className=" text-[#000] text-start cursor-pointer hover:text-[#FFD700]  font-semibold text-[20px] md:text-[25px]  
                      md:leading-[45.9px]">
                        What Is The Seating Capacity Of Your Chauffeured Cars?
                      </h2>
                    <div>
                    <AiOutlinePlusCircle onClick={() => showPaymentDetails("cap")} className="cursor-pointer text-[000] w-[30px] h-[30px]
                      sm:w-[40px] sm:h-[40px] md:w-[42px] md:h-[42px] hover:text-[#FFD700]"  />
                    </div>
                    </div>
              <hr className=" border-[#C1BDBD] mt-1 md:mt-3 md:border-[1.1px] md:w-[100%] md:mx-auto" />
            </div>
            }
            {/* PAY PAYMENT */}
            {
              show === "pay" ?  <div className="flex items-center justify-between pt-4 font-[SourceSans3] ">
              <div className="w-full mx-auto py-5 px-4 bg-white text-start shadow-xl transition-all ease-in sm:w-10/12 md:text-center md:w-9/11"> 
              <div className="flex items-center justify-between">
                <h2 className="text-[#FFD700] w-2/4 cursor-pointer hover:text-[#FFD700] text-[20px] font-semibold sm:w-2/3 
                md:text-[25px] md:leading-[45.9px] md:w-[40%] lg:w-auto">
                How Can I Pay For A Chauffeured Car From Luxus?</h2>
                <AiOutlineMinusCircle  onClick={() => showPaymentDetails(null)} className="cursor-pointer text-[#FFD700] w-[30px] h-[30px]  hover:text-[#000]" />
              </div>
             <p className="text-start pt-6 pb-10 text-sm"> To provide the best, most convenient service for our customers, we offer variety of 
             payment options including credit card, cash and  corporate accounts. Our corporate accounts are typically paid monthly and can be 
             set up  through our website and offer generous corporate rates.</p>
            </div> 
            </div> : <div className="pt-11 w-10/12 mx-auto">
                  <div className="font-[SourceSans3] flex justify-between items-center gap-5 sm:gap-0">
                      <h2 className=" text-[#000] text-start cursor-pointer hover:text-[#FFD700]  font-semibold text-[20px] md:text-[25px]  
                      md:leading-[45.9px]">
                       How Can I Pay For A Chauffeured Car From Luxus?
                      </h2>
                      <div>
                      <AiOutlinePlusCircle onClick={() => showPaymentDetails("pay")} className="cursor-pointer text-[000] w-[30px] h-[30px]
                        sm:w-[40px] sm:h-[40px] md:w-[42px] md:h-[42px] hover:text-[#FFD700]"  />
                    </div>
                    </div>
              <hr className=" border-[#C1BDBD] mt-1 md:mt-3 md:border-[1.1px] md:w-[100%] md:mx-auto" />
            </div>
            }

           {/* CANCEL PAYMENT */}
           
          { show === "cancell" ?  <div className="flex items-center justify-between pt-4 font-[SourceSans3] t-s-e">
              <div className="w-full mx-auto py-5 px-4 bg-white text-start shadow-xl sm:w-10/12 md:text-center 
              md:w-9/11"> 
              <div className="flex items-center justify-between">
                <h2 className="text-[#FFD700] w-2/4 cursor-pointer hover:text-[#FFD700] text-[20px] font-semibold sm:w-2/3 md:w-auto 
                md:text-[25px] md:leading-[45.9px]">
                Does Luxus Charge Cancellation Fees?
                </h2>
                <AiOutlineMinusCircle  onClick={() => showPaymentDetails(null)} className="cursor-pointer text-[#FFD700] w-[30px] h-[30px] 
                 hover:text-[#000]" />
              </div>
             <p className="text-start pt-6 pb-10 text-sm">We only charge cancellation fees apply when bookings are cancelled within the notice period 
             (including passenger no-shows) because it means that the vehicle has been dedicated to you and can no longer be assigned to another Hughes
              passenger. The notice periods differ depending on location, vehicle and event type. View our cancellation policy here.</p>
            </div> 
            </div> : <div className="pt-11 w-10/12 mx-auto">
                  <div className="font-[SourceSans3] flex justify-between items-center gap-5 sm:gap-0">
                      <h2 className=" text-[#000] text-start cursor-pointer hover:text-[#FFD700]  font-semibold text-[20px] md:text-[25px]  
                      md:leading-[45.9px]">
                        Does Luxus Charge Cancellation Fees?
                      </h2>
                      <div>
                        <AiOutlinePlusCircle onClick={() => showPaymentDetails("cancell")} className="cursor-pointer text-[000] w-[30px] h-[30px]
                          sm:w-[40px] sm:h-[40px] md:w-[42px] md:h-[42px] hover:text-[#FFD700]"  />
                    </div>
                    </div>
              <hr className=" border-[#C1BDBD] mt-1 md:mt-3 md:border-[1.1px] md:w-[100%] md:mx-auto" />
            </div>
            }

           {/* BOOKINGS */}
             
          { show === "book" ?  <div className="flex items-center justify-between pt-4 font-[SourceSans3] ">
              <div className="w-full mx-auto py-5 px-4 bg-white text-start shadow-xl transition-all ease-in sm:w-10/12 md:text-center md:w-9/11"> 
              <div className="flex items-center justify-between">
                <h2 className="text-[#FFD700] w-2/4 cursor-pointer hover:text-[#FFD700] text-[20px] font-semibold sm:w-2/3 
                md:text-[25px] md:leading-[45.9px] md:w-[40%] lg:w-auto">
                 How Far In Advance Can I Book With Luxus?</h2>
                <AiOutlineMinusCircle  onClick={() => showPaymentDetails(null)} className="cursor-pointer text-[#FFD700] w-[30px] h-[30px]  hover:text-[#000]" />
              </div>
             <p className="text-start pt-6 pb-10 text-sm">From months in advance to the day of your travel, we’re here to keep you moving. Booking in 
             advance gives you more options and certainty that the car type and even driver of your choice will be available at the time you need, 
             but we offer same-day services too.</p>
            </div> 
            </div> :<div className="pt-11 w-10/12 mx-auto">
                  <div className="font-[SourceSans3] flex justify-between items-center gap-5 sm:gap-0">
                      <h2 className=" text-[#000] text-start cursor-pointer hover:text-[#FFD700]  font-semibold text-[20px] md:text-[25px]  
                      md:leading-[45.9px]">
                        How Far In Advance Can I Book With Luxus?
                      </h2>
                    <div>
                    <AiOutlinePlusCircle onClick={() => showPaymentDetails("book")} className="cursor-pointer text-[000] w-[30px] h-[30px]
                      sm:w-[40px] sm:h-[40px] md:w-[42px] md:h-[42px] hover:text-[#FFD700]"  />
                    </div>
                    </div>
              <hr className=" border-[#C1BDBD] mt-1 md:mt-3 md:border-[1.1px] md:w-[100%] md:mx-auto" />
            </div>
            }
   
           <div className="pt-5 pl-6  pb-24 sm:pl-11 sm:pb-28 md:pb-32  lg:pl-1 lg:pb-30 ">
           <div className="py-[8px] w-[65%] font-[SourceSans3] cursor-pointer mt-10 uppercase text-white bg-[#FFD700] 
           rounded text-center md:mx-auto md:w-[35%] lg:w-[25%]">
                {/* VIEW ALL FAQ'S */}
                <a href="" className="btn">
                <i className="el">V</i>
                <i className="el">i</i>
                <i className="el">e</i>
                <i className="el">w</i>

                <i className="el ml-1">A</i>
                <i className="el">l</i>
                <i className="el">l</i>

                <i className="el ml-1">F</i>
                <i className="el">a</i>
                <i className="el">q'</i>
                <i className="el">s</i>
                </a>
             </div>
           </div>
         </section>

         {/* Contact us */}
         <section>
           <Form />
         </section>
    </main>
  );
}

export default Main;
