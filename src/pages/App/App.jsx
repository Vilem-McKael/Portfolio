import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router'

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
