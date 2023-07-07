import React from 'react'

import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <div className='flex flex-row width-[100%] height-[100%] justify-evenly items-center mx-8 mt-2 text-[1.5vmin]'>
        <Link to='/'>Home</Link>
        <Link to='/about'>Who is this guy?</Link>
        <Link to='/projects'>Okay cool, but what's his work like?</Link>
        <Link to='/contact'>I need to get in touch with this dude</Link>
    </div>
  )
}
