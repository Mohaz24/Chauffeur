import {React, useState} from 'react'
import Header from '../Header'
import Intro from '../Reusebility/Intro'
import Main from '../Main'



function Home() {
  const [on, setOn] = useState(false)

  function toggleNavbar(toggle) {
    setOn(toggle);
  }

  return (
    <>
       <Header />
    </>
  )
}

export default Home

