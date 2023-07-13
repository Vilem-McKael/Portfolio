import { useState } from 'react'
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

function App() {

  const [currentPageName, setCurrentPageName] = useState('')

  const updatePageName = (pageName) => {
    setCurrentPageName(pageName)
  }

  return (
    <div id='app' className='bg-white relative'>
      <div id='sidebar' className='fixed z-10 left-0 h-[100vh] flex flex-col justify-center'> 
        <SideBar currentPageName={currentPageName}/>
      </div>
      <div id="main" style={{backgroundColor: Colors.dark}}>
        <Routes>
          <Route path='/' element={<WelcomePage updatePageName={updatePageName}/>}/>
          <Route path='/about' element={<AboutPage updatePageName={updatePageName}/>}/>
          <Route path='/projects' element={<ProjectPage updatePageName={updatePageName}/>}/>
          <Route path='/contact' element={<ContactPage updatePageName={updatePageName}/>}/>
        </Routes>
        <Footer />
      </div>
      {/* <div>
        <Footer />
      </div> */}
    </div>
    
  )
}

export default App
