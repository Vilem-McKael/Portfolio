import React from 'react'

import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <div className='flex flex-row ml-[160px] h-[50px] mx-8 justify-evenly items-center text-[16vmin] bg-white/90'>
        <Link to='/'>Home</Link>
        <Link to='/about'>Who is this guy?</Link>
        <Link to='/projects'>Okay cool, but what's his work like?</Link>
        <Link to='/contact'>I need to get in touch with this dude</Link>
    </div>
  )
}
