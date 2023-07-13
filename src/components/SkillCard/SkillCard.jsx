import React from 'react'

export default function SkillCard({name, image}) {
  return (
    <div className='flex-col justify-center items-center mx-[4vw] my-[6vh] w-[12vmin] h-[14vmin]'>
      <div className='flex justify-center items-center h-[12vmin] w-[12vmin] bg-light2/10 rounded-[50%]'>
        <img src={image} className='max-h-[7vmin] max-w-[7vmin] m-2 text-light2' alt={name} title={name}/>
      </div>
      <h2 className='mt-[2vh] flex justify-center items-center text-center text-light2 text-lg font-bold'>{name}</h2>
    </div>
  )
}
