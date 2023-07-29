import { createContext, useContext, useEffect, useMemo } from 'react'
import { getCity, getForecast, getWeather } from '../services/WeatherApi'
import { useGeoLocation } from '../hooks/useGeoLocation'
import { useWeatherReducer } from '../hooks/useWeatherReducer'
import { useDebounce } from '../hooks/useDebounce'

const WeatherContext = createContext()

export function useWeatherContext () {
  const context = useContext(WeatherContext)

  if (!context) {
    throw new Error('useWeatherContext must be used within a WeatherProvider')
  }

  return context
}

export function WeatherProvider ({ children }) {
  const {
    isSearch,
    search,
    allWeather,
    city,
    forecast,
    loadingSearch,
    units,
    position,
    setIsSearch,
    setSearch,
    setCity,
    setWeather,
    setForecast,
    saveUnits,
    savePosition
  } = useWeatherReducer()

  const { getGeoLocation } = useGeoLocation(
    saveWeather,
    saveForecast,
    savePosition
  )

  const saveCity = async () => {
    const result = await getCity(search)

    setCity(result)
  }

  async function saveWeather (lat, lon) {
    const result = await getWeather(lat, lon, units.unit)

    setWeather(result)
    setIsSearch(false)
  }

  async function saveForecast (lat, lon) {
    const result = await getForecast(lat, lon, units.unit)

    setForecast(result)
  }

  useMemo(() => {
    saveWeather(position.latitude, position.longitude)
    saveForecast(position.latitude, position.longitude)
  }, [units])

  const debouncedSearch = useDebounce(search, 300)

  useEffect(() => {
    if (search.length === 0) return

    saveCity()
  }, [debouncedSearch])

  return (
    <WeatherContext.Provider
      value={{
        isSearch,
        search,
        allWeather,
        city,
        loadingSearch,
        forecast,
        units,
        setIsSearch,
        setSearch,
        saveCity,
        saveWeather,
        saveForecast,
        saveUnits,
        savePosition,
        getGeoLocation
      }}>
      {children}
    </WeatherContext.Provider>
  )
}
