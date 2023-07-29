import { img } from '../assets/Img'
import { useWeatherContext } from '../context/WeatherProvider'

function DayWeather ({ dt_txt, temp_max, temp_min, description, units }) {
  return (
    <li className='flex flex-col items-center justify-between p-[16px] bg-primary h-[177px]'>
      <h3>{dt_txt}</h3>

      <div className='h-[66px]'>
        <img className='h-full' src={img[description]} alt={description} />
      </div>

      <div className='flex justify-between w-[120px]'>
        <p>
          {temp_max} {units.symbol}
        </p>
        <p className='text-accent'>
          {temp_min} {units.symbol}
        </p>
      </div>
    </li>
  )
}

export function DaysWeather () {
  const { forecast, units } = useWeatherContext()

  return (
    <ul className='grid grid-cols-layout gap-[26px]'>
      {forecast.map(
        (item, index) =>
          item !== null && <DayWeather key={index} {...item} units={units} />
      )}
    </ul>
  )
}
