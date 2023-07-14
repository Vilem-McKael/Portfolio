import React, { useEffect } from 'react'

import losangeles from '../../assets/images/losangeles.jpeg'

export default function AboutPage({updatePageName}) {

  useEffect(() => {
    updatePageName('about')
  }, [])

  return (
    <div className='aboutPage h-[100vh] w-[100vw] bg-cover bg-center mx-[10vw]'>
      AboutPage
    </div>
  )
}
