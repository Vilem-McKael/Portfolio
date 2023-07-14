import React, { useEffect } from 'react'

import githubLogo from '../../assets/images/github-mark.png'
import linkedInLogo from '../../assets/images/linkedin2.png'
import { Link } from 'react-router-dom'

export default function ContactPage({updatePageName}) {

  useEffect(() => {
    updatePageName('contact')
  }, [])

  const handleSubmit = () => {

  }

  return (
    <div className='flex flex-col justify-center items-center h-[100vh] w-[100vw] px-[10vw] text-light2 text-center'>
      <div className='mt-[8vh] mb-[8vh] bg-light1 border-light border-[.3vmin] rounded-[10px]'>
            <h1 className='text-[48px] text-dark py-[1vh] px-[2vh] border-black border-[.1vmin] font-bold rounded-[6px]'>Contact Me</h1>
          </div>
      <div className='flex flex-row justify-evenly w-[80vw] flex-wrap'>
        <Link onClick={() => window.open('https://www.github.com/vilem-mckael')} className='flex flex-col justify-center items-center'>
        <div className='flex flex-col justify-center items-center w-[140px] h-[140px] p-[2vmin] rounded-[15%] bg-accent2'>
          <img src={githubLogo} className='max-w-[120px] max-h-[120px] bg-light2 rounded-[12%]'/>
          
        </div>
        <div className='text-[1.5rem] text-light2 mt-[2vh] w-[20vmin]'>
            Check Out My GitHub Page
          </div>
        </Link>
        <Link onClick={() => window.open('https://www.linkedin.com/in/vilem-mckael')} className='flex flex-col justify-center items-center'>
        <div className='flex flex-col justify-center items-center w-[140px] h-[140px] p-[2vmin] rounded-[15%] bg-accent2'>
          <img src={linkedInLogo} className='max-w-[120px] max-h-[120px] bg-light2 rounded-[12%]'/>
          
        </div>
        <div className='text-[1.5rem] text-light2 mt-[2vh] w-[20vmin]'>
            Let's Connect on LinkedIn
        </div>
        </Link>
      </div>
      <div className='flex flex-col justify-center items-center w-[80vw] h-[60vh]'>
        <div className='mb-[2vh]'>
          Feel welcome to leave a message for me down below,<br />
          and I will get back to you as soon as possible
        </div>
        <div className='flex flex-row w-[60vw] justify-between mx-[2vw] mb-[2vh]'>
          <div>
            <input className='p-2 bg-light2 text-dark placeholder-gray-500 text-[1.5vmin]' placeholder='Name'></input>
          </div>
          <div>
            <input className='p-2 bg-light2 text-dark placeholder-gray-500 text-[1.5vmin]' placeholder='Email'></input>
          </div>
          <div>
            <input className='p-2 bg-light2 text-dark placeholder-gray-500 text-[1.5vmin]' placeholder='Company (if applicable)'></input>
          </div>
        </div>
        <textarea className=' p-2 bg-light2 w-[60vw] h-[20vh] text-dark placeholder-gray-500 text-[1.5vmin]' placeholder='Your Message'>
          
        </textarea>
        <div className='flex flex-row justify-end w-[60vw]'>
          <button type='submit' onClick={handleSubmit} className='mt-[2vh] p-2 bg-accent1 text-dark rounded-[5px] '>
            Submit
          </button>
        </div>
      </div>
      <div>
        or reach out to me directly at vilemckael@gmail.com
      </div>
    </div>
  )
}
