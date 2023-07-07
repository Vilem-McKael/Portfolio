import React from 'react'

import { Link } from 'react-router-dom'

export default function SideBar({links}) {
  return (
    <div className='flex flex-col width-[100%} height-[100%]'>
        <img src='https://i.pinimg.com/originals/9b/64/1e/9b641e1a92ac705c8e92bde180f606c7.jpg' width='150' height='150' className='rounded-[50%] my-4 mx-auto'/>
        <div className='pl-2 flex flex-col'>
        {links.map((link, idx) => {
            return <Link to={link.to} key={idx} className='pb-2'>{link.text}</Link>
        })}
        </div>
    </div>
  )
}
