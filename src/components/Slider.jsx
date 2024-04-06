import {React, useState} from 'react'


function Slider({ slides }) {
    
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

    const slider = display.map((slide) => {
        const sliderImages = {
        background: `url(${slide.url})`,
        width: '70%',
        height: '70vh',
        backgroundPosition: 'center',
        borderRadius: '10px',
        backgroundSize: 'cover',
        objectFit: 'cover',
        padding: '100px',
        backgroundBlendMode: 'darken'
    }
        return <div onMouseEnter={() => toggleOn(slide.id)} onMouseLeave={() => toggleOff(slide.id)} style={sliderImages} className="opacity-1 cursor-pointer font-[SourceSans3] ">
            <div className=" pl-3">
            <img src={slide.icon} alt="images" className="w-[50px] h-[50px]" />
            <h2 className="pt-2 text-[#FFD700]">{slide.title}</h2>
            </div>
             {/* {
               slide.isTrue && <div className="w-48  pl-2 left-0 text-[white] text-sm "> {slide.text} </div>
             } */}
             {/* <div onClick={() => sliderImages(slide.id)} className="cursor-pointer h-[15px] w-[15px] my-0 mx-[2px] bg-[#bbb] rounded-[50%] inline-block self-center absolute top-[450px] "></div> */}
        </div>
    })

  
   
  return (
     <div className="flex justify-between items-center gap-4 ">
        {slider}
     </div>
  )
}

export default Slider
