import React, { useState } from 'react'
import DateInput from './DateInput'
import Results from './Results'

export default function AgeCard() {
  const [day, setDay] = useState('')
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')
  const [alert, setAlert] = useState(false)
  const [error, setError] = useState(false)

  const [years, setYears] = useState(0)
  const [months, setMonths] = useState(0)
  const [days, setDays] = useState(0)

  const validate = () => {
    const d = parseInt(day, 10)
    const m = parseInt(month, 10)
    const y = parseInt(year, 10)

    if (isNaN(d) || isNaN(m) || isNaN(y)) {
      setError(true)
      return false
    }

    if (m < 1 || m > 12) {
      setError(true)
      return false
    }

    const birthDate = new Date(y, m - 1, d)
    if (birthDate.getFullYear() !== y || birthDate.getMonth() !== m - 1 || birthDate.getDate() !== d) {
      setError(true)
      return false
    }

    const today = new Date()
    if (birthDate > today) {
      setError(true)
      return false
    }

    setError(false)
    return true
  }

  const calculateExactAge = (bDay, bMonth, bYear) => {
    const today = new Date()
    let cDate = today.getDate()
    let cMonth = today.getMonth() + 1
    let cYear = today.getFullYear()

    if (cDate < bDay) {
      const previousMonth = new Date(cYear, cMonth - 1, 0)
      const daysInPrevMonth = previousMonth.getDate()
      cDate += daysInPrevMonth
      cMonth -= 1
    }

    if (cMonth < bMonth) {
      cMonth += 12
      cYear -= 1
    }

    const resYears = cYear - bYear
    const resMonths = cMonth - bMonth
    const resDays = cDate - bDay

    return { years: resYears, months: resMonths, days: resDays }
  }

  const calculateAge = () => {
    if (!validate()) {
      setAlert(true)
      setYears(0)
      setMonths(0)
      setDays(0)
      return
    }

    setAlert(false)
    const bDay = parseInt(day, 10)
    const bMonth = parseInt(month, 10)
    const bYear = parseInt(year, 10)

    const result = calculateExactAge(bDay, bMonth, bYear)
    setYears(result.years)
    setMonths(result.months)
    setDays(result.days)
  }

  return (
    <div className='flex flex-col w-[100%] md:w-[28rem] h-[500px] md:h-fit py-15 items-center justify-center gap-10 bg-white p-5 border-none rounded-xl rounded-br-[8rem] shadow-xl'>
      <div className='flex flex-row items-center w-[100%] justify-evenly max-w-[50rem]'>
        <DateInput datePeriod={'day'} value={day} onValueChange={setDay} />
        <DateInput datePeriod={'month'} value={month} onValueChange={setMonth} />
        <DateInput datePeriod={'year'} value={year} onValueChange={setYear} />
      </div>

      {(alert || error) && <p className='text-red-600'>Please fill all fields correctly.</p>}

      <div className='flex justify-center items-center w-full'>
        <hr className='w-[50%] text-[#D4D4D4]' />
        <button onClick={calculateAge} className='border-none rounded-3xl bg-[#9E4EFF] text-2xl text-white w-[40px] h-[40px]'>⤵</button>
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
