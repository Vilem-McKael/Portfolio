import React from 'react'
import { Link } from 'react-router-dom'

import linkedInLogo from '../../assets/images/linkedin2.png'
import githubLogo from '../../assets/images/github-mark.png'

export default function SocialButtons() {
  return (
    <div className='flex flex-col'>
        <div className='flex items-center justify-center mb-[2vh] bg-light2 border-[3px] border-accent2 rounded-[50%]'>
            <Link onClick={() => window.open('https://www.linkedin.com/in/vilem-mckael')}><img src={linkedInLogo} className='h-[3.5vh] rounded-[50%]'/></Link>
        </div>
        <div className='flex items-center justify-center bg-light2 border-[3px] border-accent2 rounded-[50%]'>
            <Link to='https://www.github.com/vilem-mckael' className='flex items-center justify-center'><img src={githubLogo}className='h-[3.5vh] rounded-[50%]'/></Link>
        </div>
    </div>
  )
}
