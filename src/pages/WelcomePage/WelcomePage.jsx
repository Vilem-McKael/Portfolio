import React, { useEffect } from 'react'

import './WelcomePage.css'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import SkillCard from '../../components/SkillCard/SkillCard'

import Projects from '../../constants/projects'
import skills from '../../constants/skillsList'

import vilem from '../../assets/images/vilem.png'
import codeImg from '../../assets/images/code.png'

// import resume from '../../assets/docs/resume.pdf'
// import { Document, Page, pdfjs } from 'react-pdf'
// pdfjs.GlobalWorkerOptions.workerSrc =  `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

import Slider from '../../components/Slider/Slider'

export default function WelcomePage({updatePageName}) {


  useEffect(() => {
    updatePageName('welcome')
  }, [])

  return (
    <div className='flex flex-col w-[100vw] items-center'>
      <div className='flex flex-col relative h-[70vh] w-[100vw] max-w-[1200px] px-[10vw] items-center bg-light2 border-black border-x-[1px]'>
        <div className='flex flex-col justify-center items-center h-[150px] w-[150px] mt-[4vh] mb-[2vh] bg-light1 border-med_dark border-[5px] rounded-[50%] shadow-black shadow-lg'>
          <div className='text-dark text-3xl font-bold text-center'>
            Vilem McKael
          </div>
        </div>
        <div className='w-[100%]'>
          
          <div className='text-[4vmin] text-accent2 ml-8 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>Software Developer</div>
          <div className='text-[4vmin] text-light1 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>Front End // Full Stack</div>
        </div>
        <div className='absolute right-[4vw] bottom-[20vh] w-[40%] h-[30%] flex flex-col justify-evenly items-end bg-light1 p-4 rounded-[5px] shadow-black shadow-lg'>
          <div className='text-[3vmin] mb-1'>
            Bringing great ideas to life, one line of code at a time.
          </div>
          <div className='mb-1 text-[14px]'>
            As a detail-oriented software developer, I am driven to create web applications that are innovative in their functionality and design.
            <br />
              
          </div>
          <a href='Vilem McKael Resume.pdf' download={true} className='flex flex-row items-center text-light1 bg-green-800 hover:bg-green-700 p-2 rounded-[5px]'>
            <div>Resumé </div>
            <i className='mt-[6px] ml-[2px] icon flaticon-next'></i>
          </a>
        </div>
        <div className='w-[50%]'>
          <img id="vilem" src={vilem} className="absolute bottom-0 left-[10vw] max-h-[100%] max-w-[40%]" />
        </div>
      </div>
      
      <div id='projects' className='bg-accent1 w-[100vw] max-w-[1200px] px-[10vw] pb-[10vh] border-black border-x-[1px]'>
        <div className='sticky top-0 flex justify-end items-center mb-[8vh] z-50'>
          <div className='border-dark border-[.3vmin] border-t-light2 rounded-b-[10px]'>
            <h1 className='text-[48px] py-[1vh] px-[2vh] bg-light2 border-black border-[.1vmin] border-t-light2 font-bold rounded-b-[6px]'>Projects</h1>
          </div>
        </div>
        <Slider slides={Projects}/>

      </div>
        
      <div id='skills' className='bg-gradient-to-br from-dark to-med_dark w-[100vw] max-w-[1200px] px-[10vw] border-black border-x-[1px]'>
        <div>
        <div className='sticky top-0 flex justify-end items-center'>
          <div className='mb-4 bg-accent1 border-light2 border-[.3vmin] border-t-accent1 rounded-b-[10px]'>
            <h1 className='text-[48px] py-[1vh] px-[2vh] border-black border-[.1vmin] border-t-accent1 font-bold rounded-b-[6px]'>Skills</h1>
          </div>
        </div>
          <div className='flex justify-center items-center'>
              <h1 className='text-[30px] text-center text-light2 mt-[2vh] mb-[1vh] py-[1vh] px-[2vh]'>I build <span className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-pink-400 to-orange-500'>sleek, intuitive web applications</span> using:</h1>
          </div>
          <div className='flex flex-row flex-wrap justify-center items-evenly mb-[10vmin]'>
            {skills.map((skill, idx) => <SkillCard name={skill.name} image={skill.image} key={idx}/>)}
            <div className='flex-col justify-center items-center mx-[2vw] my-[4vh] w-[12vmin] h-[14vmin]'>
              <div className='flex justify-center items-center h-[12vmin] w-[12vmin] bg-light2/40 rounded-[50%] border-light2 border-[2px] shadow-md shadow-black'>
                <img src={codeImg} className='max-h-[6vmin] max-w-[6vmin] m-2 text-light2 ' alt={'... and more to come!'} title={'... and more to come!'}/>
              </div>
              <h1 className='text-center m-2 text-light2 text-[calc(10px+1vmin)]'>... and more to come!</h1>
            </div>
          </div>
        </div>

      </div>

      <div className='flex flex-col justify-center items-center w-[100vw] text-light2 bg-dark'>
        <h1 className='text-[32px]'>This portfolio was built using React.js & TailwindCSS</h1>
      </div>
      

      {/* <iframe src='https://downbeat-daw.herokuapp.com/' height='500' width='800' id='project-frame'></iframe> */}
    </div>
  )
}
