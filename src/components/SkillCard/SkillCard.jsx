import React from 'react'

export default function SkillCard({name, image}) {
  return (
    <div className='flex flex-col justify-center mx-8 my-4 p-8 bg-med_dark text-light2 rounded-[10px] border-light2 border-[.1vmin]'>
      <h1 className='mb-2 text-[30px] font-medium text-center text-black'>{name}</h1>
      <img src={image} className='max-h-[15vh]'/>
    </div>
  )
}
