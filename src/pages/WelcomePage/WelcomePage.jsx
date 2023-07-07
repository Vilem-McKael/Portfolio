import React, { useEffect } from 'react'

import './WelcomePage.css'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import SkillCard from '../../components/SkillCard/SkillCard'

import projectCards from '../../constants/projectCardInfo'
import skills from '../../constants/skillsList'

import tobey from '../../assets/images/tobey-maguire.png'

export default function WelcomePage({updateSideBarLinks}) {


  useEffect(() => {
    updateSideBarLinks('welcome')
  }, [])

  return (
    <div className='flex flex-col'>
      <div className='flex flex-col relative h-[65vh] w-[100%] bg-white justify-center items-end'>
        <div className='w-[40%]'>
          <div>Welcome to my Portfolio!</div>
          <div>I make cool projects and stuff</div>
        </div>
        <div className='w-[60%]'>
          <img id="tobey" src={tobey} className="absolute bottom-0 left-0 max-h-[100%] max-w-[80%]" />
        </div>
      </div>
      <div>
        <div className='flex justify-center items-center'>
          <h1 className='text-center text-[48px] mt-[2vh] mb-[1vh] py-[1vh] px-[2vh] bg-white border-black border-[.1vmin] font-bold'>Projects</h1>
        </div>
        <div className='flex flex-row flex-wrap justify-center'>
          {projectCards.map((project, idx) => <ProjectCard link={project.link} title={project.title} demoGIF={project.demoGIF} description={project.description} key={idx}/>)}
        </div>
      </div>
      <div>
        {skills.languages.map((skill, idx) => <SkillCard skill={skill} key={idx}/>)}
      </div>
      <div>
        {skills.frameworksAndLibraries.map((skill, idx) => <SkillCard skill={skill} key={idx}/>)}
      </div>
      <div>
        <h1>This portfolio was built using:</h1>
        <p>React.js & TailwindCSS</p>
      </div>
      {/* <iframe src='https://downbeat-daw.herokuapp.com/' height='500' width='800' id='project-frame'></iframe> */}
    </div>
  )
}
