// Slider images
import cruiseImg from "../assets/images/sliderImages/cruise.png";
import airportImg from "../assets/images/sliderImages/airport.png";
import corporateImg from "../assets/images/sliderImages/corporate.png";
import confrenceImg from "../assets/images/sliderImages/confrence.png";
import luxuryImg from "../assets/images/sliderImages/luxury.png";
import internationalImg from "../assets/images/sliderImages/international.png";

// Sliders svg
import plane from "../assets/svg/plane.svg";
import ship from "../assets/svg/ship.svg";
import corporate from "../assets/svg/corporate.svg";
import conference from "../assets/svg/conference.svg";
import luxury from "../assets/svg/luxury.svg";
import student from "../assets/svg/student.svg";

// slider data
const sliderImages = [
  {
    url: airportImg,
    title: "Airport Transfers",
    text: "Avoid the traffic and taxi queuoes! Allow Luxus to take the stress out of travelling to luxury chauffeur-drive vehicle now.",
    icon: `${plane}`,
  },
  {
    url: cruiseImg,
    title: "Cruise Ship Transfers",
    text: "Looking for a convenient and stylish way to travel to or from your cruise ship terminal? Luxus Leisure provides pick ups from cruise ship terminals in every city of Australia.",
    icon: `${ship}`,
  },
  {
    url: corporateImg,
    title: "Corporate Transfers",
    text: "For the ultimate corporate transport, travel in comfort and style with our professional, discreet chauffeurs. Your time is precious, so don't waste it driving or waiting in queues for taxis.",
    icon: `${corporate}`,
  },
  {
    url: confrenceImg,
    title: "Conforence & Events",
    text: "Understanding the importance of detailed conference planning, Hughes specialises in providing superior transport for all your delegates and guests.",
    icon: `${conference}`,
  },
  {
    url: luxuryImg,
    title: "Luxury Tours",
    text: "Luxus experienced and knowledgeable chauffeurs can show you all of the must-see sites. Tours are designed to suit your needs, utilising our wide selection of well appointed vehicles.",
    icon: `${luxury}`,
  },
  {
    url: internationalImg,
    title: "International Student Transfers",
    text: "Luxus offers exceptional-quality international student transfers to universities throughout Australia.",
    icon: `${student}`,
  },
];

export default sliderImages;
