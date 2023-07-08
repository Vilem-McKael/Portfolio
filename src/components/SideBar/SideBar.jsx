import React from 'react'

import { Link } from 'react-router-dom'

import Colors from '../../constants/colors'

export default function SideBar({links}) {
  return (
    <div className='flex flex-col w-[160px] h-[100vh]'>
        <img src='https://i.pinimg.com/originals/9b/64/1e/9b641e1a92ac705c8e92bde180f606c7.jpg' width='60' height='60' className='rounded-[100%] my-4 mx-auto'/>
        <div className='pl-2 flex flex-col'>
        {links.map((link, idx) => <Link to={link.to} key={idx} style={{color: Colors.light2}} className='my-[4vmin] text-[14px] border-b-[.1vmin] border-black'>{link.text}</Link>)}
        </div>
    </div>
  )
}
