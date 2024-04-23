import {React, useState} from 'react'


// REUSEABLE COMPONENTS
import Details from '../Reusebility/Details'
import Form from '../Reusebility/Form'

// LOCATIONS DATA
import { locations } from '../data'

// FLEET DATA
import { sedans, suv, peopleMovers, minibusesCoaches } from '../fleet'

function TheFleet() {
  const [on, setOn] = useState(false)
  const [display, setDisplay] = useState("sedan")

  function toggle(){
    setOn((on) => !on)
  }

  function showLinks(navLink){
    setDisplay(navLink)
  }

  return (
    <div>
      <Details 
       width={25}
       title="Discover Our Distinguished Fleet"
       info="Our distinguished fleet of hired cars sets the stage for an extraordinary travel experience. From elegant sedans to spacious SUVs, 
       we offer a diverse selection of vehicles to cater to your specific needs and preferences for Airport Transfers over to Luxury Tours."
       details="If you’re attending a corporate event, embarking on a leisurely getaway, or celebrating a milestone, our extensive fleet ensures 
       that you find the perfect ride for every occasion. Impeccably maintained and equipped with cutting-edge amenities, our vehicles are driven 
       by professional chauffeurs who prioritize your safety and satisfaction.  Get ready to indulge in a seamless journey as you sit back, 
       relax, and enjoy the epitome of sophistication on wheels."
      />

      <section className="bg-gray-100 pt-10 pb-52 font-[SourceSans3]">
          <div className="text-center">
            <h2 className="text-[#FFD700] text-[37.4px] leading-[45.9px]">A Range Of Vehicles To Keep Your Event Moving</h2>
            <p className="pt-7 w-[73%] mx-auto">Whether you are looking for a luxury limousine or premium sedan experience for VIPs or want to move large groups of attendees 
              in comfort and style, Luxus has you covered, with vehicle options for 1 – 61 passengers and an extensive fleet to accommodate 
              large-scale events.</p>
              <p className="pt-9 w-[45%] mx-auto sm:w-[40%] md:w-auto">Not sure what vehicle/s suit your needs? Contact our friendly team on 1300 615 155 or res@Luxus.com.au.</p>
          </div>

          <div className="pt-16 md:pt-10 text-center">
            <h2 className="text-[#FFD700] text-[24px]">Choose Your Destination</h2>
            <div className="">
            {/* locations */}
              <form action="" className="flex flex-col justify-center items-center gap-3 pt-4 md:pt-2 leading-[24px] md:flex-row md:gap-10">
               <select name="" id="" className="py-2 text-[#ADA7A7]  w-[80%]  text-start pl-2  rounded-md md:w-[35%]" >
                <option value="Select where you coming from?" >Select where you're going from</option>
                { locations && locations.map((places) => <option value={places}>{`${places.name} Airport`}</option> )}
               </select>

               <select name="" id="" className="py-2 text-[#ADA7A7] w-[80%] text-start  pl-2 rounded-md md:w-[35%]">
                <option value="Select where you coming from?">Select where you're going to?</option>
                { locations && locations.map((places) => <option value={places}>{`${places.name} Airport`}</option> )}
               </select>
              </form>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row md:gap-10 pt-14 cursor-pointer">
              <div>
              <a 
              onClick={() => showLinks("sedan")} 
              className={display === "sedan" ? `text-[#FFD700]` : `` }
              style={{ borderBottom: display === "sedan" ? "2px solid #FFD700" : "none" }}>Sedans</a>
              </div>
              <div>
              <a 
              onClick={() => showLinks("prem")} 
              className={display === "prem" ? `text-[#FFD700]` : `` }
              style={{ borderBottom: display === "prem" ? "2px solid #FFD700" : "none" }}>Premium SUVs</a>
              </div>
              <div>
                 <a 
              onClick={() => showLinks("pm")} 
              className={display === "pm" ? `text-[#FFD700]` : `` }
              style={{ borderBottom: display === "pm" ? "2px solid #FFD700" : "none" }}>People Movers</a>
              </div>
              <div>
              <a 
              onClick={() => showLinks("mn")} 
              className={display === "mn" ? `text-[#FFD700]` : `` }
              style={{ borderBottom: display === "mn" ? "2px solid #FFD700" : "none" }}>Minibuses & Coaches</a>
              </div>
            </div>
          </div>
          {/* SEDANS */}
          {
            display === "sedan" ? <>
            {
              sedans.map((data) => {
                const { img, title, subTitle, info, passenger, suitcase, bag, passLenght, suitLenght, baglenght} = data
                
                return  <div className="w-[75%] h-[110vh] l mx-auto mt-10 bg-[#fff] flex flex-col items-center
                rounded-md sm:w-[70%] md:w-[65%] lg:h-[55vh] lg:w-[75%]  lg:flex-row"> 
                  <img src={img} alt="sedan" className="h-[120px] pl-2 sm:h-[35%] md:h-[40%]" />
                  <div className="pl-4 md:pl-4">
                    <h2 className="text-[25.5px] leading-[32.3px] pl-2 pb-3 text-[#FFD700] md:pl-0">{title}</h2>
                    <a href="" className="underline pl-2  text-[#ADA7A7] md:pl-0">{subTitle}</a>
                    <div className="flex flex-col items-center gap-9 md:flex-row">
                    <p className="pt-4 w-[95%] pb-4 md:pb-6 sm:w-[97%] md:w-[70%]">{info}</p>
                    <a href="" className="hidden pl-[35px] pr-[35px] py-2 bg-[#FFD700] text-white rounded-sm md:hidden lg:block">
                      Book <br /> Now
                    </a>
                    </div>
                    <hr className="w-[70%]" />
                  <div className="flex flex-col gap-6 pt-5 sm:grid sm:grid-cols-2   lg:flex lg:flex-row"> 
                  <div className="flex items-center gap-2">
                  <img src={passenger} alt="profile" className="w-[20px] h-[20px] lg:w-[30px] lg:h-[30px]" />
                  <h3>{passLenght}</h3>
                  </div>
                  <div className="flex items-center gap-2">
                  <img src={suitcase} alt="bag" className="w-[20px] h-[20px] lg:w-[30px] lg:h-[30px]" />
                  <h3>{suitLenght}</h3>
                  </div>
                  <div className="flex items-center gap-2">
                  <img src={bag} alt="bag" className="w-[20px] h-[20px] lg:w-[30px] lg:h-[30px]" />
                  <h3>{baglenght}</h3>
                  </div>
                   </div>
                   <a href="" className="mt-10 mx-auto  text-center block w-[35%]  lg:w-[44%] lg:pl-[35px] lg:pr-[35px] py-2 bg-[#FFD700]
                    text-white  rounded-sm  lg:mt-6 lg:hidden" > Book <br className="hidden md:hidden" /> Now
                    </a>
                  </div>
                </div>
              })
            }
            </>
           : null
          }

          {/* PREMIUM SUV */}
          {
            display === "prem" ? <>
            {
              suv.map((data) => {
                const { img, title, subTitle, info, passenger, suitcase, bag, passLenght, suitLenght, baglenght} = data
                
                return  <div className="w-[75%] h-[110vh]  mx-auto mt-10 bg-[#fff] flex flex-col items-center
                rounded-md sm:w-[70%] md:w-[65%] md:h-[120vh] lg:h-[55vh] lg:w-[75%]  lg:flex-row"> 
                  <img src={img} alt="sedan" className="h-[120px] pl-2 sm:h-[35%] md:h-[40%]" />
                  <div className="pl-4 md:pl-4">
                    <h2 className="text-[25.5px] leading-[32.3px] pl-2 pb-3 text-[#FFD700] md:pl-0">{title}</h2>
                    <a href="" className="underline pl-2  text-[#ADA7A7] md:pl-0">{subTitle}</a>
                    <div className="flex flex-col items-center gap-9 md:flex-row">
                    <p className="pt-4 w-[95%] pb-4 md:pb-6 sm:w-[97%] md:w-[70%]">{info}</p>
                    <a href="" className="hidden pl-[35px] pr-[35px] py-2 bg-[#FFD700] text-white rounded-sm md:hidden lg:block">
                      Select
                    </a>
                    </div>
                    <hr className="w-[70%]" />
                  <div className="flex flex-col gap-6 pt-5 sm:grid sm:grid-cols-2   lg:flex lg:flex-row"> 
                  <div className="flex items-center gap-2">
                  <img src={passenger} alt="profile" className="w-[20px] h-[20px] lg:w-[30px] lg:h-[30px]" />
                  <h3>{passLenght}</h3>
                  </div>
                  <div className="flex items-center gap-2">
                  <img src={suitcase} alt="bag" className="w-[20px] h-[20px] lg:w-[30px] lg:h-[30px]" />
                  <h3>{suitLenght}</h3>
                  </div>
                  <div className="flex items-center gap-2">
                  <img src={bag} alt="bag" className="w-[20px] h-[20px] lg:w-[30px] lg:h-[30px]" />
                  <h3>{baglenght}</h3>
                  </div>
                   </div>
                   <a href="" className="mt-10 mx-auto  text-center block w-[35%]  lg:w-[44%] lg:pl-[35px] lg:pr-[35px] py-2 bg-[#FFD700]
                    text-white  rounded-sm  lg:mt-6 lg:hidden" > Select </a>
                  </div>
                </div>
              })
            }
            </>
           : null
          }

          {/* PEOPLE MOVERS */}
          {
            display === "pm" ? <>
            {
              peopleMovers.map((data) => {
                const { img, title, subTitle, info, passenger, suitcase, bag, passLenght, suitLenght, baglenght} = data
                
                return  <div className="w-[75%] h-[110vh]  mx-auto mt-10 bg-[#fff] flex flex-col items-center
                rounded-md sm:w-[70%] md:w-[65%] lg:h-[55vh] lg:w-[75%] lg:flex-row"> 
                  <img src={img} alt="sedan" className="mt-5 mb-3  h-[90px] pl-2 sm:h-[25%] lg:h-[30%]" />
                  <div className="pl-4 md:pl-4">
                    <h2 className="text-[25.5px] leading-[32.3px] pl-2 pb-3 text-[#FFD700] md:pl-0">{title}</h2>
                    <a href="" className="underline pl-2  text-[#ADA7A7] md:pl-0">{subTitle}</a>
                    <div className="flex flex-col items-center gap-9 md:flex-row">
                    <p className="pt-4 w-[95%] pb-4 md:pb-6 sm:w-[97%] md:w-[70%]">{info}</p>
                    <a href="" className="hidden pl-[35px] pr-[35px] py-2 bg-[#FFD700] text-white rounded-sm md:hidden lg:block">
                      Select
                    </a>
                    </div>
                    <hr className="w-[70%]" />
                  <div className="flex flex-col gap-6 pt-5 sm:grid sm:grid-cols-2   lg:flex lg:flex-row"> 
                  <div className="flex items-center gap-2">
                  <img src={passenger} alt="profile" className="w-[20px] h-[20px] lg:w-[30px] lg:h-[30px]" />
                  <h3>{passLenght}</h3>
                  </div>
                  <div className="flex items-center gap-2">
                  <img src={suitcase} alt="bag" className="w-[20px] h-[20px] lg:w-[30px] lg:h-[30px]" />
                  <h3>{suitLenght}</h3>
                  </div>
                  <div className="flex items-center gap-2">
                  <img src={bag} alt="bag" className="w-[20px] h-[20px] lg:w-[30px] lg:h-[30px]" />
                  <h3>{baglenght}</h3>
                  </div>
                   </div>
                   <a href="" className="mt-10 mx-auto  text-center block w-[35%]  lg:w-[44%] lg:pl-[35px] lg:pr-[35px] py-2 bg-[#FFD700]
                    text-white  rounded-sm  lg:mt-6 lg:hidden" > Select </a>
                  </div>
                </div>
              })
            }
            </>
           : null
          }

          {/* LUXURY MINIBUS */}

          {
            display === "mn" ? <>
            {
              minibusesCoaches.map((data) => {
                const { img, title, subTitle, info, passenger, suitcase, bag, passLenght, details, suitLenght, baglenght} = data
                
                return  <div className="w-[75%] h-[100vh]  mx-auto mt-10 bg-[#fff] flex flex-col items-center
                rounded-md sm:w-[70%] sm:h-[115vh] md:w-[65%] md:h-[115vh] lg:h-[55vh] lg:w-[75%]  lg:flex-row"> 
                  <img src={img} alt="sedan" className="mt-5 mb-3 h-[110px] pl-2 sm:h-[35%] lg:h-[40%]" />
                  <div className="pl-4 md:pl-4">
                    <h2 className="text-[25.5px] leading-[32.3px] pl-2 pb-3 text-[#FFD700] md:pl-0">{title}</h2>
                    <a href="" className="underline pl-2  text-[#ADA7A7] md:pl-0">{subTitle}</a>
                    <div className="flex flex-col items-center gap-9 md:flex-row">
                    <p className="pt-4 w-[95%] pb-4 md:pb-6 sm:w-[97%] md:w-[70%]">{info}</p>
                    <a href="" className="hidden pl-[35px] pr-[35px] py-2 bg-[#FFD700] text-white rounded-sm md:hidden lg:block">
                      Select
                    </a>
                    </div>
                    <hr className="w-[70%]" />
                  <div className="flex flex-col gap-6 pt-5 sm:grid sm:grid-cols-2   lg:flex lg:flex-row"> 
                  <div className="flex items-center gap-2">
                  <img src={passenger} alt="profile" className="w-[20px] h-[20px] lg:w-[30px] lg:h-[30px]" />
                  <h3>{passLenght} <br  className="hidden lg:block"/> <span className="pl-1">{details}</span> </h3>
                  </div>
                   </div>
                   <a href="" className="mt-10 mx-auto  text-center block w-[35%]  lg:w-[44%] lg:pl-[35px] lg:pr-[35px] py-2 bg-[#FFD700]
                    text-white  rounded-sm  lg:mt-6 lg:hidden" > Select </a>
                  </div>
                </div>
              })
            }
            </>
           : null
          }
      </section>
       
      {/* CONTACT US  */}
      <Form />
    </div>
  )
}
export default TheFleet
