import { img } from '../assets/Img'
import { useWeatherContext } from '../context/WeatherContexProvider'
import { BiCurrentLocation } from 'react-icons/bi'
import { ImLocation } from 'react-icons/im'

export function Aside () {
  const { weather, search, changeSearch, getWeather } = useWeatherContext()

  const handleChangeSearch = (e) => {
    const newCity = e.target.value
    changeSearch(newCity)
  }

  const handleGetWeather = (e) => {
    e.preventDefault()
    getWeather()
  }

  return (
    <aside className='w-[459px] min-h-screen bg-primary p-[32px] flex flex-col justify-between'>
      <header className='flex justify-between items-center'>
        <form onSubmit={handleGetWeather}>
          <input
            className='w-[161px] h-[40px] bg-accent shadow-card pl-3 outline-none'
            type='text'
            value={search}
            placeholder='Search for places'
            onChange={handleChangeSearch}
          />
        </form>

        <button className='w-[40px] h-[40px] bg-accent shadow-card rounded-full flex justify-center items-center'>
          <BiCurrentLocation size={24} />
        </button>
      </header>

      <picture className='relative grid place-items-center h-[250px]'>
        <div className='absolute w-full h-full bg-cloud-background bg-no-repeat bg-contain opacity-10'></div>
        <img className='' src={img[weather[0]?.weatherDay]} alt='' />
      </picture>

      <section className='h-[500px] flex flex-col justify-between'>
        <div className='flex justify-center items-end text-[144px]'>
          <p>{weather[0]?.temp}</p>
          <span className='text-[50px] text-accent -translate-y-10'>°C</span>
        </div>

        <div>
          <p className='text-center text-[36px] text-accent font-semibold'>
            {weather[0]?.weatherDay}
          </p>
        </div>

        <div>
          <p className='text-center text-[18px] text-accent mb-[32px]'>
            {weather[0]?.day}
          </p>

          <div className='flex items-center justify-center gap-2 text-accent text-[18px] font-semibold'>
            <span>
              <ImLocation size={24} />
            </span>
            <p>{weather[0]?.city}</p>
          </div>
        </div>
      </section>
    </aside>
  )
}
