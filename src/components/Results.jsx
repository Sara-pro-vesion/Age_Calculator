import React from 'react'

export default function Results({result ,format}) {
  return (
    <div className='flex gap-2 items-center'>
      <p className='text-[#9E4EFF] md:text-6xl text-4xl font-bold'>{result}</p>
      <p className='text-[#121212] md:text-5xl text-3xl font-bold'>{format}</p>
    </div>
  )
}
