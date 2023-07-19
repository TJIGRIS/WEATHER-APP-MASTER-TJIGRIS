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
  const { weather, location, setWeather, setLocation } = useWeatherReducer()
  const { search, getWeather, changeSearch } = useSearch(setWeather)
  useLocation(location, setLocation, setWeather)

  return (
    <AuthContext.Provider value={{ weather, search, changeSearch, getWeather }}>
      {children}
    </AuthContext.Provider>
  )
}
