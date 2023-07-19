import { img } from '../assets/Img'

export function DayWeek ({ day, min, max, next }) {
  return (
    <div className='bg-primary w-full h-[200px] flex flex-col items-center justify-between p-[18px]'>
      <p>{day}</p>
      <picture className='w-[90px]'>
        <img className='w-full h-full' src={img[next]} alt='' />
      </picture>
      <div className='flex justify-between gap-4 w-full text-[16px]'>
        <span>{min}°c</span>
        <span className='text-accent'>{max}°c</span>
      </div>
    </div>
  )
}
