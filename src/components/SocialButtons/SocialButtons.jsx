import React from 'react'
import { Link } from 'react-router-dom'

import linkedInLogo from '../../assets/images/linkedin2.png'
import githubLogo from '../../assets/images/github-mark.png'

export default function SocialButtons() {
  return (
    <div className='flex flex-col'>
        <div className='flex items-center justify-center mb-[2vh] bg-light1 border-[5px] border-dark rounded-[50%] transition hover:scale-110'>
            <Link onClick={() => window.open('https://www.linkedin.com/in/vilem-mckael')}><img src={linkedInLogo} className='h-[25px] md:h-[40px] rounded-[50%] my-[1px] shadow-lg shadow-blue-800'/></Link>
        </div>
        <div className='flex items-center justify-center bg-light1 border-[5px] border-dark rounded-[50%] transition hover:scale-110'>
            <Link onClick={() => window.open('https://www.github.com/vilem-mckael')} className='flex items-center justify-center'><img src={githubLogo} className='h-[25px] md:h-[40px] mb-[1px] mx-[1px] rounded-[50%] shadow-lg shadow-black'/></Link>
        </div>
    </div>
  )
}
