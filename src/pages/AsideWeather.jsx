import { InfoAside } from '../components/InfoAside'
import { SearchCity } from '../components/SearchCity'
import { useWeatherContext } from '../context/WeatherProvider'

export function AsideWeather () {
  const { isSearch } = useWeatherContext()

  return (
    <aside className='min-w-[459px] py-[42px] bg-primary h-[100vh] flex flex-col justify-between items-center'>
      <SearchCity />

      {isSearch === false && <InfoAside />}
    </aside>
  )
}
