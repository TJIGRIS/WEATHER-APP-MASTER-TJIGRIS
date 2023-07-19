import { WeatherApi } from '../services/WeatherApi'
import { useWeatherReducer } from './useWeatherReducer'

export function useSearch (setWeather) {
  const { search, setSearch } = useWeatherReducer()

  const getWeather = async () => {
    if (search === '' || search === undefined || search === null) return

    const weatherApi = await WeatherApi(search)

    setWeather(weatherApi)
  }
  const changeSearch = (city) => {
    setSearch(city)
  }
  return { search, getWeather, changeSearch }
}
