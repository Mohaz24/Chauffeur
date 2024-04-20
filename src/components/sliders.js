// Slider images
import cruiseImg from "../assets/images/sliderImages/cruise.png";
import airportImg from "../assets/images/sliderImages/airport.png";
import corporateImg from "../assets/images/sliderImages/corporate.png";
import confrenceImg from "../assets/images/sliderImages/confrence.png";
import luxuryImg from "../assets/images/sliderImages/luxury.png";
import internationalImg from "../assets/images/sliderImages/international.png";


import driverImg from '../assets/images/driver.png'
import seatsImg from '../assets/images/seats-service.png'
import connectionImg from '../assets/images/connection.png'
import transportImg from '../assets/images/transport-car.png'
import interImg from '../assets/images/inter.png'
import serviceImg from '../assets/images/service.png'





// Sliders svg
import plane from "../assets/svg/plane.svg";
import ship from "../assets/svg/ship.svg";
import corporate from "../assets/svg/corporate.svg";
import conference from "../assets/svg/conference.svg";
import luxury from "../assets/svg/luxury.svg";
import student from "../assets/svg/student.svg";

// sliderShow 1
const sliderImages1 = [
  {
    id:1,
    url: `https://images.pexels.com/photos/127905/pexels-photo-127905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`,
    title: "Airport Transfers",
    text: "Avoid the traffic and taxi queuoes! Allow Luxus to take the stress out of travelling to luxury chauffeur-drive vehicle now.",
    icon: `${plane}`,
  },
  {
    id:2,
    url: 'https://images.pexels.com/photos/15460411/pexels-photo-15460411/free-photo-of-luxury-cruise-ship-in-sea.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: "Cruise Ship Transfers",
    text: "Looking for a convenient and stylish way to travel to or from your cruise ship terminal? Luxus Leisure provides pick ups from cruise ship terminals in every city of Australia.",
    icon: `${ship}`,
  },
  {
    id:3,
    url: corporateImg,
    title: "Corporate Transfers",
    text: "For the ultimate corporate transport, travel in comfort and style with our professional, discreet chauffeurs. Your time is precious, so don't waste it driving or waiting in queues for taxis.",
    icon: `${corporate}`,
  },
  {
    id:4,
    url: confrenceImg,
    title: "Conforence & Events",
    text: "Understanding the importance of detailed conference planning, Hughes specialises in providing superior transport for all your delegates and guests.",
    icon: `${conference}`,
  },
  {
    id:5,
    url: luxuryImg,
    title: "Luxury Tours",
    text: "Luxus experienced and knowledgeable chauffeurs can show you all of the must-see sites. Tours are designed to suit your needs, utilising our wide selection of well appointed vehicles.",
    icon: `${luxury}`,
  },
  {
    id:6,
    url: internationalImg,
    title: "International Student Transfers",
    text: "Luxus offers exceptional-quality international student transfers to universities throughout Australia.",
    icon: `${student}`,
  },
];



// sliderShow 1
const sliderImages2 = [
  {
    id:1,
    url: driverImg,
    title: "Book Now",
  },
  {
    id:2,
    url: seatsImg,
    title: "Join Our Team",
  },
  {
    id:3,
    url: connectionImg,
    title: "Airline & Cruise Crewing",
  },
  {
    id:4,
    url: transportImg,
    title: "Our fleet",
  },
  {
    id:5,
    url: interImg,
    title: "The Luxus Experience",
  },
  {
    id:6,
    url: serviceImg,
    title: "History Of Luxus",
  },
];


export {sliderImages1,  sliderImages2};
