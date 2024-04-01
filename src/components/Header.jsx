import React from 'react'
// import Chaffuer from  './assets/Chaffuer'
import logoImg from '../assets/images/logo.png'
import Modals from './Modals';
import { NavLink } from 'react-router-dom';
import { BsTelephone } from "react-icons/bs";
import { IoIosArrowDropdown } from "react-icons/io";


// !====== Remmber to add the image localy !=====
function Header() {
  return (
    <header className="bg-[url(https://images.pexels.com/photos/8425027/pexels-photo-8425027.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)] bg-center bg-cover w-full h-svh opacity-4 ">
    <div className="p-2 bg-gray-100  ">
     <nav>
         <ul className="flex  items-center justify-end  gap-5 text-gray-600">
            <li><a href="Join The Fleet">Join The Fleet</a></li>
            <li><a href="Accounts">Accounts</a></li>
            <li><a href="#">Reviews</a></li>
            <div className="flex items-center gap-1">
                <BsTelephone className="self-center"/>
                <li><a href="#"> 1300 615 164</a></li>
            </div>
         </ul>
     </nav>
    </div>
    <div className="flex items-center">
     <img className="w-28 h-30 m-10  text-4xl" src={logoImg} alt="logo" /> 
       
       <section className="text-white text-xl">
          <NavLink className="flex items-center gap-1">
            Airport Transfers
            <IoIosArrowDropdown />
          </NavLink>
           <Modals />
       </section>
    </div>
    </header>
  )
}

export default Header
