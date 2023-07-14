import React, { useState } from 'react'
import Projects from '../../constants/projects'

import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs'

import {RxDotFilled} from 'react-icons/rx'

import tennisGIF from '../../assets/gifs/tennisball.gif'

export default function Slider({slides}) {

    const [currentIndexes, setCurrentIndexes] = useState([0, 1, 2])

    const prevSlide = () => {
        console.log(slides.length)
        console.log(currentIndexes.map((index) => index - 1 % (slides.length - 1)))
        setCurrentIndexes((prevIndexes) => prevIndexes.map((index) => {
            return index - 1 === -1 ? slides.length - 1 : index - 1;
        }))
    }

    const nextSlide = () => {
        console.log(currentIndexes.map((index) => index + 1 % (slides.length - 1)))
        setCurrentIndexes((prevIndexes) => prevIndexes.map((index) => {
            return index + 1 === slides.length ? 0 : index + 1;
        }))
    }

    const goToSlide = (slideIndex) => {
        const diff = slideIndex - currentIndexes[0] % (slides.length);
        setCurrentIndexes((prevIndexes) => prevIndexes.map((index) => index - diff % (slides.length - 1)))
    }
    
  return (
    <div className='w-full h-full m-auto my-[4vmin] px-4 relative group'>
        <div className='flex justify-evenly items-center'>
            <div style={{backgroundImage: `url(${slides[currentIndexes[0]].demoGIF ? slides[currentIndexes[0]].demoGIF : tennisGIF})`}} className='relative w-[25vmin] h-[20vh] max-w-[25vw] max-h-[20vh] mx-[2vmin] rounded-2xl bg-center bg-cover duration-500'>
                <div className='hover:block flex absolute bottom-0 justify-center items-end w-full z-30 bg-black/20'>
                    {slides[currentIndexes[0]].title}
                </div>
            </div>
            <div style={{backgroundImage: `url(${slides[currentIndexes[1]].demoGIF ? slides[currentIndexes[1]].demoGIF : tennisGIF})`}} className='relative w-[25vmin] h-[20vh] max-w-[25vw] max-h-[20vh] mx-[2vmin] rounded-2xl bg-center bg-cover duration-500'>
                <div className='flex absolute bottom-0 justify-center items-end w-full z-30 bg-black/20'>
                    {slides[currentIndexes[1]].title}
                </div>
            </div>
            <div style={{backgroundImage: `url(${slides[currentIndexes[2]].demoGIF ? slides[currentIndexes[2]].demoGIF : tennisGIF})`}} className='relative w-[25vmin] h-[20vh] max-w-[25vw] max-h-[20vh] mx-[2vmin] rounded-2xl bg-center bg-cover duration-500'>
                <div className='flex absolute bottom-0 justify-center items-end w-full z-30 bg-black/20'>
                    {slides[currentIndexes[2]].title}
                </div>
            </div>
        </div>
        <div className='hidden group-hover:block absolute top-[85%] left-[10vmin] text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        <div className='hidden group-hover:block absolute top-[85%] right-[10vmin] text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
        <div className='flex top-4 justify-center pt-[5vmin]'>
            {Projects.map((card, idx) => (
                <div className={'text-2xl cursor-pointer'} key={idx}>
                    <RxDotFilled style={{color: `${idx === currentIndexes[0] ? 'grey' : 'black'}`}} onClick={() => goToSlide(idx)} />
                </div>
            ))}
        </div>
    </div>
  )
}
