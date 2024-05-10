import React from 'react'

// FILES
import ServiceHeader from '../Reusebility/ServiceHeader'
import Map from '../Reusebility/Map'


function Locations() {
  return (
    <div>
      {/* NAV */}
     <ServiceHeader 
       url="https://images.pexels.com/photos/8425058/pexels-photo-8425058.jpeg"
       bgPosition="center"
       height={100}
       tw={40}
       tws={60}
       textW={50}
       title="Australia’s Only Nationwide Chauffeur Service"
       text="Luxus keeps Australia moving, with premium transport, tour and airport transfer services available across the country."
       btnWidth={60}
       hidden="hidden"
       i="I"
       n="n"
       s="s"
       t="t"
       a="a"
       nx="n"
       nt="t"

       q="Q"
       u="u"
       o="o"
       qt="t"
       e="e"
       />
       <Map 
       title="Premium Transport, Wherever You Are"  
       text="Luxus delivers on all your transport needs with services across the country and a reliable international partner network. 
       From seamless airport transfers at both ends of your journey to customised luxury tours and corporate transport, 
       let Luxus take care of the driving for you."
       width={100}
        />
    </div>
  )
}

export default Locations
