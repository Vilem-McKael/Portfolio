import React from 'react'

import Colors from '../../constants/colors.js'

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
        <div>demo gif and screenshot slideshow</div>
        <div>{title}</div>
        <div>{description}</div>
        <div>{liveLink}</div>
        <div>{githubLink}</div>        
        <div>{technologies}</div>
      </div>
  )
}
