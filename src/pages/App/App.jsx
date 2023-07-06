import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router'

import NavBar from '../../components/NavBar/NavBar'
import WelcomePage from '../WelcomePage/WelcomePage'
import AboutPage from '../AboutPage/AboutPage'
import ProjectPage from '../ProjectPage/ProjectPage'
import ContactPage from '../ContactPage/ContactPage'

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<WelcomePage />}/>
        <Route path='/about' element={<AboutPage />}/>
        <Route path='/projects' element={<ProjectPage />}/>
        <Route path='/contact' element={<ContactPage />}/>
      </Routes>
    </>
  )
}

export default App
