import React from 'react'

import { Link } from 'react-router-dom'

import Colors from '../../constants/colors'

export default function NavBar() {
  return (
    <div className='flex flex-col fixed right-0 top-[20vh] p-[2vmin] bg-accent2 border-[.3vmin] border-light2 rounded-l-[20px]'>
        <Link to='/'><i className='icon flaticon-home text-[calc(12px+3vh)] text-light2'></i></Link>
        <Link to='/about'><i className='icon flaticon-avatar text-[calc(12px+3vh)] text-light2'></i></Link>
        <Link to='/projects'><i className='icon flaticon-browser-1 text-[calc(12px+3vh)] text-light2'></i></Link>
        <Link to='/contact'><i className='icon flaticon-mail text-[calc(12px+3vh)] text-light2'></i></Link>
    </div>
    )
    // <div className='flex flex-row ml-[160px] h-[100px] w-[100%] justify-evenly text-[1.6vw] text-stone-600 bg-gradient-to-b from-white/100 via-white/60 to-white/0'>
}
