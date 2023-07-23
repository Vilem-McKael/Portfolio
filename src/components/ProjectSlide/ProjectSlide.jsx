import React from 'react'

import Colors from '../../constants/colors.js'
import BigSlider from '../BigSlider/BigSlider.jsx'

const ColorDict = {
    1: 'accent2',
    2: 'accent1',
    3: 'light1',
    4: 'light2',
    5: 'dark',
    6: 'accent1',
}

export default function ProjectSlide({title, description, technologies, liveLink, githubLink, demoGIF, images, index}) {

    

  return (
    <div style={{backgroundColor: Colors[ColorDict[index]]}} className='snap-start flex flex-col justify-center items-center h-[100vh] w-[100vw]'>
        <div className='flex flex-row w-full justify-center items-end mb-[2vmin]'>
          <div className='bg-dark text-light1 text-[24px] p-[.5vmin] mr-[10vw] rounded-[6px]'>GitHub Link</div>
          <div className='text-[48px] text-dark py-[1vh] px-[2vh] border-black border-[.1vmin] font-bold rounded-[6px] bg-light1'>{title}</div>
          <div className='bg-dark text-light1 text-[24px] p-[.5vmin] ml-[10vw] rounded-[6px]'>Live Link</div>
        </div>
        <BigSlider slides={images}/>
        <div>{description}</div>
        <div>{liveLink}</div>
        <div>{githubLink}</div>        
        <div>{technologies}</div>
      </div>
  )
}
