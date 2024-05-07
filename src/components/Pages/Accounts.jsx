import React from 'react'

// REUSEABLE COMPONENTS
import SharedHeaders from '../Reusebility/SharedHeaders'

function Accounts() {
  return (
    <div>
    {/* NAV */}
    <SharedHeaders 
       url="https://images.pexels.com/photos/8555602/pexels-photo-8555602.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
       bgPosition="center"
       height={100}
       tw={100}
       textW={50}
       title="Account Applications"
       text="Perfect for businesses with multiple travellers, frequent travellers and those managing travel."
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
       <section className="pt-10 pb-20 font-[SourceSans3]">
        <div>
            <p className="w-[100%] pl-4 md:w-[68%] md:pl-14">Decide which option best suits your business needs, fill in the Account Application 
            form and we will take care of the rest! Once approved, you will receive login details to your Luxus Account.</p>
        </div>

        <div className="pl-4 md:pl-0">
            <h2 className="w-[100%] pt-4 pb-3 font-black text-[20px] md:text-[25px] leading-[45.9px]  md:w-[68%] md:pl-14">Invoiced Account</h2>
            <p className="w-[100%] pb-8 md:w-[68%] md:pl-14">Receive an invoice for all bookings during your chosen period, payable 
            by credit card or bank transfer. Choose from weekly, twice per month, or monthly.</p>
            <a href="" className="md:ml-14 w-[100%]  tr-s-e px-[10px] py-[14px] bg-[#FFD700] text-white  text-center rounded-sm">Luxus Invoice
              Account Application Form</a>
        </div>
        <hr className="border-[1px] ml-4 mt-8 w-[90%]  md:w-[65%] md:ml-14" />

        <div className="pl-4 md:pl-0">
            <h2 className="w-[100%] pt-4 pb-3 font-black  text-[20px] md:text-[25px leading-[45.9px]  md:w-[68%] md:pl-14">
              Multi-User Credit  Card Account
             </h2>
            <p className="w-[100%] pb-8 md:w-[68%] md:pl-14">Make bookings for multiple travellers using different credit cards, 
            with a payment  receipt sent to your nominated email address at the time of booking.</p>
            <a href="" className="md:ml-14 w-[100%] tr-s-e px-[10px] py-[14px] bg-[#FFD700] text-white  text-center rounded-sm">
            Multi-User Credit Card Account Application Form
            </a>
        </div>
        <hr className="border-[1px] ml-4 mt-8 w-[90%]  md:w-[65%] md:ml-14" />


        <div className="pl-4 md:pl-0">
            <h2 className="w-[100%] pt-4 pb-3  font-black text-[20px] md:text-[25px leading-[45.9px]  md:w-[68%] md:pl-14">I Am An Individual, How Can I Book?</h2>
            <p className="w-[100%] pb-8 md:w-[68%] md:pl-14">Booking with Luxus has never been easier! Book Now 
            to make and manage your bookings instantly.</p>
            <a href="/book" className="md:ml-14 w-[100%] px-[20px] py-[14px] bg-[#FFD700] text-white  text-center rounded-sm tr-s-e">
             Book Now
            </a>
        </div>
        <hr className="border-[1px] ml-4 mt-8 w-[90%] md:w-[65%] md:ml-14" />
      
        <p className="w-[100%] pl-4 pt-6  md:w-[68%] md:pl-14">Questions?  
        <span className="text-[#FFD700]">
        <a href="/contact"> Contact us </a>
        </span> now
        </p>

       </section>
    </div>
  )
}

export default Accounts
