import React, { useState } from 'react'

export default function DateInput({datePeriod ,onValueChange ,value}) {
    
    const handleChange = (e) => {
        onValueChange(e.target.value);
    } 

  return (
    <div className='flex flex-col'>
        <span className='font-bold text-[#8C8C8C] mb-1 text-sm tracking-widest'>{datePeriod.toUpperCase()}</span>
        <input 
        value={value}
        type='number' 
        onChange={handleChange} 
        className='border-1 border-[#D4D4D4] rounded-lg text-lg md:text-4xl font-bold px-2 py-1 md:w-[120px] w-[80px]'></input>
        
    </div>
  )
}
