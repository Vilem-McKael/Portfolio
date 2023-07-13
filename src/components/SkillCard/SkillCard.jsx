import React from 'react'

export default function SkillCard({name, image}) {
  return (
    <div className='flex-col justify-center items-center mx-[2vw] my-[3vh] w-[10vmin] h-[10vmin]'>
      <div className='flex justify-center items-center h-[12vmin] w-[12vmin] bg-light2/10 rounded-[50%]'>
        <img src={image} className='max-h-[8vmin] max-w-[8vmin] m-2 text-light2' alt={name} title={name}/>
      </div>
    </div>
  )
}
