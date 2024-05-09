import React from 'react'


// SLIDER
import Carousel from 'react-grid-carousel'



import transport from "../../assets/images/inter.png"
import driver from "../../assets/images/chaffuer.png"
import fleet from  "../../assets/images/transport-car.png"

// REUSEABLE COMPONENTS
import Intro from '../Reusebility/Intro'
import Map from '../Reusebility/Map'
import BookingDetails from '../Reusebility/BookingDetails'
import Form from '../Reusebility/Form'
import SharedHeaders from '../Reusebility/SharedHeaders'




function AirportTrans() {
  return (
    <div>
     {/* NAV */}
     <SharedHeaders 
       url="https://images.pexels.com/photos/8424989/pexels-photo-8424989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
       bgPosition="center"
       height={100}
       tw={100}
       textW={50}
       title="Reliable Airport Transfer"
       text="Take the stress out of your next trip with professional airport transfers from Luxus."
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

       paddingTop={16}
       />

     {/* INTRO */}
     <Intro 
     title="Get Away On Time, Every Time With Luxus"
     info="Your Luxus Driver will meet and greet you, attend to your luggage and get you to the airport or your onward destination in 
     air-conditioned comfort and style, with a service you can only expect from Australia’s premier chauffeur service."
     details="We operate from all major Australian airports, 24/7, 365 days a year, as well as cruise terminals and transfers 
     to and from major events."
     /> 

     {/* SLIDER */}
     <section className="pt-16 pb-32 font-[SourceSans3]">
        <h2 className="text-center pt-6 pb-11 text-[#FFD700] font-black text-[37.4px] leading-[45.9px] 
        lg:w-[55%] mx-auto">
         At Your Service
        </h2>
       <Carousel className="w-[100%]"
       cols={3}
       gap={9}
       autoplay={3000}
       loop={true}
       scrollSnap={true}
       centerMode={true}
       swipeable={true}
        >
       <Carousel.Item>
       <img src={driver}
         alt="chauffuar" 
         className=" h-[70vh] w-[190%] object-cover cursor-pointer"
         />
      </Carousel.Item>
      <Carousel.Item>
      <img src="https://images.pexels.com/photos/8424991/pexels-photo-8424991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
         alt="chauffuar" 
         className="h-[70vh] w-[190%] object-cover"
         />
      </Carousel.Item>
      <Carousel.Item>
      <img src="https://images.pexels.com/photos/8425355/pexels-photo-8425355.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
         alt="service" 
         className="h-[70vh] w-[190%] object-cover"
         />
      </Carousel.Item>

      <Carousel.Item>
      <img src={transport}
         alt="transport" 
         className="h-[70vh] w-[190%] object-cover"
        />
      </Carousel.Item>

      <Carousel.Item>
      <img src={fleet}
         alt="transport" 
         className="h-[70vh] w-[190%] object-cover"
        />
      </Carousel.Item>

      <Carousel.Item>
      <img src="https://images.pexels.com/photos/8424991/pexels-photo-8424991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
         alt="chauffuar" 
         className="h-[70vh] w-[190%] object-cover"
         />
      </Carousel.Item>
       </Carousel>
       <article className="pt-9">
        <div className="w-[85%]  md:w-[73%] mx-auto text-[16px]">
          <h2 className="pt-4 pb-4">Say goodbye to long taxi lines and commence or complete your next trip in comfort and style.
           It’s business class all the way,  from your driver awaiting your arrival to drop-off at your terminal, business, home or hotel.
          </h2>
            <nav>
             <p className="pt-4 pb-4">Here’s what you can expect from your Luxus experience:</p>
              <div className="pt-2 pb-4">
                <li>A professional, experienced and courteous driver waiting for you in the arrivals hall*.</li>
                <li>Assistance with your luggage from the carousel to your awaiting luxury vehicle</li>
                <li>An umbrella service in inclement weather.</li>
                <li>A service tailored to your personal preferences, talk to your driver and gain local insights or sit back and 
                relax in privacy, peace and comfort.
               </li>
               <li className="pb-2">Drop off at your door.</li>
              </div>

              <p className="pt-4 pb-4">Whether you are booking for yourself or making a corporate booking, the process is hassle-free,
               with:
               </p>
              <div className="pt-2 pb-4">
                <li>Flexible payment options, no credit card surcharges.</li>
                <li>Competitive rates all year round and the best available rates when you book directly with us.</li>
                <li>An umbrella service in inclement weather.</li>
                <li>24/7 availability, booking and customer service.</li>
              </div>
              <p className="pt-6 ">*Exact driver meeting point may vary depending on the specific terminal facilities and will be 
                confirmed with you upon confirmation of your booking.
              </p>
            </nav>
        </div>
       </article>
      </section>

     {/* BOOKING DETAILS */}
     <BookingDetails 
     title="A Vehicle To Suit Every Traveller"
     info="Whether you are travelling solo, with colleagues or family or as a large group, we’ve got a vehicle option to suit your needs. We 
     offer standard and luxury sedans to cater for up to 1-3  passengers with minimal carry-on luggage, right up to SUVs, people movers,
      minibuses and coaches for larger groups. "
     />

     {/* MAP */}
     <Map 
     title="Australia’s Oldest And Only Nationwide Chauffeur Service"
     text="With offices around Australia, we keep you moving across the country. Alongside our luxury airport and A to B transfers, 
     we offer tour services to see the sights in style, using one of our suggested itineraries or choosing your own adventure."
     subtitle="Find out more about our locations and the services on offer."
     />

     {/* FORM */}
     <Form />
    </div>
  )
}

export default AirportTrans
