import React from 'react'

// CONTACT US IMAGES
import mailImg from '../../assets/svg/email.svg'
import ausImg from '../../assets/svg/aus.svg'
import globalImg from '../../assets/svg/contitent.svg'

function Form() {
  return (
    <div>
      <div className={`bg-[url(https://images.pexels.com/photos/8425025/pexels-photo-8425025.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)] 
         bg-cover bg-end object-cover h-[150vh] pb-20 relative  flex items-center c-bg-h sm:bg-right sm:h-[170vh] md:h-[185vh] lg:h-[180vh] `}>
         <div className=" bg-white absolute bottom-10 right-10 c-w-h pb-28 font-[SourceSans3] sm:bottom-0 sm:right-36 sm:w-[470px]
         md:w-[490px] md:bottom-16 md:right-[100px] lg:bottom-8 lg:right-4 lg:w-3/6 lg:text-lg">
              <h1 className="text-center pt-4  text-[#FFD700] font-semibold text-[20px] leading-[45.9px]  sm:pt-10 lg:text-[30px]">
                Questions?  We’re Here To <span className="block">Help!</span></h1>
              <p className="text-sm text-center pt-3 w-[80%] mx-auto lg:text-md lg:w-3/4 lg:mx-auto">Our friendly Customer Service Team is on 
              hand  24/7 to answer  enquiries <br className="lg:hidden hidden" /> and keep you moving. You can contact us directly on 1300 615 165, at 
              <span className="text-[#FFD700] cursor-pointer "> res@Luxus.com.au</span> or leave your  details below, and  we’ll be in  touch.</p>
         <div className="sm:flex sm:justify-center gap-6  pt-10 pl-2 pr-6 text-center text-[#888] text-[14px] c-i-box">
            <div>
              <h3 className="pb-3">For email enquiries</h3>
              <div className="c-p-l flex items-center gap-2 sm:pl-6">
                <img src={mailImg} alt="" className="w-[35px]" />
                <a href="#" className="text-[#FFD700] hover:text-[#694EEF] cursor-pointer">res@luxus.com.au</a>
              </div>
            </div>
            <div>
              <h3 className="c-w-t sm:w-11/12">For enquiries within Australia</h3>
              <div className=" c-p-l pt-3 flex items-center gap-2  sm:pl-7 ">
                <img src={ausImg} alt="" className="w-[35px]" />
                <a href="#" className="text-[#FFD700] hover:text-[#694EEF] cursor-pointer">1300 625 195</a>
              </div>
            </div>
            <div>
              <h3 className="c-w-t pb-3">For global enquiries</h3>
              <div className="c-p-l flex items-center gap-2">
                <img src={globalImg} alt="" className="w-[35px]" />
                <a href="#" className="text-[#FFD700] hover:text-[#694EEF] cursor-pointer">+61 2 9317 9000</a>
              </div>
            </div>
         </div>
       
         <form action="">
          <div className="mt-10 pl-10 pr-3  g-c-1 sm:grid sm:grid-cols-2  gap-6 font-normal  lg:text-md">
           
           <div>
           <label htmlFor="firtName">First Name *</label>
            <div>
            <input type="text" name="firstName" className="mt-3 text-[14px] bg-[rgba(0, 0, 0, .04)] rounded-sm border-2 border-[solid] p-[6px] 
             w-[75%] font-black leading-[20px] text-[#555] bg-[#f1f1f1] border-none sm:p-[8px]" />
            </div>
           </div>

           <div>
           <label htmlFor="lastName">Last Name *</label>
            <div>
            <input type="text" name="lastName" className="mt-3 text-[14px] bg-[rgba(0, 0, 0, .04)] rounded-sm border-2 border-[solid] p-[6px] 
             w-[75%] font-black leading-[20px] text-[#555] bg-[#f1f1f1] border-none sm:p-[8px]" />
            </div>
           </div>

         
           <div>
           <label htmlFor="contactNumber">Contact Number *</label>
            <div>
            <input type="text" name="contactNumber" className="mt-3 text-[14px] bg-[rgba(0, 0, 0, .04)] rounded-sm border-2 border-[solid] p-[6px] 
             w-[75%] font-black leading-[20px] text-[#555] bg-[#f1f1f1] border-none sm:p-[8px]" />
            </div>
           </div>

           <div>
           <label htmlFor="email">Email Address *</label>
            <div>
            <input type="email" name="email" className="mt-3 text-[14px] bg-[rgba(0, 0, 0, .04)] rounded-sm border-2 border-[solid] p-[6px] 
             w-[75%] font-black leading-[20px] text-[#555] bg-[#f1f1f1] border-none sm:p-[8px] " />
            </div>
         
           </div>
      


          <div className="sm:col-span-2">
          <div>
           <label htmlFor="subject">Subject</label>
            <div>
            <input type="text" name="subject" className="mt-3 text-[14px] bg-[rgba(0, 0, 0, .04)] rounded-sm border-2 border-[solid] p-[6px] 
            w-[75%] leading-[20px] text-[#555] bg-[#f1f1f1] border-none sm:p-[8px] " />
            </div>
           </div>

           <div className="pt-2">
            <label htmlFor="message">Message</label>
             <div>
             <textarea type="text" name="message" className="mt-3 font-[poppins] text-[14px] bg-[rgba(0, 0, 0, .04)] font-medium rounded-sm  p-[7px]
              border-2 border-[solid] sm:p-[10px] w-[80%]  h-20 leading-[20px] text-[#555] bg-[#f1f1f1] border-none" />
             </div>
           </div>
           
          
          </div>

          <div className="sm:mx-auto pt-2">
            <input type="submit" name="submit" value="Submit" className=" bg-[#FFD700] cursor-pointer font-bold text-[18px] py-[15px]
             text-white px-[22px] rounded text-center border-none c-w-btn" />
           </div>
           
           </div>

           
         </form>
      
        
         </div>
         
       </div>
    </div>
  )
}

export default Form
