import React, { useState } from 'react'

import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

import sideBarInfo from '../../constants/sidebarLinkInfo'

import Colors from '../../constants/colors'

export default function SideBar({currentPageName}) {

    const [hoverHome, setHoverHome] = useState(false)
    const [hoverAbout, setHoverAbout] = useState(false)
    const [hoverProjects, setHoverProjects] = useState(false)
    const [hoverContact, setHoverContact] = useState(false)

    console.log(window.location.href)
    console.log(window.location.pathname)

    function clearHovers() {
        setHoverHome(false);
        setHoverAbout(false);
        setHoverProjects(false);
        setHoverContact(false);
    }

    function handleHover(pageName) {
        clearHovers();
        if (pageName === 'welcome') {
            setHoverHome(true)
        } else if (pageName === 'about') {
            setHoverAbout(true)
        } else if (pageName === 'projects') {
            setHoverProjects(true)
        } else if (pageName === 'contact') {
            setHoverContact(true)
        }
    }

  return (
    <>
    
    <div className='flex flex-col items-start justify-evenly fixed left-0 top-[5vh] bottom-[5vh] h-[90vh] p-[2vmin] bg-accent2 border-[.3vmin] border-l-0 border-light2 rounded-r-[20px]'>
        
            <div onMouseEnter={() => handleHover('welcome')} onMouseLeave={() => clearHovers()} className='flex flex-row items-center h-[20vh] border-light2 border-b-[.3vmin]'>
                <Link to='/'><i className='icon flaticon-home text-[calc(12px+3vh)] text-light2 transition-transform delay-50 hover:text-light1'></i></Link>
                <div className='flex flex-col'>
                {hoverHome && sideBarInfo['welcome'].map((link, idx) => {
                    return (
                        <div className='sub-menu ml-[1vw] w-[100%] flex justify-start items-start'>
                            <HashLink to={link.to} key={idx} smooth={true} className='text-[12px] my-[.5vh] text-light2 transition-transform delay-50 hover:scale-105 hover:text-light1'>{link.text}</HashLink>
                        </div>
                    )})
                }
                <div className='h-[1vmin]'></div>
                </div>
            </div>

            <div onMouseEnter={() => handleHover('about')} onMouseLeave={() => clearHovers()} className='flex flex-row items-center h-[20vh] mt-[1vmin] border-light2 border-b-[.3vmin]'>
                <Link to='/about'><i className='icon flaticon-avatar text-[calc(12px+3vh)] text-light2 transition-transform delay-50 hover:text-light1'></i></Link>
                <div className='sub-menu-parent flex flex-col'>
                {hoverAbout && sideBarInfo['about'].map((link, idx) => {
                    return (
                        <div className='sub-menu ml-[1vw] w-[100%] flex justify-start items-start'>
                            <HashLink to={link.to} key={idx + 10} smooth={true} className='text-[12px] my-[.5vh] text-light2 transition-transform delay-50 hover:scale-105 hover:text-light1'>{link.text}</HashLink>
                        </div>
                    )
                })}
                </div>
            </div>

            <div onMouseEnter={() => handleHover('projects')} onMouseLeave={() => clearHovers()} className='flex flex-row items-center h-[20vh] mt-[1vmin] border-light2 border-b-[.3vmin]'>
                <Link to='/projects'><i className='icon flaticon-browser-1 text-[calc(12px+3vh)] text-light2 transition-transform delay-50 hover:text-light1'></i></Link>
                <div className='flex flex-col'>
                {hoverProjects && sideBarInfo['projects'].map((link, idx) => {
                    return (
                        <div className='sub-menu ml-[1vw] w-[100%] flex justify-start items-start'>
                            <HashLink to={link.to} key={idx + 20} smooth={true} className='text-[12px] my-[.5vh] text-light2 transition-transform delay-50 hover:scale-105 hover:text-light1'>{link.text}</HashLink>
                        </div>
                    )
                })}
                </div>
            </div>

            <div onMouseEnter={() => handleHover('contact')} onMouseLeave={() => clearHovers()} className='flex flex-row items-center h-[20vh] mt-[1vmin]'>
                <Link to='/contact'><i className='icon flaticon-mail text-[calc(12px+3vh)] text-light2 transition-transform delay-50 hover:text-light1'></i></Link>
                <div className='flex flex-col justify-end items-center'>
                <div className='flex flex-col'>
                {hoverContact && sideBarInfo['contact'].map((link, idx) => {
                    return (
                        <div className='sub-menu ml-[1vw] w-[100%] flex justify-start items-start'>
                            <HashLink to={link.to} key={idx + 40} smooth={true} className='text-[12px] my-[.5vh] text-light2 transition-transform delay-50 hover:scale-105 hover:text-light1'>{link.text}</HashLink>
                        </div>
                    )
                })}
                <div className='h-[1vmin]'></div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
