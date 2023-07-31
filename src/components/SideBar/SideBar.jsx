import React, { useState } from 'react'

import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

import sideBarInfo from '../../constants/sidebarLinkInfo'




import Colors from '../../constants/colors'

export default function SideBar({currentPageName, mobileView}) {

    const [hoverHome, setHoverHome] = useState(false)
    const [hoverAbout, setHoverAbout] = useState(false)
    const [hoverProjects, setHoverProjects] = useState(false)
    const [hoverContact, setHoverContact] = useState(false)

    const [showBurgerMenu, setShowBurgerMenu] = useState(false)

    function clearHovers() {
        setHoverHome(false);
        setHoverAbout(false);
        setHoverProjects(false);
        setHoverContact(false);
    }

    function handleHover(pageName) {
        clearHovers();
        if (pageName === 'welcome') {
            setHoverHome(true);
            setHoverAbout(false);
            setHoverProjects(false);
            setHoverContact(false);
        } else if (pageName === 'about') {
            setHoverAbout(true)
            setHoverHome(false);
            setHoverProjects(false);
            setHoverContact(false);
        } else if (pageName === 'projects') {
            setHoverProjects(true);
            setHoverHome(false);
            setHoverAbout(false);
            setHoverContact(false);
        } else if (pageName === 'contact') {
            setHoverContact(true);
            setHoverHome(false);
            setHoverAbout(false);
            setHoverProjects(false);
        }
    }

    function toggleShowBurgerMenu() {
        setShowBurgerMenu(() => !showBurgerMenu)
    }


  return (
    <>
    {mobileView ?
    <>
    {showBurgerMenu ?
        <div className='flex justify-center items-center' onClick={toggleShowBurgerMenu}>
            <i className='icon flaticon-more h-[50px] w-[50px]'></i>
        </div>
        :
        <div className='flex justify-center items-center' onClick={toggleShowBurgerMenu}>
            <i className='icon flaticon-more ml-4 mt-4 pt-1 h-[40px] w-[40px] text-[24px] text-light1 text-center bg-dark rounded-[5px]'></i>
        </div>
    }
    
    </>
    :
    <div className='flex flex-col items-start justify-evenly fixed left-0 my-auto h-[400px] p-[2vmin] bg-accent2 border-[.3vmin] border-l-0 border-light2 rounded-r-[20px] transition-transform' onMouseLeave={() => clearHovers()} >
        
            {/*  for bottom border: border-light2 border-b-[.3vmin] */}
            <div onMouseEnter={() => handleHover('welcome')} className='flex flex-row items-center h-[25vh]'>
                <Link to='/'><i className='icon flaticon-home text-2xl text-accent2 px-[10px] pt-[10px] pb-[5px] rounded-[50%] bg-light2 transition-transform delay-50 hover:bg-light1'></i></Link>
                <div className='flex flex-col'>
                {hoverHome && sideBarInfo['welcome'].map((link, idx) => {
                    return (
                        <div key={idx} className='sub-menu ml-[2vw] w-[100%] flex justify-start items-start'>
                            <HashLink to={link.to} smooth={true} className='text-[calc(8px+.5vh)] w-[10vw] my-[.1vh] text-light2 transition-transform delay-50 hover:scale-105 hover:text-light1'>{link.text}</HashLink>
                        </div>
                    )})
                }
                <div className='h-[1vmin]'></div>
                </div>
            </div>

            {/* <div onMouseEnter={() => handleHover('about')} className='flex flex-row items-center h-[25vh] mt-[1vmin]'>
                <Link to='/about'><i className='icon flaticon-avatar text-2xl text-accent2 px-[10px] pt-[10px] pb-[5px] rounded-[50%] bg-light2 transition-transform delay-50 hover:bg-light1'></i></Link>
                <div className='sub-menu-parent flex flex-col'>
                {hoverAbout && sideBarInfo['about'].map((link, idx) => {
                    return (
                        <div key={idx} className='sub-menu ml-[2vw] w-[100%] flex justify-start items-start'>
                            <HashLink to={link.to} smooth={true} className='text-[calc(8px+.5vh)] w-[10vw] my-[.1vh] text-light2 transition-transform delay-50 hover:scale-105 hover:text-light1'>{link.text}</HashLink>
                        </div>
                    )
                })}
                </div>
            </div> */}

            <div onMouseEnter={() => handleHover('projects')} className='flex flex-row items-center h-[25vh] mt-[1vmin]'>
                <Link to='/projects'><i className='icon flaticon-browser-1 text-2xl text-accent2 px-[10px] pt-[10px] pb-[5px] rounded-[50%] bg-light2 transition-transform delay-50 hover:bg-light1'></i></Link>
                <div className='flex flex-col'>
                {hoverProjects && sideBarInfo['projects'].map((link, idx) => {
                    return (
                        <div key={idx} className='sub-menu ml-[2vw] w-[100%] flex justify-start items-start'>
                            <HashLink to={link.to} smooth={true} className='text-[calc(8px+.5vh)] w-[10vw] my-[.1vh] text-light2 transition-transform delay-50 hover:scale-105 hover:text-light1'>{link.text}</HashLink>
                        </div>
                    )
                })}
                </div>
            </div>

            <div onMouseEnter={() => handleHover('contact')} className='flex flex-row items-center h-[25vh] mt-[1vmin]'>
                <Link to='/contact'><i className='icon flaticon-mail text-2xl text-accent2 px-[10px] pt-[10px] pb-[5px] rounded-[50%] bg-light2 transition-transform delay-50 hover:bg-light1'></i></Link>
                <div className='flex flex-col justify-end items-center'>
                <div className='flex flex-col'>
                {hoverContact && sideBarInfo['contact'].map((link, idx) => {
                    return (
                        <div key={idx} className='sub-menu ml-[2vw] w-[100%] flex justify-start items-start'>
                            <HashLink to={link.to} smooth={true} className='text-[calc(8px+.5vh)] w-[10vw] my-[.1vh] text-light2 transition-transform delay-50 hover:scale-105 hover:text-light1'>{link.text}</HashLink>
                        </div>
                    )
                })}
                <div className='h-[1vmin]'></div>
                </div>
            </div>
        </div>
    </div>
    }
    </>
  )
}
