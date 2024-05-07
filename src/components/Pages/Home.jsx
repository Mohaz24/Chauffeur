import React from 'react'
import Header from '../Header'
import Intro from '../Reusebility/Intro'
import Main from '../Main'
import Footer from '../Footer'
import { Outlet } from 'react-router-dom'


function Home() {
  return (
    <>
       <Header />
       <Intro 
        width={55} 
        title="At Your Service" 
        info="When you choose Luxus, you’re choosing luxury, style, comfort and, most importantly, experience. We’ve been moving Australia 
        for almost 120 years, and in that time, we’ve learnt how to make it memorable. From your friendly driver to your 
        well-appointed vehicle and small touches like umbrellas, coffees and local knowledge, you’ll know you’re in good hands with Luxus."
        />
       <Main />
    </>
  )
}

export default Home

