import {React, useState} from 'react'

// REUSEABLE COMPONENTS
import ServiceHeader from '../Reusebility/ServiceHeader'
import Map from '../Reusebility/Map'
import Details from '../Reusebility/Details'
import BookingDetails from '../Reusebility/BookingDetails'
import Form from '../Reusebility/Form'

import { sliderImages4 } from "../sliders"


function Services() {
  const [slider1, setSlider1] = useState(sliderImages4)

  const toggleOn = (id) => {
    setSlider1((prevImages) => {
        return prevImages.map((items) => {
            return items.id === id ? {...items, isTrue: true} : items
        })
    })
}

const toggleOff = (id) => {
  setSlider1((prevImages) => {
        return prevImages.map((items) => {
            return items.id === id ? {...items, isTrue: false} : items
        })
    })
}

  return (
    <div> 
     {/* NAV */}
     <ServiceHeader 
       url="https://images.pexels.com/photos/8425355/pexels-photo-8425355.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
       bgPosition="center"
       height={107}
       tw={40}
       title="Nationwide Chauffeur-Driven Transfer, Tour And Event Transport Services"
       textW={30}
       text="Luxus is Australia’s premier luxury transport service, getting you where you need to go in comfort and style."
       btnWidth={60}
       hidden="hidden"
       i="I"
       n="n"
       s="s"
       t="t"
       a="a"
       nx="n"
       nt="t"

       q="Q"
       u="u"
       o="o"
       qt="t"
       e="e"
       />

      {/* INTRO & GALLERY */}
      <Details  
      lgw={150}
      title="Experience The Luxus"
      br="Difference"
      info="From premium airport and corporate transfers to event transport and luxury tours, Hughes delivers on all your 
      transport needs. Sit back and relax as our professional, experienced and courteous chauffeurs take care of the driving for you"
      />
      
      <section className="pt-0 pb-32 pl-10">
           <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 ">
              {
                slider1.map((slide) => {
                  const sldImg = {
                    background: `url(${slide.url})`,
                    width: '80%',
                    height: '75vh',
                    backgroundPosition: 'center',
                    borderRadius: '10px',
                    backgroundSize: 'cover',
                    objectFit: 'cover',
                    padding: '100px',
              }
                  return <div className="relative font-[SourceSans3] cursor-pointer">
                   <div style={sldImg} className="darbg-1">
                   <div onMouseEnter={() => toggleOn(slide.id)} onMouseLeave={() => toggleOff(slide.id)} className="">
                     {
                       slide.isTrue ? <div className="flex flex-col items-start absolute top-20 left-3 bottom-0 z-10
                       darkbg font-semibold">
                       <img src={slide.icon} alt="icons"className="w-[50px] h-[50px]" />
                       <h3 className="pt-4 text-[#FFD700] font-black text-lg darkbg-text opacity-1 drop-shadow-xl bg-blend-difference ">
                        {slide.title}</h3>
                       <p className="w-48 pt-4 darkbg-text text-md text-[#E3E9F1] opacity-8 drop-shadow-xl bg-blend-difference">
                        {slide.text} </p>
                       </div>
                       :  <div className="absolute top-64 left-5 bottom-0">
                        <img src={slide.icon} alt="icons"className="w-[50px] h-[50px]" />
                       <h3 className="text-center pt-4 font-black text-[#FFD700] text-md md:text-lg">{slide.title}</h3>
                       </div>
                     }
                   </div>
                 </div>
              </div>
                })
              }
           </div>
      </section>


      {/* BOOKING DETAILS */}
      <BookingDetails 
      title="A Vehicle To Suit Every Traveller"
      info="Whether you are travelling solo, with colleagues or family or as a large group, we’ve got a vehicle option to suit your needs. 
      We offer standard and luxury sedans  to cater for up to 1-3 passengers with minimal carry-on luggage, right up to SUVs, people movers,
       minibuses and coaches for larger groups."
      />
      {/* NEWSLETTER */}
     <section className="pt-10 pb-24 font-[SourceSans3]">
      <div className="text-center">
          <h1 className="w-[100%] mx-auto text-[30px] pl-14 leading-[45.9px] font-[SourceSans3] text-[#FFD700] font-semibold 
        sm:text-[37.4px] md:w-[60%]">
            Your Luxus Chauffeur: Professional, Experienced, Courteous And Discreet
          </h1>
            <p className="pt-11 pl-14  text-[15px] font-extralight leading-24 pb-16 ">We handpick our chauffeurs for their exemplary 
            driving  records, experience with luxury service and <br className="hidden sm:block" /> commitment to customer service and safety. 
            Your Luxus chauffeur will tailor your  experience to your <br className="hidden sm:block" /> needs, whether that’s sharing local 
            knowledge or giving you the privacy, peace and quiet to  relax in <br className="hidden sm:block"  /> comfort and style.</p>
          <a href="" className="ml-14 py-[15px] px-[40px] uppercase font-[SourceSans3] text-white
          cursor-pointer bg-[#FFD700] tr-s-e  mx-auto rounded-sm"> CHAUFFEUR SERVICES </a>
          </div>
     </section>
      {/* MAP */}
      <Map 
      title="Australia’s Oldest And Only Nationwide Chauffeur Service"
      text="With offices around Australia, we keep you moving across the country. Alongside our luxury airport and A to B transfers, 
      we offer tour services to see the sights in style, using one of our suggested itineraries or choosing your own adventure."
      subtitle="Find out more about our locations and the services on offer."

      />
      {/* CONTACT US */}
      <Form />
    </div>
  )
}

export default Services
