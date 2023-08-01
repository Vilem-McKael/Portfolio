import React from 'react'

import Colors from '../../constants/colors.js'
import BigSlider from '../BigSlider/BigSlider.jsx'
import { Link } from 'react-router-dom'

const ColorDict = {
    1: 'accent2',
    2: 'accent1',
    3: 'light1',
    4: 'light2',
    5: 'med_dark',
    6: 'accent1',
}

export default function ProjectSlide({title, subheader, id, description, technologies, liveLink, githubLink, demoGIF, images, index}) {

    

  return (
    <div id={id} style={{backgroundColor: Colors[ColorDict[index]]}} className='snap-start flex flex-col justify-center items-center h-[100vh] w-[100vw] py-[10vh] md:py-0'>
        <div className='flex flex-row w-full justify-between items-end mb-[2vmin] px-[10vw]'>
          <div onClick={() => window.open(liveLink)} className='bg-dark text-light1 text-[10px] md:text-[16px] p-[1vmin] ml-[10vw] rounded-[6px] cursor-pointer underline'>Try it!</div>
          <div className='flex flex-col justify-center items-center'>
            <div className='max-w-[30vw] text-center text-[16px] md:text-[48px] text-dark py-[1vh] px-[2vh] border-black border-[.1vmin] font-bold rounded-[6px] bg-light1'>{title}</div>
            <div className='max-w-[30vw] text-center text-[10px] md:text-[16px] text-dark mt-[1vh] py-[.5vmin] px-[.5vmin] italic font-semibold'>{subheader}</div>
          </div>
          <div onClick={() => window.open(githubLink)} className='bg-dark text-light1 text-[10px] md:text-[16px] text-center p-[1vmin] mr-[10vw] rounded-[6px] cursor-pointer underline'>GitHub</div>
        </div>
        <BigSlider slides={images}/> 
        <div className='px-[10vw] md:px-[20vw] text-[11px] md:text-[16px] mt-[2vh]'>{description}</div>
        <div className='flex flex-col mt-[2vh]'>
          <div className='text-center text-[10px] font-bold md:text-[16px] mb-[1vh] mx-[10vw]'>
          {title} was built using the following technologies:<br />
          </div>
          <div className='flex flex-row justify-center'>
            {technologies.map((tech, idx) => {
              return (
                <div style={{backgroundImage: `url(${tech})`}} key={idx} className='h-[5vmin] w-[5vmin] bg-contain bg-center bg-no-repeat mx-[1vmin]'></div>
              )
            })}
          </div>
        </div>
        
      </div>
  )
}
