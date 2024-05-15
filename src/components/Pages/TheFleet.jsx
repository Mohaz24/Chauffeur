import React from 'react'


// REUSEABLE COMPONENTS
import SharedHeaders from '../Reusebility/SharedHeaders'
import Details from '../Reusebility/Details'
import BookingDetails from '../Reusebility/BookingDetails'
import Form from '../Reusebility/Form'




function TheFleet() {
  return (
    <div>
     {/* NAV */}
     <SharedHeaders 
       url="https://images.pexels.com/photos/6920645/pexels-photo-6920645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
       bgPosition="center"
       height={95}
       tw={100}
       textW={50}
       title="Our Fleet"
       text="Prestige, luxury and well-appointed vehicles to keep you moving in comfort and style"
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
       paddingTop={10}
       />

      {/* DETAILS */}
      <Details 
       lgw={150}
       title="Discover Our"
       br="Distinguished Fleet"
       info="Our distinguished fleet of hired cars sets the stage for an extraordinary travel experience. From elegant sedans to spacious SUVs, 
       we offer a diverse selection of vehicles to cater to your specific needs and preferences for Airport Transfers over to Luxury Tours."
       details="If you’re attending a corporate event, embarking on a leisurely getaway, or celebrating a milestone, our extensive fleet ensures 
       that you find the perfect ride for every occasion. Impeccably maintained and equipped with cutting-edge amenities, our vehicles are driven 
       by professional chauffeurs who prioritize your safety and satisfaction.Get ready to indulge in a seamless journey as you sit back, 
       relax, and enjoy the epitome of sophistication on wheels."
      />

      {/* BOOKING DETAILS */}
       <BookingDetails 
       title="A Range Of Vehicles To Keep Your Event Moving"
       info="Whether you are looking for a luxury limousine or premium sedan experience for VIPs or want 
       to move large groups of attendees in comfort and style, Luxus has you covered, with vehicle options for 1 – 61 passengers and an 
       extensive fleet to accommodate large-scale events."
       />
      {/* CONTACT US  */}
      <Form />
    </div>
  )
}
export default TheFleet
