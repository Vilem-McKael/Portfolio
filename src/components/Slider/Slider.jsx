import React, { useState } from 'react'

import { HashLink } from 'react-router-hash-link'

import Projects from '../../constants/projects'

import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs'

import {RxDotFilled} from 'react-icons/rx'

import tennisGIF from '../../assets/gifs/tennisball.gif'
import { Link } from 'react-router-dom'

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

    const getIndexColor = (slideIndex) => {
        if (currentIndexes[1] === slideIndex) {
            return '#000000'
        } else if (currentIndexes.includes(slideIndex)) {
            return '#888888'
        // } else if (currentIndexes.includes(slideIndex-1) || currentIndexes.includes(slideIndex+1)) {
        //     return '#888888'
        //
        } else {
            return '#BBBBBB'
        }
    }
    
  return (
    <div className='w-full h-full m-auto my-[4vmin] py-[4vmin] relative group bg-light2 border-med_dark border-[10px] rounded-[20px]'>
        <div className='flex justify-evenly items-center'>
            {/* <HashLink to={`/projects/#${slides[currentIndexes[0]].id}`} className='relative flex justify-center items-center'> */}
            <div style={{backgroundImage: `url(${slides[currentIndexes[0]].demoGIF ? slides[currentIndexes[0]].demoGIF : tennisGIF})`}} className='relative w-[25vmin] h-[20vmin] max-w-[25vw] max-h-[20vh] mx-[2vmin] rounded-2xl bg-center bg-cover duration-500'>
                <div className='flex absolute bottom-0 rounded-b-2xl justify-center items-end text-light1 w-full text-[10px] text-center md:text-[16px] z-30 bg-black/70'>
                    {slides[currentIndexes[0]].title}
                </div>
            </div>
            {/* </HashLink> */}
            {/* <HashLink to={`/projects/#${slides[currentIndexes[1]].id}`} className='relative flex justify-center items-center'> */}
            <div style={{backgroundImage: `url(${slides[currentIndexes[1]].demoGIF ? slides[currentIndexes[1]].demoGIF : tennisGIF})`}} className='relative w-[40vmin] h-[30vmin] max-w-[35vw] max-h-[28vh] mx-[2vmin] rounded-2xl bg-center bg-cover duration-500'>
                <div className='flex absolute bottom-0 rounded-b-2xl justify-center items-end text-light1 w-full text-[10px] text-center md:text-[16px] z-30 bg-black/70'>
                    {slides[currentIndexes[1]].title}
                </div>
            </div>
            {/* </HashLink> */}
            {/* <HashLink to={`/projects/#${slides[currentIndexes[2]].id}`} className=' relative flex justify-center items-center'> */}
            <div style={{backgroundImage: `url(${slides[currentIndexes[2]].demoGIF ? slides[currentIndexes[2]].demoGIF : tennisGIF})`}} className='relative w-[25vmin] h-[20vmin] max-w-[25vw] max-h-[20vh] mx-[2vmin] rounded-2xl bg-center bg-cover duration-500'>
                <div className='flex absolute bottom-0 rounded-b-2xl justify-center items-end text-light1 w-full text-[10px] text-center md:text-[16px] z-30 bg-black/70'>
                    {slides[currentIndexes[2]].title}
                </div>
            </div>
            {/* </HashLink> */}
        </div>
        <div className='md:hidden group-hover:block absolute top-[72%] md:top-[85%] left-2 md:left-[10vmin] rounded-full p-2 bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        <div className='md:hidden group-hover:block absolute top-[72%] md:top-[85%] right-2 md:right-[10vmin] rounded-full p-2 bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
        <div className='flex top-4 justify-center pt-[5vmin]'>
            {Projects.map((card, idx) => (
                <div className={'text-2xl cursor-pointer'} key={idx}>
                    <RxDotFilled style={{color: getIndexColor(idx)}} onClick={() => goToSlide(idx)}/>
                </div>
            ))}
        </div>
    </div>
  )
}
