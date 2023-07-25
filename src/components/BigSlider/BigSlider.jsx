import React, { useState } from 'react'

import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs'

import {RxDotFilled} from 'react-icons/rx'

import tennisGIF from '../../assets/gifs/tennisball.gif'

export default function BigSlider({slides}) {

    const [currentIndex, setCurrentIndex] = useState(0)

    const prevSlide = () => {
        const prevIndex = ((currentIndex + slides.length) - 1) % (slides.length);
        setCurrentIndex(() => prevIndex)
    }

    const nextSlide = () => {
        const nextIndex = (currentIndex + 1) % (slides.length);
        setCurrentIndex(() => nextIndex)
    }

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
    }

    const getIndexColor = (slideIndex) => {
        if (currentIndex === slideIndex) {
            return '#000000'
        } else {
            return '#FFFFFF'
        }
    }
    
  return (
    <div className='w-[65vw] h-[55vh] relative group bg-accent1 border-med_dark border-[10px] rounded-[20px] shadow-black/50 shadow-lg'>
        <div className='w-full h-full flex flex-col justify-evenly items-center'>
            <div style={{backgroundImage: `url(${slides[currentIndex]})`}} className='w-[55vmin] h-[45vmin] max-w-[80vw] max-h-[70vh] rounded-2xl bg-center bg-contain bg-no-repeat'>
            </div>
            <div className='flex justify-center'>
            {slides.map((card, idx) => (
                <div className={'text-2xl cursor-pointer'} key={idx}>
                    <RxDotFilled style={{color: getIndexColor(idx)}} onClick={() => goToSlide(idx)}/>
                </div>
            ))}
        </div>
        </div>
        <div onClick={prevSlide} className='hidden group-hover:block absolute top-[92%] left-[10vmin] text-2xl rounded-full px-[1vmin] pt-[.5vmin] pb-[.1vmin] bg-black/50 text-white cursor-pointer'>
            <i className='icon flaticon-back text-[2vmin]'></i>
        </div>
        <div onClick={nextSlide} className='hidden group-hover:block absolute top-[92%] right-[10vmin] text-2xl rounded-full px-[1vmin] pt-[.5vmin] pb-[.1vmin] bg-black/50 text-white cursor-pointer'>
            <i className='icon flaticon-next-1 text-[2vmin]'></i>
        </div>
        
    </div>
  )
}
