import React from 'react'
import { Link } from 'react-router-dom'

import tennisball from '../../assets/gifs/tennisball.gif'

export default function ProjectCard({link, title, demoGIF, description}) {
  return (
    <Link to={link} className='m-[10px]'>
    <div className='flex flex-col w-[25vw] h-[20vh] p-2 justify-center items-center border-black border-[.2vmin] box-border rounded-[10px]'>
        <div>
            <img src={tennisball} className='h-[10vh] w-[15vw]'/>
            {/* {demoGIF} */}
        </div>
        <div>
            {title}
        </div>
        <div>
            {description}
        </div>
    </div>
    </Link>
  )
}
