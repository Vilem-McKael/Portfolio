import React from 'react'

export default function SkillCard({name, image}) {
  return (
    <div className='flex-col justify-center items-center mx-8 my-4 w-[20vmin] h-[20vmin]'>
      <div className='flex justify-center items-center h-[18vmin] w-[18vmin] bg-light2/10 rounded-[50%]'>
        <img src={image} className='max-h-[12vmin] max-w-[12vmin] m-2 text-light2' alt={name} title={name}/>
      </div>
    </div>
  )
}
