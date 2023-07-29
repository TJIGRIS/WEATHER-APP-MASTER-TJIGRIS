import { AiOutlineClose } from 'react-icons/ai'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { useWeatherContext } from '../context/WeatherProvider'

const City = ({
  name,
  country,
  state,
  lat,
  lon,
  saveWeather,
  saveForecast,
  savePosition
}) => {
  const handleSaveWeather = () => {
    saveWeather(lat, lon)
    saveForecast(lat, lon)
    savePosition({ latitude: lat, longitude: lon })
  }

  return (
    <li className='group'>
      <button
        className='w-full h-16 flex items-center justify-between text-left py-3 px-5 text-text transition-colors border-[1px] border-primary group-hover:border-accent duration-300 ease-linear text-[16px]'
        onClick={handleSaveWeather}>
        {name}, {state}, {country}
        <MdOutlineKeyboardArrowRight
          size={24}
          className='fill-accent opacity-0 duration-300 ease-linear group-hover:opacity-100'
        />
      </button>
    </li>
  )
}

export function SearchCityView () {
  const {
    isSearch,
    city,
    setIsSearch,
    setSearch,
    saveCity,
    saveWeather,
    saveForecast,
    savePosition
  } = useWeatherContext()

  const handleClose = () => {
    setIsSearch(!isSearch)
  }

  const handleSearch = (e) => {
    e.preventDefault()

    const city = e.target.value
    setSearch(city)
  }

  const handleSave = (e) => {
    e.preventDefault()

    saveCity()
  }

  return (
    <section>
      <div className='relative flex justify-between items-center gap-3 mt-7 mb-7'>
        <button className='absolute bottom-16 right-0' onClick={handleClose}>
          <AiOutlineClose size={24} />
        </button>

        <form onSubmit={handleSave}>
          <input
            className='w-full h-10 bg-accent outline-none px-[20px] text-white placeholder:text-white transition-colors duration-300 ease-linear'
            type='text'
            placeholder='Search for places'
            autoFocus
            onChange={handleSearch}
          />
        </form>

        <button
          onClick={handleSave}
          className='w-min h-10 px-5 bg-link grid place-items-center text-white hover:bg-background-alt transition-colors duration-300 ease-linear'>
          Search
        </button>
      </div>

      <ul className='flex flex-col gap-3'>
        {city.map((city, index) => (
          <City
            key={index}
            {...city}
            saveWeather={saveWeather}
            saveForecast={saveForecast}
            savePosition={savePosition}
          />
        ))}
      </ul>
    </section>
  )
}
