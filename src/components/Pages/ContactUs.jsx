import React from 'react'


import mailImg from '../../assets/svg/email.svg';
import globalImg from '../../assets/svg/contitent.svg'
import profileImg from '../../assets/svg/profile.svg'
import phoneImg from '../../assets/svg/phone.svg'
import cashImg from '../../assets/svg/cash.svg'
import locationImg from '../../assets/svg/location.svg'


function ContactUs() {
  return (
    <div>
        <section className="flex flex-col items-start  pt-14 pb-20 font-[SourceSans3] md:items-start gap-9 lg:flex-row">
           
           <div className="w-full">
               <h2 className=" text-[30px] text-start pl-5 text-[#FFD700] md:pl-28  lg:text-[30.8px] lg:pl-16">Contact Luxus</h2>
             </div>
            
            <div className="flex flex-col gap-11 items-center ml-6  md:ml-28 sm:w-[50%] lg:w-[135%]">
            <div className="flex items-start justify-start gap-4"> 
               <div>
                <img src={mailImg} alt="mail" className="w-[34px] h-[34px]" />
               </div>
                <p className="w-[90%] ">Please email us, or fill out the enquiry form below and a member of our team will get back to you shortly. 
                 <span className="text-[#FFD700]">res@Luxus.com.au</span></p>
            </div>

            <div className="flex items-start justify-center gap-4 lg:w-[100%]">
               <div>
               <img src={phoneImg} alt="phone" className="w-[34px] h-[34px] text-[#FFD700] " />
               </div>
               <p className="w-[100%]">For enquiries within Australia, please call us on 1300 615 165</p>
            </div>


            <div className="flex items-start justify-center gap-4 lg:w-[100%]">
               <div>
               <img src={globalImg} alt="global" className="w-[30px] h-[30px] text-[#FFD700] " />
               </div>
               <p className="w-[100%]">For enquiries within Australia, please call us on 1300 615 165</p>
            </div>
          </div>
        </section>

        <section className="bg-gray-100 flex flex-col  pt-14 pb-20 font-[SourceSans3] lg:flex-row ">
           <div className="w-full">
               <h2 className=" text-[30px] text-start pl-5 text-[#FFD700] md:pl-28  lg:text-[30.8px] lg:pl-16">
               Feedback & <br/> Complaints
               </h2>
             </div>

             
             <div className="lg:w-[100%]">
             <div className="flex items-start justify-start gap-10"> 
               <div>
                <img src={profileImg} alt="profile" className="w-[34px] h-[34px]" />
               </div>
                <p className="w-[80%]">If we haven’t met your expectations, we would like to know. <br />
                Your feedback is important to us and helps us improve our services. <br /> Please click the below form to provide your details, 
                and the team  will be in touch within <br /> 48  hours:</p>
            </div>
              <div>
              <span className="mt-24 pl-9 text-[#FFD700]">info.hughes.com.au/feedback</span> 
              </div>
             </div>
           
            
        </section>

        <section className=" flex flex-col  pt-14 pb-20 font-[SourceSans3] lg:flex-row ">
           <div className="w-full">
               <h2 className=" text-[30px] text-start pl-5 text-[#FFD700] md:pl-28  lg:text-[30.8px] lg:pl-16">
               Account & <br /> Billing Enquiries
               </h2>
             </div>

             
             <div className="lg:w-[100%]">
             <div className="flex items-start justify-start gap-10"> 
               <div>
                <img src={cashImg} alt="cash" className="w-[34px] h-[34px]" />
               </div>
                <p className="w-[80%]">For all accounting & billing enquiries, please email us at <span className="text-[#FFD700]">
                accounts@equitytransport.com.au</span></p>
            </div>
            
             </div>
        </section>

        <section className="bg-gray-100 flex flex-col  pt-14 pb-20 font-[SourceSans3] lg:flex-row ">
           <div className="w-full">
               <h2 className=" text-[30px] text-start pl-5 text-[#FFD700] md:pl-28  lg:text-[30.8px] lg:pl-16">
               Luxus Head Office
               </h2>
             </div>

             
             <div className="lg:w-[100%]">
             <div className="flex items-start justify-start gap-10"> 
               <div>
                <img src={locationImg} alt="profile" className="w-[34px] h-[34px]" />
               </div>
                <p className="w-[80%]">6 Alexandra Parade Fitzroy, VIC 3065 AUSTRALIA
              Luxus is Australia’s only truly national chauffeur company, and operates in all major Australian centres. To book a Hughes vehicle 
             in your area, we recommend using our online booking form.</p>
            </div>
             </div>
            
        </section>
    </div>
  )
}

export default ContactUs
