import React, { useEffect } from 'react'

export default function ProjectPage({updatePageName}) {

  // Should be able to access a test version of each app from this page, using iframes

  useEffect(() => {
    updatePageName('projects')
  }, [])

  return (
    <div>ProjectPage</div>
  )
}
