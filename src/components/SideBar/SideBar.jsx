import React, { useEffect, useState } from 'react'

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

    // useEffect(() => {
    //     window.addEventListener('click', function(evt) {
    //         const openMenu = document.getElementById('openMenu')
    //         console.log(openMenu);
    //         // console.log(evt.target)
    //         if (showBurgerMenu && openMenu && !openMenu.contains(evt.target)) {
    //             setShowBurgerMenu(false);
    //         }
    //     })
    // }, [])

    useEffect(() => {
        setShowBurgerMenu(false);
    }, [currentPageName])

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
        console.log('here')
        // setShowBurgerMenu(true);
        setShowBurgerMenu(() => !showBurgerMenu)
    }


  return (
    <>
    {mobileView ?
        <>
        {showBurgerMenu ?
            <div id='openMenu' className='flex justify-center items-center'>
                <div className='flex flex-col justify-evenly h-[220px] ml-2 mt-2 px-2 rounded-xl bg-dark border-dark border-[1px] text-light1 shadow-lg shadow-black'>
                    <Link to='/' className='flex flex-col justify-center items-center h-[40px] w-[40px]'><i className='icon flaticon-home text-xl text-accent2 px-[11px] pt-[10px] pb-[5px] rounded-[50%] bg-light2 transition-transform delay-50 hover:bg-light1'></i></Link>
                    <Link to='/projects' className='flex flex-col justify-center items-center h-[40px] w-[40px]'><i className='icon flaticon-browser-1 text-xl text-accent2 px-[11px] pt-[10px] pb-[5px] rounded-[50%] bg-light2 transition-transform delay-50 hover:bg-light1'></i></Link>
                    <Link to='/contact' className='flex flex-col justify-center items-center h-[40px] w-[40px]'><i className='icon flaticon-mail text-xl text-accent2 px-[11px] pt-[10px] pb-[5px] rounded-[50%] bg-light2 transition-transform delay-50 hover:bg-light1'></i></Link>
                    <Link onClick={toggleShowBurgerMenu} className='flex flex-col justify-center items-center h-[40px] w-[40px]'><div className='w-full h-full text-lg text-light p-[5px] pt-[7px] text-center rounded-[50%] bg-red-400'>X</div></Link>
                </div>
            </div>
            :
            <div id='closedMenu' className='flex justify-center items-center'>
                <i id='menuIcon' onClick={toggleShowBurgerMenu} className='icon flaticon-more ml-2 mt-2 pt-1 h-[40px] w-[40px] text-[24px] text-light1 text-center bg-dark rounded-[5px] border-black border-[1px] shadow-md shadow-black'></i>
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
