import React, { useEffect } from 'react'

export default function ProjectPage({updateSideBarLinks}) {

  // Should be able to access a test version of each app from this page, using iframes

  useEffect(() => {
    updateSideBarLinks('projects')
  }, [])

  return (
    <div>ProjectPage</div>
  )
}
