import React from "react";

// REUSEABLE COMPONENTS
import SharedHeaders from '../Reusebility/SharedHeaders'
import Map from "../Reusebility/Map";
import Form from "../Reusebility/Form";
import Intro from "../Reusebility/Intro";
import Details from "../Reusebility/Details";

import transport from "../../assets/images/inter.png"

function AboutUS() {
  return (
    <div>
      {/* NAV */}
      <SharedHeaders 
       url={`${transport}`}
       bgPosition="center"
       height={75}
       tw={100}
       textW={50}
       title="About Us"
       text="Australia’s premier chauffeur service"
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
       paddingTop={10}
       />

      {/* INTRO */}
      <Intro 
      title="Luxus Has Been Australia’s Leading Luxury Ground Transport Provider Since 1904" 
      info="We’re Australia’s original chauffeur service with a rich history dating back to the start of the 20th Century. In that time, 
      much has changed, but one thing has remained the same – our steadfast commitment to delivering a reliable, premium transport service – 
      wherever you need to go. With offices nationwide,  and a wide selection of vehicles to move 1-61 passengers in comfort and style, 
      Luxus has your transport covered."
      />

      {/* DETAILS */}
      <Details
        lgw={150}
        title="At Your Service"
        info="The Luxus team, from our back office staff to our chauffeurs are premium passenger
       experience  experts. Whether you need reliable  airport  transfers, impressive  conference and event transport, or a premium 
       chauffeur-driven or VIP signature  services, we keep you   moving nationwide, in comfort and style."
        details="No matter which service you book, here’s what you can expect with Hughes:"
        list={[
          "Reliable service",
          "Professional and discreet chauffeurs",
          "Well-appointed vehicles",
          "Privacy and comfort, to sit back and relax while we take care of the driving.",
          "Convenient meeting points and GPS tracking",
          "24/7 customer service",
          "No waiting, no queues and a high standard of service every single time.",
        ]}

        moreInfo="We make booking a breeze, too, with flexible payment options and support at every step."
        extraDetails="So trust Luxus with your transport, an industry leader for almost 120 years – and counting."
      />

      {/* FAQ */}
      <Map
        title="Australia’s Oldest And Only Nationwide Chauffeur Service"
        text="With offices around Australia, we keep you moving across the country. Alongside our luxury airport and 
        A to B transfers, we offer tour services to see the sights in style, using one of our suggested 
        itineraries or choosing your own adventure."
        subtitle="Find out more about our locations and the services on offer."
      />
      {/* CONTACT US */}
      <Form />
    </div>
  );
}

export default AboutUS;
