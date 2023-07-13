import React, { useEffect } from 'react'

import './WelcomePage.css'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import SkillCard from '../../components/SkillCard/SkillCard'

import projectCards from '../../constants/projectCardInfo'
import skills from '../../constants/skillsList'
import Colors from '../../constants/colors'

import tobey from '../../assets/images/tobey-maguire.png'
import codeImg from '../../assets/images/code.png'

import { Carousel } from 'react-responsive-carousel'
import ProjectCarousel from '../../components/ProjectCarousel/ProjectCarousel'
import Slider from '../../components/Slider/Slider'

export default function WelcomePage({updatePageName}) {


  useEffect(() => {
    updatePageName('welcome')
  }, [])

  return (
    <div className='flex flex-col'>
      <div className='flex flex-col relative h-[75vh] w-[100%] px-[10vw] justify-center items-end bg-light2'>
        <div className='w-[40%]'>
          <div className='text-[4vmin] text-light1 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>Front End</div>
          <div className='text-[4vmin] text-accent2 ml-8 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>Software Engineer</div>
        </div>
        <div className='w-[50%]'>
          <img id="tobey" src={tobey} className="absolute bottom-0 left-[10vw] max-h-[100%] max-w-[60%]" />
        </div>
      </div>
      
      <div id='projects' className='bg-accent1 px-[10vw] pb-[10vh]'>
        <div className='sticky top-0 flex justify-end items-center mb-[8vh]'>
          <div className='border-dark border-[.3vmin] border-t-light2 rounded-b-[10px]'>
            <h1 style={{backgroundColor: Colors.light2}} className=' text-[48px] py-[1vh] px-[2vh] border-black border-[.1vmin] border-t-light2 font-bold rounded-b-[6px]'>Projects</h1>
          </div>
        </div>
        <Slider slides={projectCards}/>

      </div>
        
      <div id='skills' className='bg-dark px-[10vw]'>
        <div>
        <div className='sticky top-0 flex justify-end items-center'>
          <div className='mb-4 bg-accent1 border-light2 border-[.3vmin] border-t-accent1 rounded-b-[10px]'>
            <h1 className='text-[48px] py-[1vh] px-[2vh] border-black border-[.1vmin] border-t-accent1 font-bold rounded-b-[6px]'>Skills</h1>
          </div>
        </div>
          <div className='flex justify-start items-center'>
              <h1 className='text-[30px] text-light2 mt-[2vh] mb-[1vh] ml-[5vw] py-[1vh] px-[2vh]'>I build web applications using:</h1>
          </div>
          <div className='flex flex-row flex-wrap justify-center items-evenly mb-[10vmin]'>
            {skills.map((skill, idx) => <SkillCard name={skill.name} image={skill.image} key={idx}/>)}
            <div className='flex-col justify-center items-center mx-[4vw] my-[6vh] w-[12vmin] h-[14vmin]'>
              <div className='flex justify-center items-center h-[12vmin] w-[12vmin] bg-light2/10 rounded-[50%]'>
                <img src={codeImg} className='max-h-[6vmin] max-w-[6vmin] m-2 text-light2' alt={'... and more to come!'} title={'... and more to come!'}/>
              </div>
              <h1 className='text-center m-2 text-light2 text-[calc(10px+1vmin)]'>... and more to come!</h1>
            </div>
          </div>
        </div>

      </div>

      <div className='flex flex-col justify-center items-center text-light2'>
        <h1 className='text-[32px]'>This portfolio was built using React.js & TailwindCSS</h1>
      </div>
      

      {/* <iframe src='https://downbeat-daw.herokuapp.com/' height='500' width='800' id='project-frame'></iframe> */}
    </div>
  )
}
