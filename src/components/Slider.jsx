import {React, useState} from 'react'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import cruiseImg from "../assets/images/sliderImages/cruise.png";

function Sliders({ slides }) {
    
   // const [currentIndex, setCurrentIndex] = useState(0)
    const [display, setDisplay] = useState(slides)

    const toggleOn = (id) => {
        setDisplay((prevImages) => {
            return prevImages.map((items) => {
                return items.id === id ? {...items, isTrue: true} : items
            })
        })
    }

    const toggleOff = (id) => {
        setDisplay((prevImages) => {
            return prevImages.map((items) => {
                return items.id === id ? {...items, isTrue: false} : items
            })
        })
    }

    // SLIDER IMAGE FUNCTION
    const slideImages = (id) => {

    }

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    }

    // const sliderImg = display.map((slide) => {
    //     const sliderImages = {
    //     background: `url(${slide.url})`,
    //     width: '70%',
    //     height: '70vh',
    //     backgroundPosition: 'center',
    //     borderRadius: '10px',
    //     backgroundSize: 'cover',
    //     objectFit: 'cover',
    //     padding: '100px',
    //     backgroundBlendMode: 'darken'
    // }
    //     return <div onMouseEnter={() => toggleOn(slide.id)} onMouseLeave={() => toggleOff(slide.id)} style={sliderImages} className="opacity-1 cursor-pointer font-[SourceSans3]  ">
    //         <div className=" pl-3">
    //         <img src={slide.icon} alt="images" className="w-[50px] h-[50px]" />
    //         <h2 className="pt-2 text-[#FFD700]">{slide.title}</h2>
    //         </div>
    //          {/* {
    //            slide.isTrue && <div className="w-48  pl-2 left-0 text-[white] text-sm "> {slide.text} </div>
    //          } */}
    //          {/* <div onClick={() => sliderImages(slide.id)}s className="cursor-pointer h-[15px] w-[15px] my-0 mx-[2px] bg-[#bbb] rounded-[50%] inline-block self-center absolute top-[450px] "></div> */}
    //     </div>
    // })

    //     const sliderImages = {
    //     background: `https://i.ebayimg.com/images/g/38QAAOSwlk1dGyHJ/s-l400.jpg`,
    //     width: '70%',
    //     height: '70vh',
    //     backgroundPosition: 'center',
    //     borderRadius: '10px',
    //     backgroundSize: 'cover',
    //     objectFit: 'cover',
    //     padding: '100px',
    //     backgroundBlendMode: 'darken'
    // }
  
   
  return (
     <div className=" ">
         {/* {sliderImg} */}
     <Slider  {...settings}>
      <div className="">
      <div className="bg-blue-400 h-[300px]">
        <h3 className="text-center">1</h3>
      </div>
      <div className="bg-blue-400 h-[300px]">
        <h3 className="text-center">2</h3>
      </div>
      <div className="bg-blue-400 h-[300px]">
        <h3 className="text-center">3</h3>
      </div>
      <div className="bg-blue-400 h-[300px]">
        <h3 className="text-center">4</h3>
      </div>
      <div className="bg-blue-400 h-[300px]">
        <h3 className="text-center">5</h3>
      </div>
      <div className="bg-blue-400 h-[300px]">
        <h3 className="text-center">6</h3>
      </div>
      </div>
    </Slider>
     </div>
  )
}

export default Sliders
