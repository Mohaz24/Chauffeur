import React from 'react'

// REUSEABLE COMPONENTS
import SharedHeaders from '../Reusebility/SharedHeaders'


import mailImg from '../../assets/svg/email.svg';
import globalImg from '../../assets/svg/contitent.svg'
import profileImg from '../../assets/svg/profile.svg'
import phoneImg from '../../assets/svg/phone.svg'
import cashImg from '../../assets/svg/cash.svg'
import locationImg from '../../assets/svg/location.svg'


function ContactUs() {
  return (
   
    <div>

      {/* NAV */}
      <SharedHeaders 
       url="https://images.pexels.com/photos/8425409/pexels-photo-8425409.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
       bgPosition="top"
       height={95}
       tw={100}
       textW={50}
       title="Contact Us"
       text="Luxus operates 24 hours a day, 7 days a week."
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
       paddingTop={8}
       />
        <section className="flex flex-col items-start justify-around pt-14 pb-20 font-[SourceSans3] md:items-start gap-9 lg:flex-row">

           <div className="w-full sm:ml-10 md:ml-3">
               <h2 className="text-[30px] text-start pl-9 font-black text-[#FFD700] sm:pl-6 md:pl-14 lg:text-[30.8px] lg:pl-16">
                Contact  Luxus
               </h2>
             </div>
       
            <div className="flex flex-col gap-11 items-center ml-9 sm:gap-8 sm:w-[70%] sm:ml-12 md:ml-10 lg:pt-3 lg:gap-7
             lg:w-[190%] lg:mr-9">
            <div className="flex items-start  ustify-start gap-4 sm:ml-4 md:ml-6 lg:ml-0"> 
                <img src={mailImg} alt="mail" className="w-[28px] h-[28px]" />
                <p className="w-[90%] lg:w-[100%]">Please email us, or fill out the enquiry form below and a member of our team will get 
                back to you shortly. <span  className="text-[#FFD700]">res@Luxus.com.au</span>
                </p>
            </div>

            <div className="flex items-start justify-center gap-4 w-[102%] sm:ml-1 sm:w-[95%] md:ml-3  lg:ml-0    lg:w-[100%]">
               <div>
               <img src={phoneImg} alt="phone" className="w-[34px] h-[34px] text-[#FFD700]" />
               </div>
               <p className="w-[90%] md:w-[100%]">For enquiries within Australia, please call us on  
               <span className="text-[#FFD700]"> 1300 215 167 </span>
               </p>
            </div>


            <div className="flex items-start justify-center gap-4 w-[102%] sm:w-[95%] sm:ml-1 md:ml-3 lg:ml-0 lg:w-[100%]">
               <div>
               <img src={globalImg} alt="global" className="w-[30px] h-[30px] text-[#FFD700] " />
               </div>
               <p className="w-[90%] md:w-[100%]">For global enquiries, please call us on 
                <span className="text-[#FFD700]"> +61 2 9317 9000</span>
                </p>
            </div>
          </div>
        </section>

        <section className="bg-gray-100 flex flex-col pt-14 pb-20 font-[SourceSans3] lg:flex-row ">
           <div className="w-full">
               <h2 className="text-[30px] font-black text-start pl-8 text-[#FFD700] sm:pl-14 md:pl-13  lg:text-[30.8px] lg:pl-16">
               Feedback & <br className="hidden lg:flex"/> Complaints
               </h2>
             </div>
       
            <div className="flex flex-col pt-8  w-[100%] gap-8 items-center pl-9 sm:gap-8 sm:w-[70%] sm:pl-12 md:pl-10 lg:gap-7
             lg:w-[178%] lg:pt-0 lg:pr-9">
            <div className="flex items-start justify-start gap-4 sm:pl-4 md:pl-6 lg:pl-0"> 
             <img src={profileImg} alt="profile" className="w-[34px] h-[34px]" />
             <p className=" w-[80%] md:w-[100%]">If we haven’t met your expectations, we would like to know. <br />
                Your feedback is important to us and helps us improve our services. <br /> Please click the below form to provide your details, 
                and the team  will be in touch within  48  hours:
             </p>
            </div>

            <div className="text-start pl-4 w-[86%] sm:pl-8 lg:pl-0 pt-0">
              <p className="pt-2 text-[#FFD700]">info.hughes.com.au/feedback</p> 
            </div>
          </div>
            
        </section>

        <section className=" flex flex-col  pt-14 pb-20 font-[SourceSans3] lg:flex-row ">
             <div className="w-full">
               <h2 className="text-[30px] font-black text-start pl-8 text-[#FFD700] sm:pl-14 md:pl-13  lg:text-[30.8px] lg:pl-16">
                Account & Billing <br className="hidden lg:flex" />  Enquiries
               </h2>
             </div>
       
            <div className="flex flex-col mt-8 gap-8 items-center ml-6 sm:gap-8 sm:w-[70%] sm:ml-9 md:ml-6 lg:pt-3 lg:gap-7
             lg:w-[205%] lg:mt-0 lg:pr-9">
            <div className="flex items-center  justify-start gap-4 sm:ml-4 md:ml-6 lg:ml-0"> 
            <img src={cashImg} alt="cash" className="w-[34px] h-[34px]" />
             <p className="w-[100%]">For all accounting & billing enquiries, please email us at 
             <span className="text-[#FFD700]"> accounts@equitytransport.com.au</span>
             </p>
            </div>
          
          {/* FORM */}
            <div className="text-start w-[100%] mt-0">
             <form action="">
             <div className="mt-10 pl-10 pr-3  g-c-1 sm:grid sm:grid-cols-2 gap-6 font-normal m  lg:text-md">
           
           <div>
           <label htmlFor="firtName" className="text-[#FFD700] font-black">First Name *</label>
            <div>
            <input
             type="text"
             name="firstName" 
             className="mt-3 text-[14px] bg-[rgba(0, 0, 0, .04)] rounded-sm border-2 border-[solid] 
             p-[9px] w-[75%] font-black leading-[20px] text-[#555] bg-[#f1f1f1] border-none sm:p-[8px] lg:w-[90%]" 
             placeholder="First Name"
            />
            </div>
           </div>

           <div>
           <label htmlFor="lastName" className="text-[#FFD700] font-black">Last Name *</label>
            <div>
            <input 
            type="text" 
            name="lastName"
            className="mt-3 text-[14px] bg-[rgba(0, 0, 0, .04)] rounded-sm border-2 border-[solid] 
            p-[9px]  w-[75%] font-black leading-[20px] text-[#555] bg-[#f1f1f1] border-none sm:p-[8px] lg:w-[90%]" 
            placeholder="Last Name"
            />
            </div>
           </div>

         
           <div>
           <label htmlFor="contactNumber" className="text-[#FFD700] font-black">Phone Number *</label>
            <div>
            <input 
            type="text" 
            name="contactNumber" 
            className="mt-3 text-[14px] bg-[rgba(0, 0, 0, .04)] rounded-sm border-2 border-[solid] 
            p-[9px]  w-[75%] font-black leading-[20px] text-[#555] bg-[#f1f1f1] border-none sm:p-[8px]  lg:w-[90%]" 
            placeholder="Phone Number"
            />
            </div>
           </div>

           <div>
           <label htmlFor="email" className="text-[#FFD700] font-black">Email Address *</label>
            <div>
            <input 
            type="email" 
            name="email" 
            className="mt-3 text-[14px] bg-[rgba(0, 0, 0, .04)] rounded-sm border-2 border-[solid] 
            p-[9px] w-[75%] font-black leading-[20px] text-[#555] bg-[#f1f1f1] border-none sm:p-[8px] lg:w-[90%]" 
            placeholder="JohnDoe@gmail.com"
            />
            </div>
         
           </div>
      


          <div className="sm:col-span-2">
          <div>
           <label htmlFor="subject" className="text-[#FFD700] font-black">Subject</label>
            <div>
            <input type="text" name="subject" 
            className="mt-3 text-[14px] font-black bg-[rgba(0, 0, 0, .04)] rounded-sm border-2 border-[solid] p-[11px] 
            w-[75%] leading-[20px] text-[#555] bg-[#f1f1f1] border-none sm:p-[11px] lg:p-[14px] lg:w-[80%]"
            placeholder="Subject"
             />
            </div>
           </div>

           <div className="pt-8">
            <label htmlFor="message"  className="text-[#FFD700] font-black">Message</label>
             <div>
             <textarea 
             type="text" 
             name="message" 
             className="mt-3 font-[poppins] font-black text-[14px] bg-[rgba(0, 0, 0, .04)] font-medium rounded-sm  
             p-[14px] border-2 border-[solid] font-[SourceSans3] sm:p-[10px] w-[80%]  h-20 leading-[20px] text-[#555] 
             bg-[#f1f1f1] border-none placeholder:font-[SourceSans3] placeholder:font-black"
             placeholder="Message" 
              />
             </div>
           </div>
          </div>

          <div className="sm:mx-auto pt-2">
            <input 
            type="submit" 
            name="submit" 
            value="Submit" 
            className=" bg-[#FFD700] cursor-pointer font-bold text-[18px] py-[10px] w-[30%] tr-s-e
             text-white px-[10px] rounded text-center border-none sm:mr-36 sm:py-[8px] sm:px-[20px] sm:w-[55%]
              md:mr-36 md:py-[10px] md:px-[35px] md:w-[60%] lg:mr-56 lg:px-[16px] lg:py-[8px] lg:w-[40%]" />
           </div>
           
           </div>
             </form>
            </div>
          </div>
             
        </section>

        <section className="bg-gray-100 flex flex-col  pt-14 pb-16 font-[SourceSans3] lg:flex-row ">
          <div className="w-full">
               <h2 className="text-[30px] font-black text-start pl-8 text-[#FFD700] sm:pl-14 md:pl-13  lg:text-[30.8px] lg:pl-16">
                Luxus Head Office
               </h2>
             </div>
       
            <div className="flex flex-col pt-8  gap-8 items-center pl-9 sm:gap-8 sm:w-[70%] sm:pl-12 md:pl-10 lg:gap-7
             lg:w-[178%]  lg:pt-0 lg:pr-9">
            <div className="flex items-start justify-start gap-4 sm:pl-4 md:pl-6 lg:pl-0"> 
            <img src={locationImg} alt="profile" className="w-[34px] h-[34px]" />
             <p className=" w-[80%] md:w-[100%]">6 Alexandra Parade Fitzroy, VIC 3065 AUSTRALIA
              Luxus is Australia’s only truly national chauffeur company, and operates in all major Australian centres. To book a Luxus 
              vehicle  in your area, we recommend using our online booking form.
             </p>
            </div>
          </div> 
            
        </section>
    </div>
  )
}

export default ContactUs
