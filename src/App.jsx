import React from 'react'
import Home from './components/Pages/Home'
import JoinTheFleet from './components/Pages/JoinTheFleet'
import Accounts from './components/Pages/Accounts'
import SignIn from './components/Pages/SignIn'
import AirportTrans from './components/Pages/AirportTrans'
import Locations from './components/Pages/Locations'
import Services from './components/Pages/Services'
import TheFleet from './components/Pages/TheFleet'
import AboutUS from './components/Pages/AboutUS'
import ContactUs from './components/Pages/ContactUs'
// import Footer from './components/Footer'

import BookNow from './components/Pages/BookNow'


// Shared UI 
import Layout from './components/NestedRoutes/Layout'

import { BrowserRouter,  Routes, Route } from 'react-router-dom'




function App() {
  return (
    <BrowserRouter>   
        <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/join' element={<JoinTheFleet />} />
          <Route path='/accounts' element={<Accounts />} />
          <Route path='/airportTransfers' element={<AirportTrans />} />
          <Route path='/locations' element={<Locations />} />
          <Route path='/Services' element={<Services />} />
          <Route path='/fleet' element={<TheFleet />} />
          <Route path='/about' element={<AboutUS />} />
          <Route path='/contact' element={<ContactUs />} />
        </Route>
         <Route path='/book' element={<BookNow />} />
         <Route path='/login' element={<SignIn />} />
        </Routes>
       
    </BrowserRouter>
  )
}

export default App
