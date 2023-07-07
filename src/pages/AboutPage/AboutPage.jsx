import React, { useEffect } from 'react'

export default function AboutPage({updateSideBarLinks}) {

  useEffect(() => {
    updateSideBarLinks('about')
  }, [])

  return (
    <div>AboutPage</div>
  )
}
