import React from 'react'

export default function SkillCard({name, image}) {
  return (
    <div className='mx-8 my-4 p-4'>
      <h1 className='mb-2 text-[40px] font-medium text-center'>{name}</h1>
      <img src={image} className='h-[20vh]'/>
    </div>
  )
}
