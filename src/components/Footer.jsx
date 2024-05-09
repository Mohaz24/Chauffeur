import React from 'react'

// FOOTER IMAGES
import paymentImg from '../assets/images/footerImages/payment.png'
import tours from '../assets/images/footerImages/tours.png'
import aucruise from '../assets/images/footerImages/aucruise.png'
import award from '../assets/images/footerImages/award.png'


import { NavLink } from 'react-router-dom'


// FOOTER SVG
import link from '../assets/svg/link.svg'
import insta from '../assets/svg/insta.svg'
import fb from '../assets/svg/fb.svg'

import logoImg from '../assets/svg/logo.svg'



function Footer() {
  return (
    <footer className="footer font-[SourceSans3] ">
      <div className="bg-[#151515] px-10 py-10 flex flex-col items-start  justify-between gap-5 text-white f-g-2 
      sm:grid sm:grid-cols-2 lg:gap-0 lg:flex lg:flex-row lg:items-start">
      <div>
      <NavLink to="/" className="flex  items-center pb-5 gap-0">
       <img className="pl-0 h-[75px] lg:h-[75px] md:w-28 "  src={logoImg} alt="" />
       <div className="text-[#FFD700] font-[Orbitron] ">
        <hr />
        <h2 className="text-[15px] pt-1 pb-1 md:pt-1 uppercase">Luxus Chauffeur</h2>
        <hr className="border-[1px] bg-[black] round-xs" />
        <p className="text-[9px] md:text-xs ">Australia's Chauffeur Service</p>
       </div>
      </NavLink>
        <p className="pl-7 text-[14px] leading-[24px]">Luxus remains Australia’s only <br />  fully National Chauffeur company <br />
        with dedicated  offices in every <br /> major city, with a network of first- <br />class , experienced drivers 
        across <br /> Australia.</p>
        <div className="flex flex-col pl-7">
        <img src="https://www.hughes.com.au/wp-content/uploads/2023/08/Group-15-1.svg" alt="sustain" className="w-[150px] h-[150px] mb-0" />
         <div className="flex items-center gap-2">
          <img src={tours} alt="nsw" className="w-[50px] h-[50px] mt-0" />
          <img src={aucruise} alt="cruiseAward"  className="w-[70px] h-[70px] mt-0"  />
          <img src={award} alt="cruiseAward"  className="w-[70px] h-[70px] mt-0"  />
         </div>
         </div>
      </div>

      <div className="pl-7">
       <h2 className="pt-6 pb-4 "> QUICK LINKS </h2>
       <nav className="text-[14px]">
        <ul>
            <li  className="pt-3 hover:text-[#FFD700] "><a href="#" >News & Resources</a></li>
            <li  className="pt-3 hover:text-[#FFD700] "><a href="#">Airport Meeting Points</a></li>
            <li  className="pt-3 hover:text-[#FFD700] "><a href="#">Our Popular Routes</a></li>
            <li  className="pt-3 hover:text-[#FFD700] "><a href="#">Data Retention & Privacy Policy</a></li>
            <li  className="pt-3 hover:text-[#FFD700] "><a href="#">Terms And Conditions</a></li>
            <li  className="pt-3 hover:text-[#FFD700] "><a href="#">Sitemap</a></li>
            <li  className="pt-3 hover:text-[#FFD700] "><a href="#">Google Playstore</a></li>
            <li  className="pt-3 hover:text-[#FFD700] "><a href="#">Apple Store</a></li>
        </ul>
       </nav>
      </div>

      <div className="pl-7 pt-6">
       <h2 className="pb-4">SECURE PAYMENTS</h2>
       <img src={paymentImg} alt="cards" className="w-[250px] bg-transparent opacity-1" />
       <div >
        <h2 className="pt-3">LET'S STAY CONNECTED</h2>
         <div className="flex items-center justify-around gap-7 w-[30px] h-[30px] mt-6 cursor-pointer">
          <img src={link} alt="linkiden" />
          <img src={fb} alt="facebook" />
          <img src={insta} alt="instagram" />
         </div>
       </div>
      </div>

      </div>
      <div className="bg-[#FFD700] p-5 flex flex-col gap-4 justify-between sc-t-h  f-p-l sm:flex-row">
        <p>© 2024 Luxus - ALL RIGHTS RESERVED</p>
        <ul className="flex text-white">
          <li><a href="#">Contact |</a></li>
          <li><a href="#">Sitemap |</a></li>
          <li><a href="#">Privacy |</a></li>
          <li><a href="#">Terms & Conditions</a></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
