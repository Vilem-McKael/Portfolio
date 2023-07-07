import React from 'react'
import { Link } from 'react-router-dom'

import tennisball from '../../assets/gifs/tennisball.gif'

export default function ProjectCard({link, title, demoGIF, description}) {
  return (
    <Link to={link} className='m-[10px]'>
    <div className='flex flex-col w-[24vw] max-w-[360px] min-w-[300px] h-[22vh] max-h-[300px] min-h-[250px] p-2 justify-center items-center border-black border-[.2vmin] box-border rounded-[10px]'>
        <div className='mt-[1vh]'>
            <img src={demoGIF ? demoGIF : tennisball} className='max-h-[180px] min-h-[80px] border-black border-[.1vmin] rounded-[10px]'/>
        </div>
        <div className='text-[16px]'>
            {title}
        </div>
        <div className='text-[12px]'>
            {description}
            Laurem Ibsem Dolores Magno Cultum Ragnarok Pluricus
        </div>
    </div>
    </Link>
  )
}
