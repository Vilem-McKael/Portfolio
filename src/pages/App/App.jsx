import { useEffect, useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router'

import NavBar from '../../components/NavBar/NavBar'
import WelcomePage from '../WelcomePage/WelcomePage'
import AboutPage from '../AboutPage/AboutPage'
import ProjectPage from '../ProjectPage/ProjectPage'
import ContactPage from '../ContactPage/ContactPage'
import SideBar from '../../components/SideBar/SideBar'

import Colors from '../../constants/colors'
import Footer from '../../components/Footer/Footer'
import SocialButtons from '../../components/SocialButtons/SocialButtons'

function App() {

  const [currentPageName, setCurrentPageName] = useState('')
  const [mobileView, setMobileView] = useState(false)

  const updatePageName = (pageName) => {
    setCurrentPageName(pageName)
  }

  useEffect(() => {
    checkMobile();
  }, [])

  useEffect(() => {
    window.addEventListener('resize', checkMobile)
  }, [])

  function checkMobile() {
    console.log(window.innerWidth, 'x', window.innerHeight)
    if (window.innerWidth <= 640) {
      setMobileView(true)
    } else {
      setMobileView(false)
    }
  }


  return (
    <div id='app' className='App relative'>
      <div id='social-buttons' className='fixed right-[20px] top-[20px] md:top-[40px] z-50 sm:z-20'>
        {currentPageName !== 'contact' && <SocialButtons />}
      </div>
      <div id='sidebar' className='fixed z-10 h-[100vh] left-0 flex flex-col justify-start sm:justify-center'> 
        <SideBar currentPageName={currentPageName} mobileView={mobileView}/>
      </div>
      <div id="main" className='bg-light1'>
        <Routes>
          <Route path='/*' element={<WelcomePage updatePageName={updatePageName}/>}/>
          <Route path='/about' element={<AboutPage updatePageName={updatePageName}/>}/>
          <Route path='/projects' element={<ProjectPage updatePageName={updatePageName}/>}/>
          <Route path='/contact' element={<ContactPage updatePageName={updatePageName}/>}/>
        </Routes>
        {currentPageName !== 'projects' && <Footer />}
      </div>
    </div>
    
  )
}

export default App
