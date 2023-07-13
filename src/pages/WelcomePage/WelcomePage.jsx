import React, { useEffect } from 'react'

import './WelcomePage.css'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import SkillCard from '../../components/SkillCard/SkillCard'

import projectCards from '../../constants/projectCardInfo'
import skills from '../../constants/skillsList'
import Colors from '../../constants/colors'

import tobey from '../../assets/images/tobey-maguire.png'

export default function WelcomePage({updateSideBarLinks}) {


  useEffect(() => {
    updateSideBarLinks('welcome')
  }, [])

  return (
    <div className='flex flex-col'>
      <div className='flex flex-col relative h-[75vh] w-[100%] justify-center items-end bg-light2'>
        <div className='w-[40%]'>
          <div className='text-[4vmin] text-light1 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>Front End</div>
          <div className='text-[4vmin] text-accent2 ml-8 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>Software Engineer</div>
        </div>
        <div className='w-[60%]'>
          <img id="tobey" src={tobey} className="absolute bottom-0 left-0 max-h-[100%] max-w-[80%]" />
        </div>
      </div>
      
      <div id='projects' className='bg-accent1'>
        <div className='flex justify-center items-center'>
          <div className='border-black border-[.3vmin] border-t-light2 rounded-b-[10px]'>
            <h1 style={{backgroundColor: Colors.light2}} className=' text-[48px] py-[1vh] px-[2vh] border-black border-[.1vmin] border-t-light2 font-bold rounded-b-[6px]'>Projects</h1>
          </div>
        </div>
        <div className='flex flex-row flex-wrap justify-center'>
          {projectCards.map((project, idx) => <ProjectCard link={project.link} title={project.title} demoGIF={project.demoGIF} description={project.description} key={idx}/>)}
        </div>
      </div>
        
      <div id='skills' className='bg-dark'>
        <div>
          <div className='flex justify-center items-center'>
              <h1 className='text-center text-[48px] text-light2 mt-[2vh] mb-[1vh] py-[1vh] px-[2vh] bg-med_dark border-black border-[.1vmin] font-bold'>Skills</h1>
          </div>
          <div className='flex justify-start items-center'>
              <h1 className='text-[30px] text-light2 mt-[2vh] mb-[1vh] ml-[5vw] py-[1vh] px-[2vh]'>I build web applications using:</h1>
          </div>
          <div className='flex flex-row flex-wrap justify-center items-evenly'>
            {skills.languages.map((skill, idx) => <SkillCard name={skill.name} image={skill.image} key={idx}/>)}
          </div>
        </div>

        <div>
          {skills.other.map((skill, idx) => <SkillCard name={skill.name} image={skill.image} key={idx}/>)}
        </div>

      </div>

      <div className='flex flex-col justify-center items-center text-light2'>
        <h1 className='text-[32px]'>This portfolio was built using React.js & TailwindCSS</h1>
      </div>
      

      {/* <iframe src='https://downbeat-daw.herokuapp.com/' height='500' width='800' id='project-frame'></iframe> */}
    </div>
  )
}
