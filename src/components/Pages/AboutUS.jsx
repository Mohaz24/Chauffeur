import React from "react";

// REUSEABLE COMPONENTS
import Map from "../Reusebility/Map";
import Form from "../Reusebility/Form";
import Intro from "../Reusebility/Intro";
import Details from "../Reusebility/Details";

function AboutUS() {
  return (
    <div>
      {/* INTRO */}
      <Intro title="Luxus Has Been Australia’s Leading Luxury Ground Transport Provider Since 1904" />

      {/* DETAILS */}
      <Details
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
