import {React, useState} from 'react'


function Slider({ slides }) {
    
    const [currentIndex, setCurrentIndex] = useState(0)
    console.log(slides)

    const slider = slides.map((slide) => {
        const sliderImages = {
        background: `url(${slide.url})`,
        width: '100%',
        height: '80vh',
        backgroundPosition: 'center',
        borderRadius: '10px',
        backgroundSize: 'cover',
        objectFit: 'cover',
        padding: '140px',
        backgroundBlendMode: 'darken'
    }
        return  <div style={sliderImages} className="relative opacity-1 text-white">
            <div className="absolute bottom-0 left-0 top-52 z-index-[100px] pl-3">
            <img src={slide.icon} alt="images" className="w[50px] h-[50px]" />
            <h2 className="pt-2">{slide.title}</h2>
            </div>
            <div className="w-48 absolute bottom-10 pl-2 left-0 hidden text-sm hover-content">
                {slide.text}
            </div>
        </div>
    })
   
  return (
     <div className="flex justify-between items-center gap-4 ">
        {slider}
     </div>
  )
}

export default Slider
