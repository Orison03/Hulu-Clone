import React from 'react'

const HeaderIcon = ({title,Icon}) => {
  return (
    <div className='flex flex-col items-center justify-center group hover:cursor-pointer transition-all ease-in duration-75 md:space-x-2'>
        <Icon className="h-12 w-6 group-hover:animate-bounce"/>
        <h1 className='uppercase font-medium text-xs opacity-0 group-hover:opacity-100 tracking-wider'>{title}</h1>
    </div>
  )
}

export default HeaderIcon