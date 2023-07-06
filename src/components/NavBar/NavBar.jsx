import React from 'react'

import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <div className='flex flex-row width-[100%} height-[100%]'>
        <Link to='/'>Home</Link>
        |
        <Link to='/about'>About Me</Link>
        |
        <Link to='/projects'>Projects</Link>
        |
        <Link to='/contact'>Contact Me</Link>
    </div>
  )
}
