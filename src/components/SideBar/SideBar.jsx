import React from 'react'

import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

import Colors from '../../constants/colors'

export default function SideBar({links}) {
  return (
    <div className='flex flex-col w-[160px] h-[100vh]'>
        <img src='https://i.pinimg.com/originals/9b/64/1e/9b641e1a92ac705c8e92bde180f606c7.jpg' width='60' height='60' className='rounded-[100%] my-4 mx-auto'/>
        <div className='h-[90vh] mb-[8vh] flex flex-col justify-end items-center border-t-[.5vmin] border-light2'>
        {links.map((link, idx) => {
            return (
                <div className='h-[8vh] w-[100%] flex justify-center items-center border-b-[.5vmin] border-light2'>
                    <HashLink to={link.to} key={idx} smooth={true} className='text-[20px] text-center text-light2 transition-transform delay-50 hover:scale-105 hover:text-light1'>{link.text}</HashLink>
                </div>
            )
        })}
        </div>
    </div>
  )
}
