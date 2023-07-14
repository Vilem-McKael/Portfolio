import React from 'react'

import { Link } from 'react-router-dom'

export default function NavTab({name, icon, links}) {

    console.log(window.location.href)
    console.log(window.location.pathname)
  return (
    <div>
        <div className='flex flex-col fixed right-0 top-[20vh] p-[2vmin] bg-accent2 border-[.3vmin] border-light2 rounded-l-[20px]'>
            <Link to={`/${ name.toLowerCase() }`}><i className='icon flaticon-home text-[calc(12px+3vh)] text-light2'></i></Link>
        </div>
    </div>
  )
}
