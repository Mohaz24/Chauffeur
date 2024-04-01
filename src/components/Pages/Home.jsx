import React from 'react'
import Header from '../Header'
import Main from '../Main'
import Footer from '../Footer'
import { Outlet } from 'react-router-dom'


function Home() {
  return (
    <>
      <Main />
      <Footer />
    </>
  )
}

export default Home

