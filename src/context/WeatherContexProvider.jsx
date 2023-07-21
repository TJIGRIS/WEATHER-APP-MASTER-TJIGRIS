import { createContext, useContext } from 'react'
import { useWeatherReducer } from '../hooks/useWeatherReducer'
import { useSearch } from '../hooks/useSearch'
import { useLocation } from '../hooks/useLocation'

const AuthContext = createContext()

export function useWeatherContext () {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error(
      'useWeatherContext must be used within a WeatherContextProvider'
    )
  }

  return context
}

export function WeatherContextProvider ({ children }) {
  const {
    weather,
    location,
    toogle,
    units,
    inicial,
    setWeather,
    setLocation,
    setToogle,
    setUnits,
    setInicial
  } = useWeatherReducer()

  const { search, getWeather, changeSearch } = useSearch(setWeather, units)

  const { getWeatherApiLocation } = useLocation(
    location,
    units,
    inicial,
    setLocation,
    setWeather,
    setInicial
  )

  return (
    <AuthContext.Provider
      value={{
        weather,
        search,
        inicial,
        units,
        toogle,
        changeSearch,
        getWeather,
        setToogle,
        setUnits,
        getWeatherApiLocation
      }}>
      {children}
    </AuthContext.Provider>
  )
}
