import React, { useEffect } from 'react'

import './WelcomePage.css'
import ProjectCard from '../../components/ProjectCard/ProjectCard'

export default function WelcomePage({updateSideBarLinks}) {

  const projectCards = [
    {
      link: 'https://downbeat-daw.herokuapp.com/',
      title: 'downbeat',
      demoGIF: '',
      description: ''
    },
    {
      link: 'https://zippy-cranachan-baf821.netlify.app/',
      title: 'Catalyst',
      demoGIF: '',
      description: ''
    },
    {
      link: 'https://can-i-share-my-screen.herokuapp.com/',
      title: 'Can I Share My Screen?',
      demoGIF: '',
      description: ''
    },
    {
      link: 'https://vilem-mckael.github.io/Ultimate-Leapfrog-Checkers-Game/',
      title: 'Ultimate Checkers',
      demoGIF: '',
      description: ''
    },
    {
      link: '#',
      title: 'Vouch',
      demoGIF: '',
      description: 'Coming Soon!'
    },
  ]

  useEffect(() => {
    updateSideBarLinks('welcome')
  }, [])

  return (
    <div>
      <div>Welcome to my Portfolio!</div>
      <div>I make cool projects and stuff</div>
      <div className='flex flex-row flex-wrap justify-center'>
        {projectCards.map((project) => <ProjectCard link={project.link} title={project.title} demoGIF={project.demoGIF} description={project.description}/>)}
      </div>
      <iframe src='https://downbeat-daw.herokuapp.com/' height='500' width='800' id='project-frame'></iframe>
    </div>
  )
}
