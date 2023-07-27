import { BiCurrentLocation } from 'react-icons/bi'
import { useWeatherContext } from '../context/WeatherProvider'

export function ButtonAside () {
  const { isSearch, setIsSearch } = useWeatherContext()

  const handleOpen = () => {
    setIsSearch(!isSearch)
  }

  return (
    <section className='flex justify-between items-center'>
      <button className='h-10 bg-accent px-[20px]' onClick={handleOpen}>
        <p>Search for places</p>
      </button>

      <button className='w-10 h-10 rounded-full bg-accent grid place-items-center text-white hover:bg-background-alt transition-colors duration-300 ease-linear'>
        <BiCurrentLocation size={24} />
      </button>
    </section>
  )
}
