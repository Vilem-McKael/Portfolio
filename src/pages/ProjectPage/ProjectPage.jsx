import React, { useEffect } from 'react'
import ProjectSlide from '../../components/ProjectSlide/ProjectSlide'

import Projects from '../../constants/projects'

export default function ProjectPage({updatePageName}) {

  // Should be able to access a test version of each app from this page, using iframes

  useEffect(() => {
    updatePageName('projects')
  }, [])

  return (
    <div className='snap-y snap-mandatory bg-light2 w-[100vw]] h-[100vh] overflow-scroll'>
      {Projects.map((project, idx) => <ProjectSlide key={idx} title={project.title} description={project.description} technologies={project.technologies} liveLink={project.liveLink} githubLink={project.githubLink} images={project.images} demoGIF={project.demoGIF} index={idx}/>)}
    </div>
  )
}
