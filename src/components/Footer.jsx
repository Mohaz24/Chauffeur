import React from 'react'

// FOOTER IMAGES
import paymentImg from '../assets/images/footerImages/payment.png'
import tours from '../assets/images/footerImages/tours.png'
import aucruise from '../assets/images/footerImages/aucruise.png'
import award from '../assets/images/footerImages/award.png'


// FOOTER SVG
import link from '../assets/svg/link.svg'
import insta from '../assets/svg/insta.svg'
import fb from '../assets/svg/fb.svg'
import goog from '../assets/svg/goog.svg'
import app from '../assets/svg/app.svg'
import sustain from '../assets/svg/sustain.svg'

function Footer() {
  return (
    <footer  className="bg-[#15093E] p-10 flex  justify-between  gap-8 text-white">
      <div>
        LOGO
        <p className="pt-3 text-[14px]">Luxus remains Australia’s only <br />  fully National Chauffeur company <br />
        with dedicated  offices in every <br /> major city, with a network of first- <br />class , experienced drivers 
        across <br /> Australia.</p>
      </div>

      <div>
       <h2> QUICK LINKS </h2>
       <nav className="text-[14px]">
        <ul>
            <li><a href="#" >News & Resources</a></li>
            <li><a href="#">Airport Meeting Points</a></li>
            <li><a href="#">Our Popular Routes</a></li>
            <li><a href="#">Data Retention & Privacy Policy</a></li>
            <li><a href="#">Terms And Conditions</a></li>
            <li><a href="#">Sitemap</a></li>
            <li><a href="#">Google Playstore</a></li>
            <li><a href="#">Apple Store</a></li>
        </ul>
       </nav>
      </div>

      <div>
       <h2>SECURE PAYMENTS</h2>
       <img src={paymentImg} alt="" />
       <div>
        <h2>LET'S STAY CONNECTED</h2>
        {/* <img src={link} alt="" />
        <img src={insta} alt="" />
        <img src={fb} alt="" /> */}
       </div>
      </div>

      <div>
      <h2>DOWNLOAD THE LUXUS APP</h2>
      <img src={goog} alt="" />
      <img src={app} alt="" />
      </div>
    </footer>
  )
}

export default Footer
