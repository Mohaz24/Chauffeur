
// REUSEABLE COMPONENTS
import Navbar from "./Reusebility/Navbar";
import Intro from "./Reusebility/Intro";
import Main from "./Main";


// !====== Remmber to add the image localy !=====
function Header() {
 
  return (
    <div className="pb-58 md:pb-0">
      <Navbar 
       url="https://images.pexels.com/photos/8425366/pexels-photo-8425366.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
       bgPosition="center"
       height={150}
       title="Australia's Chauffeur Service"
       tw={100}
       tws={100}
       text="Experience the Luxus difference with premium transfers, tours and event transport."
       btnMn="Managing Booking"
       btnIn="Get Instant Quote"
       />
       
       <Intro 
        width={55} 
        title="At Your Service" 
        info="When you choose Luxus, you’re choosing luxury, style, comfort and, most importantly, experience. We’ve been moving Australia 
        for almost 120 years, and in that time, we’ve learnt how to make it memorable. From your friendly driver to your 
        well-appointed vehicle and small touches like umbrellas, coffees and local knowledge, you’ll know you’re in good hands with Luxus."
        />
       <Main />
    </div>
  );
}

export default Header;
