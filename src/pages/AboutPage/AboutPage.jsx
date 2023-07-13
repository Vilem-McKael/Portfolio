import React, { useEffect } from 'react'

export default function AboutPage({updatePageName}) {

  useEffect(() => {
    updatePageName('about')
  }, [])

  return (
    <div>AboutPage</div>
  )
}
