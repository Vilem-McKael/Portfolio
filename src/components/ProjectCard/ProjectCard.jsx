import React from 'react'
import { Link } from 'react-router-dom'

import tennisball from '../../assets/gifs/tennisball.gif'

import Colors from '../../constants/colors'

export default function ProjectCard({link, title, demoGIF, description}) {
  return (
    <Link to={link} className='m-[2vmin]'>
    <div className='flex flex-col w-[24vw] max-w-[420px] min-w-[300px] h-[22vh] max-h-[360px] min-h-[250px] p-[4vmin] justify-center items-center bg-light2 border-black border-[.2vmin] box-border rounded-[10px]'>
        <div className='mt-[2vh]'>
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
