import React from 'react'
import Intro from '../Reusebility/Intro'
import Main from '../Main'
import Footer from '../Footer'
import { Outlet } from 'react-router-dom'


function Home() {
  return (
    <>
       <Intro 
        width={55} 
        title="At Your Service"  />
       <Main />
    </>
  )
}

export default Home

