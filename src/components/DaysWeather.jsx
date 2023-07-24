import { Sleet } from '../assets/Img'

function DayWeather () {
  return (
    <li className='flex flex-col items-center justify-between p-[16px] bg-primary h-[177px]'>
      <h3>Tomorrow</h3>

      <div className='h-[66px]'>
        <img className='h-full' src={Sleet} alt='' />
      </div>

      <div className='flex justify-between w-[90px]'>
        <p>18°</p>
        <p>18°</p>
      </div>
    </li>
  )
}

export function DaysWeather () {
  return (
    <ul className='grid grid-cols-layout gap-[26px]'>
      <DayWeather />
      <DayWeather />
      <DayWeather />
      <DayWeather />
      <DayWeather />
    </ul>
  )
}
