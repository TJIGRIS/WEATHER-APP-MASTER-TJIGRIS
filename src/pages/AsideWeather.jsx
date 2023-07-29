import { InfoAside } from '../components/InfoAside'
import { SearchCity } from '../components/SearchCity'
import { useWeatherContext } from '../context/WeatherProvider'

export function AsideWeather () {
  const { isSearch } = useWeatherContext()

  return (
    <aside className='bg-red-50 min-w-full lg:min-w-[459px]'>
      <div className='flex flex-col lg:fixed min-w-full lg:min-w-[459px] py-[42px] bg-primary min-h-screen justify-between items-center'>
        <SearchCity />

        {isSearch === false && <InfoAside />}
      </div>
    </aside>
  )
}
