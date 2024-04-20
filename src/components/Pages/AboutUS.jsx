import React from 'react'

// FILES
import Map from '../Reusebility/Map';
import Form from '../Reusebility/Form';
import Intro from '../Reusebility/Intro';

function AboutUS() {
  return (
    <div>
       {/* INTRO */}
        <Intro  title="Luxus Has Been Australia’s Leading Luxury Ground Transport Provider Since 1904" />
       {/* FAQ */}
        <Map/>
       {/* CONTACT US */}
       <Form />
       
    </div>
  )
}

export default AboutUS
