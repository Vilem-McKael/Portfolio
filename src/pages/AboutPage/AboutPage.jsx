import React, { useEffect } from 'react'

import losangeles from '../../assets/images/losangeles.jpeg'

import './AboutPage.css'

export default function AboutPage({updatePageName}) {

  useEffect(() => {
    updatePageName('about')
  }, [])

  return (
    <div className='aboutPage h-[100vh] w-[100vw] bg-cover bg-center px-[10vw]'>
      AboutPage
    </div>
  )
}
