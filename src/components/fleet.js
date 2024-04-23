
// ICONS
import profileIcon from "../assets/svg/profile.svg"
import suitcaseIcon from "../assets/svg/suitcase.svg"
import bagIcon from "../assets/svg/bag.svg"


const sedans = [
    {
      img: "https://pngimg.com/d/audi_PNG1766.png",
      title: "Executive Sedans",
      subTitle: "Learn More",
      info: "Perfect for 1-3 passengers with minimal luggage, our executive sedans are well-appointed for your comfort.",
      passenger: `${profileIcon}`,
      suitcase: `${suitcaseIcon}`,
      bag: `${bagIcon}`,
      passLenght: "3 Passengers",
      suitLenght: "2 Suitcases",
      baglenght: "2 Small Bags"
    },

   {
     img: "https://pngimg.com/d/audi_PNG1754.png",
     title: "Premium Sedans",
     subTitle: "Learn More",
     info: "Perfect for 1-3 passengers with minimal luggage, our executive sedans are well-appointed for your comfort.",
     passenger: `${profileIcon}`,
     suitcase: `${suitcaseIcon}`,
     bag: `${bagIcon}`,
     passLenght: "3 Passengers",
     suitLenght: "2 Suitcases",
     baglenght: "2 Small Bags",
     appointment: "Book Now"
  },
];


const suv = [
    {
      img: "https://i.pinimg.com/originals/25/08/76/25087609ce7f3cade3c5c93b11a1bca2.png",
      title: "Premium SUVs",
      subTitle: "Learn More",
      info: "Perfect for 1- 3 passengers with up to 5 suitcases, our premium SUVs include the latest prestige models with top of the line features.",
      passenger: `${profileIcon}`,
      suitcase: `${suitcaseIcon}`,
      bag: `${bagIcon}`,
      passLenght: "3 Passengers",
      suitLenght: "5 Suitcases",
      baglenght: "3 Small Bags"
    }
];

const peopleMovers = [
    {
      img: "https://www.mrdrivers.com.au/uploads/vehicle/1679483015.png",
      title: "People Movers",
      subTitle: "Learn More",
      info: "Perfect for up to 6 passengers with standard luggage, our people movers are luxurious and roomy, with ergonomic design for your comfort.",
      passenger: `${profileIcon}`,
      suitcase: `${suitcaseIcon}`,
      bag: `${bagIcon}`,
      passLenght: "6 Passengers",
      suitLenght: "6 Suitcases",
      baglenght: "4 Small Bags"
    }
];


const minibusesCoaches = [
    {
      img: "https://sydneylimousineservice.com/img/fleets/sprinter/sprinter.png",
      title: "Luxury Minibuses",
      subTitle: "Learn More",
      info: "Perfect for up to 6 passengers with standard luggage, our people movers are luxurious and roomy, with ergonomic design for your comfort.",
      passenger: `${profileIcon}`,
      suitcase: `${suitcaseIcon}`,
      bag: `${bagIcon}`,
      passLenght: `9 - 14`,
      details: "Passengers"
    },

    {
      img: "https://www.pngkey.com/png/full/207-2079204_coach-star-coach-services.png",
      title: "Small Coach",
      subTitle: "Learn More",
      info: "Perfect for up 21 - 54 passengers with standard luggage with a trailer option for additional luggage, our air-conditioned, luxury coaches are a great option for larger groups.",
      passenger: `${profileIcon}`,
      suitcase: `${suitcaseIcon}`,
      bag: `${bagIcon}`,
      passLenght: `21 - 54`,
      details: "Passengers"
    }
];




export { sedans, suv, peopleMovers,  minibusesCoaches}