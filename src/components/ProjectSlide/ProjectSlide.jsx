import React from 'react'

import Colors from '../../constants/colors.js'
import BigSlider from '../BigSlider/BigSlider.jsx'
import { Link } from 'react-router-dom'

const ColorDict = {
    1: 'accent2',
    2: 'accent1',
    3: 'light1',
    4: 'light2',
    5: 'dark',
    6: 'accent1',
}

export default function ProjectSlide({title, subheader, id, description, technologies, liveLink, githubLink, demoGIF, images, index}) {

    

  return (
    <div id={id} style={{backgroundColor: Colors[ColorDict[index]]}} className='snap-start flex flex-col justify-center items-center h-[100vh] w-[100vw]'>
        <div className='flex flex-row w-full justify-between items-end mb-[2vmin] px-[10vw]'>
          <div onClick={() => window.open(liveLink)} className='bg-dark text-light1 text-[24px] p-[.5vmin] ml-[10vw] rounded-[6px] cursor-pointer'>Live Link</div>
          <div className='flex flex-col justify-center items-center'>
            <div className='max-w-[30vw] text-center text-[48px] text-dark py-[1vh] px-[2vh] border-black border-[.1vmin] font-bold rounded-[6px] bg-light1'>{title}</div>
            <div className='max-w-[30vw] text-center text-dark mt-[1vh] py-[.5vmin] px-[.5vmin] italic font-semibold'>{subheader}</div>
          </div>
          <div onClick={() => window.open(githubLink)} className='bg-dark text-light1 text-[24px] p-[.5vmin] mr-[10vw] rounded-[6px] cursor-pointer'>GitHub Link</div>
        </div>
        <BigSlider slides={images}/> 
        <div className='px-[20vw] mt-[2vh]'>{description}</div>
        <div>
          {title} was built using the following technologies:<br />
          {technologies.map((tech) => {

          })}
        </div>
        
      </div>
  )
}
