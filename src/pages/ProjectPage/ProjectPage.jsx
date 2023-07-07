import React, { useEffect } from 'react'

export default function ProjectPage({updateSideBarLinks}) {

  useEffect(() => {
    updateSideBarLinks('projects')
  }, [])

  return (
    <div>ProjectPage</div>
  )
}
