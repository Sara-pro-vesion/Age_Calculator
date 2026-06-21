import React from 'react'
import DateInput from './DateInput'
import Results from './Results'

export default function AgeCard() {

  return (
    <div className='flex flex-col w-[100%] md:w-[28rem] h-[90%] md:h-fit py-15 items-center justify-center gap-10 bg-white p-5 border-none rounded-xl rounded-br-[8rem] shadow-xl'>
        <div className='flex flex-row items-center w-[100%] justify-evenly max-w-[50rem]'>
            <DateInput datePeriod={'day'}/>
            <DateInput datePeriod={'month'}/>
            <DateInput datePeriod={'year'}/>
        </div>
        <div className='flex justify-center items-center w-full'>
            <hr className='w-[50%] text-[#D4D4D4]'/>
            <button className='border-none rounded-3xl bg-[#9E4EFF] text-2xl text-white w-[40px] h-[40px]'>⤵</button>
            <hr className='w-[50%] text-[#D4D4D4]'/>
        </div>
        <div className='flex flex-col justify-start md:gap-3'>
            <Results result={20} format={' years'}/>
            <Results result={6} format={' months'}/>
            <Results result={2} format={'days'}/>
        </div>
    </div>
  )
}
