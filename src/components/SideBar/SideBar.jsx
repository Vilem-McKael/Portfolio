import React from 'react'

import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

import sideBarInfo from '../../constants/sidebarLinkInfo'

import Colors from '../../constants/colors'

export default function SideBar({currentPageName}) {

    const path = `${currentPageName}`

    console.log(window.location.href)
    console.log(window.location.pathname)

  return (
    <>
    
    <div className='flex flex-col items-center fixed left-0 top-[20vh] w-[8vw] p-[2vmin] bg-accent2 border-[.3vmin] border-l-0 border-light2 rounded-r-[20px]'>
        <Link to='/'><i className='icon flaticon-home text-[calc(12px+3vh)] text-light2'></i></Link>
        {currentPageName === 'welcome' && sideBarInfo[currentPageName].map((link, idx) => {
            return (
                <div className='w-[100%] flex justify-center items-center'>
                    <HashLink to={link.to} key={idx} smooth={true} className='text-[14px] my-[1vh] text-center text-light2 transition-transform delay-50 hover:scale-105 hover:text-light1'>{link.text}</HashLink>
                </div>
            )
        })}
        <Link to='/about'><i className='icon flaticon-avatar text-[calc(12px+3vh)] text-light2'></i></Link>
        {currentPageName === 'about' && sideBarInfo[currentPageName].map((link, idx) => {
            return (
                <div className='w-[100%] flex justify-center items-center'>
                    <HashLink to={link.to} key={idx} smooth={true} className='text-[14px] my-[1vh] text-center text-light2 transition-transform delay-50 hover:scale-105 hover:text-light1'>{link.text}</HashLink>
                </div>
            )
        })}
        <Link to='/projects'><i className='icon flaticon-browser-1 text-[calc(12px+3vh)] text-light2'></i></Link>
        {currentPageName === 'projects' && sideBarInfo[currentPageName].map((link, idx) => {
            return (
                <div className='w-[100%] flex justify-center items-center'>
                    <HashLink to={link.to} key={idx} smooth={true} className='text-[14px] my-[1vh] text-center text-light2 transition-transform delay-50 hover:scale-105 hover:text-light1'>{link.text}</HashLink>
                </div>
            )
        })}
        <Link to='/contact'><i className='icon flaticon-mail text-[calc(12px+3vh)] text-light2'></i></Link>
        <div className='flex flex-col justify-end items-center'>
        {currentPageName === 'contact' && sideBarInfo[currentPageName].map((link, idx) => {
            return (
                <div className='w-[100%] flex justify-center items-center'>
                    <HashLink to={link.to} key={idx} smooth={true} className='text-[14px] my-[1vh] text-center text-light2 transition-transform delay-50 hover:scale-105 hover:text-light1'>{link.text}</HashLink>
                </div>
            )
        })}
        </div>
    </div>
    </>
  )
}
