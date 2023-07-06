import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router'

import NavBar from '../../components/NavBar/NavBar'
import WelcomePage from '../WelcomePage/WelcomePage'
import AboutPage from '../AboutPage/AboutPage'
import ProjectPage from '../ProjectPage/ProjectPage'
import ContactPage from '../ContactPage/ContactPage'
import SideBar from '../../components/SideBar/SideBar'

function App() {

  return (
    <div id='app' className='grid grid-cols-3 height-[100vh] width-[100vw] bg-red-400'>
      <div id='navbar' className='width-[20vw] bg-red-300 ml-0'>
        <NavBar />
      </div>
      <div id='sidebar'>
        <SideBar />
      </div>
      <div id="main" className='width-[80vw] bg-red-200'>
        <Routes>
          <Route path='/' element={<WelcomePage />}/>
          <Route path='/about' element={<AboutPage />}/>
          <Route path='/projects' element={<ProjectPage />}/>
          <Route path='/contact' element={<ContactPage />}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
