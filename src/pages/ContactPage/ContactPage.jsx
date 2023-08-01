import React, { useEffect, useState } from 'react'

import githubLogo from '../../assets/images/github-mark.png'
import linkedInLogo from '../../assets/images/linkedin2.png'
import { Link } from 'react-router-dom'

import * as mailjetAPI from '../../utilities/mailjet-api.js'

export default function ContactPage({updatePageName}) {

  const initialFormData = {
    name : '',
    email: '',
    company: '',
    message: ''
  }

  const [formData, setFormData] = useState(initialFormData)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    updatePageName('contact')
  }, [])

  const handleChange = (evt) => {
    setFormData(prevFormData => {
      return {...prevFormData, [evt.target.name]: evt.target.value}
    });
  }

  const handleSubmit = async () => {
    setSubmitted(true)
    await mailjetAPI.sendMessage(formData)
      .then((result) => {
        console.log(result)
      }).catch((err) => {
        console.log(err)
      });
    // setFormData(initialFormData)
  }

  return (
    <div className='flex flex-col items-center'>
    <div className='flex flex-col justify-center items-center h-[90vh] w-[100vw] max-w-[1200px] bg-gradient-to-br from-dark to-med_dark text-light2 text-center'>
      <div className='mt-[8vh] mb-[20px] md:mb-[4vh] bg-light1 border-light border-[.3vmin] rounded-[8px] md:rounded-[10px]'>
          <h1 className='text-[24px] md:text-[48px] text-dark py-[1vh] px-[2vh] border-black border-[.1vmin] font-bold rounded-[6px] md:rounded-[6px]'>
          Contact Me
          </h1>
        </div>
      <div className='flex flex-row justify-evenly w-[80vw] flex-wrap'>
        <Link onClick={() => window.open('https://www.github.com/vilem-mckael')} className='flex flex-col justify-center items-center'>
        <div className='flex flex-col justify-center items-center w-[70px] h-[70px] md:w-[140px] md:h-[140px] p-[2vmin] rounded-[15%] bg-accent2'>
          <img src={githubLogo} className='md:max-w-[120px] md:max-h-[120px] bg-light2 rounded-[12%]'/>
          
        </div>
        <div className='text-[10px] md:text-[20px] text-light2 mt-[2vh] w-[150px] md:w-[30vmin]'>
            Visit my GitHub profile
          </div>
        </Link>
        <Link onClick={() => window.open('https://www.linkedin.com/in/vilem-mckael')} className='flex flex-col justify-center items-center'>
        <div className='flex flex-col justify-center items-center w-[70px] h-[70px] md:w-[140px] md:h-[140px] p-[2vmin] rounded-[15%] bg-accent2'>
          <img src={linkedInLogo} className='md:max-w-[120px] md:max-h-[120px] bg-light2 rounded-[12%]'/>
          
        </div>
        <div className='text-[10px] md:text-[20px] text-light2 mt-[2vh] w-[150px] md:w-[20vmin]'>
            Let's Connect on LinkedIn
        </div>
        </Link>
      </div>
      {!submitted ?
        <div className='flex flex-col justify-center items-center w-[80vw] h-[60vh]'>
          <div className='text-[10px] md:text-[16px] mb-[2vh]'>
            Feel welcome to leave a message for me down below,<br />
            and I will get back to you as soon as possible
          </div>
          <div className='flex flex-col md:flex-row w-[60vw] justify-between mb-[2vh]'>
            <div>
              <input className='mb-[10px] md:mr-[1vw] w-full md:w-auto p-2 bg-light1 text-dark placeholder-gray-500 text-[10px] md:text-[1.5vmin]' name='name' value={formData.name} placeholder='Name' onChange={handleChange}></input>
            </div>
            <div>
              <input className='mb-[10px] md:mb-0 md:mx-[1vw] w-full md:w-auto p-2 bg-light1 text-dark placeholder-gray-500 text-[10px] md:text-[1.5vmin]' name='email' value={formData.email} placeholder='Email' onChange={handleChange}></input>
            </div>
            <div>
              <input className='md:ml-[1vw] w-full md:w-auto p-2 bg-light1 text-dark placeholder-gray-500 text-[10px] md:text-[1.5vmin]' name='company' value={formData.company} placeholder='Company (if applicable)' onChange={handleChange}></input>
            </div>
          </div>
          <textarea className=' p-2 bg-light1 w-[60vw] h-[20vh] text-dark placeholder-gray-500 text-[10px] md:text-[1.5vmin]' name='message' value={formData.message} placeholder='Your Message' maxLength='1500' onChange={handleChange}>
            
          </textarea>
          <div className='flex flex-row justify-center md:justify-end w-[60vw]'>
            <button type='submit' onClick={handleSubmit} className='mt-[2vh] p-2 w-full md:w-auto bg-accent1 text-dark rounded-[5px] '>
              Submit
            </button>
          </div>
        </div>
        :
        <div className='flex flex-col justify-center items-center w-[50vw] h-[60vh]'>
          <div className='text-[16px] italic'>
            Thank you so much for your message!
            I will get back to you as soon as I can.
            <br /><br />
            In the meantime, feel free to continue to explore the rest of the site, or try out one of my projects!
          </div>
        </div>
      }
    </div>
    </div>
  )
}
