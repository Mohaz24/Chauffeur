import React from 'react'
import Header from './components/Header'
import Home from './components/Pages/Home'
import AirportTrans from './components/Pages/AirportTrans'
import Locations from './components/Pages/Locations'
import Services from './components/Pages/Services'
import TheFleet from './components/Pages/TheFleet'
import AboutUS from './components/Pages/AboutUS'
import ContactUs from './components/Pages/ContactUs'
import Footer from './components/Footer'

// Shared UI 
import NSW from './components/NestedRoutes/NSW'
import VIC from './components/NestedRoutes/VIC'

import { BrowserRouter,  Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
        <Route path='/' element={<Home />}>
          <Route path='/nsw' element={<NSW />} />
          <Route path='/vic' element={<VIC />} />
        </Route>
        <Route path='/airportTransfers' element={<AirportTrans />} />
        <Route path='/locations' element={<Locations />} />
        <Route path='/Services' element={<Services />} />
        <Route path='/fleet' element={<TheFleet />} />
        <Route path='/about' element={<AboutUS />} />
        <Route path='/contact' element={<ContactUs />} />
        </Routes>
        <Footer />
    </BrowserRouter>
  )
}

export default App
