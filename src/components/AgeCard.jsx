import React, { useState } from 'react'
import DateInput from './DateInput'
import Results from './Results'

export default function AgeCard() {
  const [day, setDay] = useState('')
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')
  const [error, setError] = useState(false)
  const [hasCalculated, setHasCalculated] = useState(false)

  const d = parseInt(day, 10)
  const m = parseInt(month, 10)
  const y = parseInt(year, 10)

  const isValidDate = () => {
    if (isNaN(d) || isNaN(m) || isNaN(y)) return false
    if (m < 1 || m > 12) return false

    const birthDate = new Date(y, m - 1, d)
    if (birthDate.getFullYear() !== y || birthDate.getMonth() !== m - 1 || birthDate.getDate() !== d) {
      return false
    }

    const today = new Date()
    if (birthDate > today) return false

    return true
  }

  const calculateExactAge = () => {
    if (!isValidDate()) return { years: 0, months: 0, days: 0 }

    const today = new Date()
    let cDate = today.getDate()
    let cMonth = today.getMonth() + 1
    let cYear = today.getFullYear()

    if (cDate < d) {
      const previousMonth = new Date(cYear, cMonth - 1, 0)
      const daysInPrevMonth = previousMonth.getDate()
      cDate += daysInPrevMonth
      cMonth -= 1
    }

    if (cMonth < m) {
      cMonth += 12
      cYear -= 1
    }

    return {
      years: cYear - y,
      months: cMonth - m,
      days: cDate - d
    }
  }

  const handleCalculate = () => {
    if (!isValidDate()) {
      setError(true)
      setHasCalculated(false)
      return
    }

    setError(false)
    setHasCalculated(true)
  }

  const { years, months, days } = hasCalculated ? calculateExactAge() : { years: 0, months: 0, days: 0 }

  return (
    <div className='flex flex-col w-[100%] md:w-[28rem] h-[500px] md:h-fit py-15 items-center justify-center gap-10 bg-white p-5 border-none rounded-xl rounded-br-[8rem] shadow-xl'>
      <div className='flex flex-row items-center w-[100%] justify-evenly max-w-[50rem]'>
        <DateInput datePeriod={'day'} value={day} onValueChange={setDay} />
        <DateInput datePeriod={'month'} value={month} onValueChange={setMonth} />
        <DateInput datePeriod={'year'} value={year} onValueChange={setYear} />
      </div>

      {error && <p className='text-red-600'>Please fill all fields correctly.</p>}

      <div className='flex justify-center items-center w-full'>
        <hr className='w-[50%] text-[#D4D4D4]' />
        <button onClick={handleCalculate} className='border-none rounded-3xl bg-[#9E4EFF] text-2xl text-white w-[40px] h-[40px]'>⤵</button>
        <hr className='w-[50%] text-[#D4D4D4]' />
      </div>

      <div className='flex flex-col justify-start md:gap-3'>
        <Results result={years} format={' years'} />
        <Results result={months} format={' months'} />
        <Results result={days} format={' days'} />
      </div>
    </div>
  )
}