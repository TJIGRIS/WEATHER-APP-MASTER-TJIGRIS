import { img } from '../assets/Img'
import { MdLocationOn } from 'react-icons/md'
import { useWeatherContext } from '../context/WeatherProvider'
import { getDataWeather } from '../services/InfoDate'

export function InfoAside () {
  const { units, allWeather } = useWeatherContext()

  return (
    <main className='grow w-full flex flex-col items-center'>
      <picture className='relative w-full h-72 my-10 grid place-items-center'>
        <div className='absolute bg-cloud-background w-full h-full bg-cover bg-no-repeat bg-center opacity-5'></div>

        <img
          src={img[allWeather[0]?.description]}
          alt={allWeather[0]?.description}
        />
      </picture>

      <section className='grow flex flex-col justify-between items-center text-center'>
        <div className='flex items-end'>
          <h1 className='text-[144px]'>{allWeather[0]?.main}</h1>
          <span className='text-[50px] text-accent mb-8'>{units.symbol}</span>
        </div>

        <h2 className='text-[36px] text-text-alt font-semibold'>
          {allWeather[0]?.weather}
        </h2>

        <div className='flex flex-col items-center text-accent text-[18px]'>
          <div className='flex items-center gap-2 mb-[32px]'>
            <p>Today</p>
            <span>-</span>
            <p>{getDataWeather()}</p>
          </div>

          <div className='flex items-center gap-2 font-semibold'>
            <MdLocationOn />
            <p>{allWeather[0]?.name}</p>
          </div>
        </div>
      </section>
    </main>
  )
}
