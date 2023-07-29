import { useWeatherContext } from '../context/WeatherProvider'
import { ButtonAside } from './ButtonAside'
import { SearchCityView } from './SearchCityView'

export function SearchCity () {
  const { isSearch } = useWeatherContext()

  return (
    <header className='w-full px-[16px] lg:px-[46px]'>
      {isSearch === false && <ButtonAside />}

      {isSearch && <SearchCityView />}
    </header>
  )
}
