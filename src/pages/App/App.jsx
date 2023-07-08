import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router'

import NavBar from '../../components/NavBar/NavBar'
import WelcomePage from '../WelcomePage/WelcomePage'
import AboutPage from '../AboutPage/AboutPage'
import ProjectPage from '../ProjectPage/ProjectPage'
import ContactPage from '../ContactPage/ContactPage'
import SideBar from '../../components/SideBar/SideBar'

import sideBarInfo from '../../constants/sidebarLinkInfo'
import Colors from '../../constants/colors'

function App() {

  const [currentSideBarLinks, setCurrentSideBarLinks] = useState(sideBarInfo.welcome)

  const updateSideBarLinks = (pageName) => {
    setCurrentSideBarLinks(sideBarInfo[pageName])
  }

  return (
    <div id='app' className='bg-white relative'>
      <div id='navbar' className='flex z-10 w-[100vw]'>
        <NavBar />  
      </div>
      <div id='sidebar' style={{backgroundColor: Colors.accent2}}> 
        <SideBar links={currentSideBarLinks}/>
      </div>
      <div id="main" style={{backgroundColor: Colors.dark}}>
        <Routes>
          <Route path='/' element={<WelcomePage updateSideBarLinks={updateSideBarLinks}/>}/>
          <Route path='/about' element={<AboutPage updateSideBarLinks={updateSideBarLinks}/>}/>
          <Route path='/projects' element={<ProjectPage updateSideBarLinks={updateSideBarLinks}/>}/>
          <Route path='/contact' element={<ContactPage updateSideBarLinks={updateSideBarLinks}/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
