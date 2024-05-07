
// REUSEABLE COMPONENTS
import Navbar from "./Reusebility/Navbar";


// !====== Remmber to add the image localy !=====
function Header() {
 
  return (
    <header className="pb-58 md:pb-0">
      <Navbar 
       url="https://irp-cdn.multiscreensite.com/344ae3d5/dms3rep/multi/Jean_Chauffeur_Limo_Car_Services.jpg"
       bgPosition="bottom"
       height={150}
       title="Australia's Chauffeur Service"
       tw={100}
       tws={100}
       text="Experience the Luxus difference with premium transfers, tours and event transport."
       btnMn="Managing Booking"
       btnIn="Get Instant Quote"
       />
    </header>
  );
}

export default Header;
