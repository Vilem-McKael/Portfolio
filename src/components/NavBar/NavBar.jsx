import React from 'react'

import { Link } from 'react-router-dom'

import Colors from '../../constants/colors'

export default function NavBar() {
  return (
    <div className='flex flex-row ml-[160px] h-[100px] w-[100%] justify-evenly text-[1.6vw] text-light2 bg-gradient-to-bl from-dark/100 from-45% via-transparent rounded-bl-[100%]'>
        <Link to='/' className='ml-[30vw] mt-[8px] tracking-wider hover:text-light1'>Home</Link>
        <Link to='/about' className='mt-[12px] tracking-wider hover:text-stone-900'>About</Link>
        <Link to='/projects' className='mt-[20px] tracking-wider hover:text-stone-900'>Projects</Link>
        <Link to='/contact' className='mt-[32px] tracking-wider hover:text-stone-900'>Contact Me</Link>
    </div>
    )
    // <div className='flex flex-row ml-[160px] h-[100px] w-[100%] justify-evenly text-[1.6vw] text-stone-600 bg-gradient-to-b from-white/100 via-white/60 to-white/0'>
}
